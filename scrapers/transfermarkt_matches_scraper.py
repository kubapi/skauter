import requests
from bs4 import BeautifulSoup
import pandas as pd
from dataclasses import asdict
from datetime import datetime
import os

from data_structures import PlayerMatchData

headers = {
    'authority': 'www.transfermarkt.pl',
    'accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7',
    'user-agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/117.0.0.0 Safari/537.36'
}

def get_player_matches_data_response(url: str) -> requests.Response:
    return requests.get(
        url,
        headers=headers,
    )

def extract_date(date_str):
    month_mapping = {
        'sty': 'Jan',
        'lut': 'Feb',
        'mar': 'Mar',
        'kwi': 'Apr',
        'maj': 'May',
        'cze': 'Jun',
        'lip': 'Jul',
        'sie': 'Aug',
        'wrz': 'Sep',
        'paź': 'Oct',
        'lis': 'Nov',
        'gru': 'Dec'
    }
    
    for non_eng, eng in month_mapping.items():
        date_str = date_str.replace(non_eng, eng)

    return datetime.strptime(date_str, '%d %b %Y')

def extract_own_team_and_rival_team_names_and_positions(cells):
    if 'hauptlink' in cells[0]['class']:
        rival_team_cell_content = cells[0].text.strip()
        own_team_cell_content = cells[1].text.strip()
    else:
        rival_team_cell_content = cells[1].text.strip()
        own_team_cell_content = cells[0].text.strip()
    
    if len(rival_team_cell_content.split('(')) > 1 and len(own_team_cell_content.split('(')) > 1:
        rival_team_name, rival_team_position_in_league = rival_team_cell_content.split('(')
        own_team_name, own_team_position_in_league = own_team_cell_content.split('(')
        rival_team_name = rival_team_name.strip()
        rival_team_position_in_league = int(rival_team_position_in_league.split('.')[0])
        own_team_name = own_team_name.strip()
        own_team_position_in_league = int(own_team_position_in_league.split('.')[0])
        match_type = 'cup'
    else:
        rival_team_name = rival_team_cell_content
        own_team_name = own_team_cell_content
        own_team_position_in_league, rival_team_position_in_league = -1, -1
        match_type = 'league'
        
    return own_team_name, rival_team_name, own_team_position_in_league, rival_team_position_in_league, match_type

def parse_minute(minute):
    return minute.split("'")[0]

def extract_scores(cell):
    cell_content = cell.text
    match_canceled = True
    if 'm. odw.' in cell_content.lower():
        return match_canceled, -1, -1, ''
    
    scores = cell_content.split(' ')[0].split(':')
    cell_class = cell.select('span')[0].get('class', [])
    try:
        match_url = 'https://www.transfermarkt.pl' + cell.select('a')[0]['href']
    except:
        match_url = ''

    if len(scores) == 2:
        score_left, score_right = scores[0].strip(), scores[1].strip()
        if score_left == '-' and score_right == '-':
            return match_canceled, -1, -1, ''
        else:
             score_left, score_right =  int(score_left), int(score_right)
        
        match_canceled = False
        if 'greentext' in cell_class:
            if score_left > score_right:
                return match_canceled, score_left, score_right, match_url
            else:
                return match_canceled, score_right, score_left, match_url
        elif 'redtext' in cell_class:
            if score_left > score_right:
                return match_canceled, score_right, score_left, match_url
            else:
                return match_canceled, score_left, score_right, match_url
        else:
            return match_canceled, score_left, score_right, match_url
        
def extract_players_situation(cell):
    cell_content = cell.text.strip().lower()
    suspended_for_red_card, suspended_for_yellow_cards, in_starting_lineup, stayed_on_bench, played, skipped_cause_of_injury = [False]*6

    if 'bez gier w kadrze' in cell_content:
        in_starting_lineup = True
        stayed_on_bench = True
    elif 'nie w kadrze' in cell_content:
        in_starting_lineup = False
        stayed_on_bench = False
    elif len(cell.select('span.verletzt-table')) >= 1:
        skipped_cause_of_injury = True
    elif len(cell.select('span.icon-rotekarte-table')) >= 1:
        suspended_for_red_card = True
    elif len(cell.select('span.icon-gelbekarte-table')) >= 1:
        suspended_for_yellow_cards = True
    else:
        played = True

    return suspended_for_red_card, suspended_for_yellow_cards, in_starting_lineup, stayed_on_bench, played, skipped_cause_of_injury

def extract_players_position(cell):
    cell_content = cell.text.strip()
    if cell_content == '':
        cell_content = 'N/A'
    is_captain = False
    if len(cell.select('span.kapitaenicon-table')) >= 1:
        is_captain = True
    return cell_content, is_captain

def extract_goals_and_assists_stats(cells):
    return [int(cell.text.strip()) if cell.text.strip() != '' else 0 for cell in cells]

def extract_cards_info(cells):
    return [bool(cell.text.strip()) for cell in cells]

def extract_playtime_stats(cells):
    minute_in, minute_out, minutes_played  = [int(cell.text.replace("'",'').strip()) if cell.text.strip() != '' else None for cell in cells]
    if minutes_played == None:
        minutes_played = 0
    if minutes_played == 90 and minute_in == None:
        minute_in = 0
    if minutes_played > 0 and minute_out == None:
        minute_out = minutes_played
        if minute_in != None:
            minute_out += minute_in
    out_cause_of_injury = False
    if len(cells[1].select('span.verletzt-tabl')) >= 1:
        out_cause_of_injury = True
    return minutes_played, minute_in, minute_out, out_cause_of_injury

def extract_transmarkt_rating(cell):
    cell_content = cell.text.strip().replace(',','.')
    if cell_content != '':
        return float(cell_content)
    return -1.0

def parse_cells(cells_and_positions_dict, player_id: str):
    own_team_name, rival_team_name, own_team_position_in_league, rival_team_position_in_league, match_type = extract_own_team_and_rival_team_names_and_positions([cells_and_positions_dict[3],cells_and_positions_dict[5]])
    match_canceled, score_own_team, score_rival_team, match_url = extract_scores(cells_and_positions_dict[6])
    suspended_for_red_card, suspended_for_yellow_cards, in_starting_lineup, stayed_on_bench, played, skipped_cause_of_injury = extract_players_situation(cells_and_positions_dict[7])
    
    if played:
        starting_position, captain = extract_players_position(cells_and_positions_dict[7])

        goals, asists, own_goals = extract_goals_and_assists_stats([cells_and_positions_dict[8], cells_and_positions_dict[9], cells_and_positions_dict[10]])

        received_yellow_card, received_two_yellows_cards, received_red_cards = extract_cards_info([cells_and_positions_dict[11], cells_and_positions_dict[12], cells_and_positions_dict[13]])

        if len(cells_and_positions_dict) == 18:
            minutes_played, minute_in, minute_out, out_cause_of_injury = extract_playtime_stats([cells_and_positions_dict[14], cells_and_positions_dict[15], cells_and_positions_dict[17]])
            rating_transfermarkt = extract_transmarkt_rating(cells_and_positions_dict[16])
        else:
            minutes_played, minute_in, minute_out, out_cause_of_injury = extract_playtime_stats([cells_and_positions_dict[14], cells_and_positions_dict[15], cells_and_positions_dict[16]])
            rating_transfermarkt = -1.0
    else:
        starting_position = 'N/A'
        captain = False

        goals = -1
        asists = -1
        own_goals = -1

        received_yellow_card = False
        received_two_yellows_cards = False
        received_red_cards = False

        minute_in = -1
        minute_out = -1
        minutes_played = 0
        out_cause_of_injury = False

        rating_transfermarkt = -1.0

    player_match_data = PlayerMatchData(
        player_id = player_id,

        round = cells_and_positions_dict[0].text.strip(),
        date = extract_date(cells_and_positions_dict[1].text.strip()),

        own_team_name = own_team_name,
        rival_team_name = rival_team_name,
        own_team_position_in_league = own_team_position_in_league,
        rival_team_position_in_league = rival_team_position_in_league,
        match_type=match_type,

        match_canceled = match_canceled,
        score_own_team = score_own_team,
        score_rival_team = score_rival_team,
        match_url = match_url,

        suspended_for_red_card = suspended_for_red_card, 
        suspended_for_yellow_cards = suspended_for_yellow_cards,
        in_starting_lineup = in_starting_lineup,
        stayed_on_bench = stayed_on_bench,
        played = played,
        skipped_cause_of_injury = skipped_cause_of_injury,

        starting_position = starting_position,
        captain = captain,

        goals = goals,
        asists = asists,
        own_goals = own_goals,

        received_yellow_card = received_yellow_card,
        received_two_yellows_cards = received_two_yellows_cards,
        received_red_cards = received_red_cards,

        minutes_played = minutes_played,
        minute_in = minute_in,
        minute_out = minute_out,
        out_cause_of_injury = out_cause_of_injury,

        rating_transfermarkt = rating_transfermarkt
    )
    print(player_match_data)
    return player_match_data

def parse_player_matches_data(html_content: str, player_id: str):
    soup = BeautifulSoup(html_content, 'html.parser')
    scraped_matches = []    
    try:
        tables = soup.select("div.box table")
        if len(tables) <= 2:
            return scraped_matches
        
        for table in tables[2:]:
            rows = table.select("tbody tr") 
            if not rows:
                continue
            
            for row in rows:
                print("-" * 50)
                cells = row.select('td')
                if not cells:
                    continue

                cells_and_positions_dict = {index: element for index, element in enumerate(cells)}
                scraped_matches.append(parse_cells(cells_and_positions_dict, player_id)) 
        return scraped_matches
    except Exception as e:
        print(f"Error during parsing: {e}")
        return scraped_matches

def get_player_matches_data(url: str, player_id: str):
    try:
        response = get_player_matches_data_response(url)
        return parse_player_matches_data(response.text, player_id)
    except Exception as e:
        print(f"An error occurred: {e}")
        return []


if __name__ == "__main__": 
    input_df = pd.read_csv('database/modified_transfermarket_players_1998_2008.csv')
    output_filepath = 'database/players_1998_2008_matches_data.csv'
    for index, row in input_df[14536:].iterrows():
        for year in range(2010, 2024):
            url = row['url'].replace('profil','leistungsdatendetails')+f'/plus/1?saison={year}'
            temp_df = pd.DataFrame([asdict(instance) for instance in get_player_matches_data(url, row['player_id'])])
            temp_df.to_csv(output_filepath, mode='a', header=not os.path.exists(output_filepath), index=False)