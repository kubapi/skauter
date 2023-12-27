import requests
from bs4 import BeautifulSoup
import pandas as pd
from dataclasses import asdict
from datetime import datetime

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

def extract_date(date_cell_content):
    # TODO Figure out a way to format textual data into standarized format
    return date_cell_content

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
    else:
        rival_team_name = rival_team_cell_content
        own_team_name = own_team_cell_content
        own_team_position_in_league, rival_team_position_in_league = -1, -1

    return own_team_name, rival_team_name, own_team_position_in_league, rival_team_position_in_league

def parse_minute(minute):
    return minute.split("'")[0]

def extract_scores(cell):
    cell_content = cell.text
    if 'm. odw.' in cell_content.lower():
        return True, -1, -1
    
    scores = cell_content.split(' ')[0].split(':')
    cell_class = cell.select('span')[0].get('class', [])

    if len(scores) == 2:
        score_left, score_right = scores[0].strip(), scores[1].strip()
        if score_left == '-' and score_right == '-':
            return True, -1, -1
        else:
             score_left, score_right =  int(score_left), int(score_right)
             
        if 'greentext' in cell_class:
            if score_left > score_right:
                return False, score_left, score_right
            else:
                return False, score_right, score_left
        elif 'redtext' in cell_class:
            if score_left > score_right:
                return False, score_right, score_left
            else:
                return False, score_left, score_right
        else:
            return False, score_left, score_right
        
def parse_cells(cells_and_positions_dict, player_id: str, year: int):
    own_team_name, rival_team_name, own_team_position_in_league, rival_team_position_in_league = extract_own_team_and_rival_team_names_and_positions([cells_and_positions_dict[3],cells_and_positions_dict[5]])
    match_canceled, score_own_team, score_rival_team = extract_scores(cells_and_positions_dict[6])
    player_match_data = PlayerMatchData(
        player_id = player_id,

        round = cells_and_positions_dict[0].text.strip(),
        year = year,
        date = extract_date(cells_and_positions_dict[1].text.strip()),

        own_team_name = own_team_name,
        rival_team_name = rival_team_name,
        own_team_position_in_league = own_team_position_in_league,
        rival_team_position_in_league = rival_team_position_in_league,

        match_canceled = match_canceled,
        score_own_team = score_own_team,
        score_rival_team = score_rival_team,

        # susspended_for_red_card: bool = False
        # in_team: bool = False
        # on_bench: bool = False
        # played: bool = False
        # skipped_cause_of_injury: bool = False

        # starting_position: str = 'N/A'
        # captain: bool = False

        # goals: int = 0
        # asists: int = 0
        # own_goals: int = 0

        # received_yellow_card: bool = False
        # received_two_yellows_cards: bool = False
        # received_red_cards: bool = False

        # minutes_played: int = 0
        # minute_in: str = -1
        # minute_out: str = -1
        # out_cause_of_injury: bool = False

        # rating_transfermarkt: float = 0.0
    )
    print(player_match_data)
    return player_match_data

def parse_player_matches_data(html_content: str, player_id: str, year: int):
    soup = BeautifulSoup(html_content, 'html.parser')
    scraped_matches = []    
    # try:
    tables = soup.select("div.box table")
    if len(tables) <= 2:
        return scraped_matches
    
    for table in tables[2:]:
        rows = table.select("tbody tr") 
        if not rows:
            continue
        
        for row in rows:
            print("-" * 20)
            cells = row.select('td')
            if not cells:
                continue

            cells_and_positions_dict = {index: element for index, element in enumerate(cells)}
            scraped_matches.append(parse_cells(cells_and_positions_dict, player_id, year)) 
    return scraped_matches
    # except Exception as e:
    #     print(f"Error during parsing: {e}")
    #     return scraped_matches

def get_player_matches_data(url: str, player_id: str, year: int):
    # try:
    response = get_player_matches_data_response(url)
    return parse_player_matches_data(response.text, player_id, year)
    # except Exception as e:
    #     print(f"An error occurred: {e}")
    #     return []

if __name__ == "__main__": 
    input_df = pd.read_csv('database/modified_transfermarket_players_1998_2008.csv')
    for index, row in input_df.iterrows():
        for year in range(2020, 2024):
            print(year)
            url = row['url'].replace('profil','leistungsdatendetails')+f'/plus/1?saison={year}'
            print(url)
            get_player_matches_data(url, row['player_id'], year)

        # Limit to only one player for test purpose
        break