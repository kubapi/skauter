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

def parse_player_matches_data(html_content: str, player_id: str, year: int):
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
                cells = row.select('td')
                if not cells:
                    continue
                for cell in cells:
                    cell_content = cell.text.strip()
                    if cell_content:
                        
                        print(cell_content)

                        # bez gier w kadrze
                        # nie w kadrze
                break
            break
        

        
        return scraped_matches
    except Exception as e:
        print(f"Error during parsing: {e}")
        return scraped_matches

def get_player_matches_data(url: str, player_id: str, year: int):
    try:
        response = get_player_matches_data_response(url)
        return parse_player_matches_data(response.text, player_id, year)
    except Exception as e:
        print(f"An error occurred: {e}")
        return []

if __name__ == "__main__": 
    input_df = pd.read_csv('database/modified_transfermarket_players_1998_2008.csv')
    # input_df['player_id'] = input_df['url'].apply(lambda url: url.split('/spieler/')[-1])
    # input_df.to_csv('database/modifed_transfermarket_players_1998_2008.csv', index=False)    

    # Trying to scrape data from 2010 season (1998 - 15 years old, 2008 - 5 years old)
    # Assumption due to the lack of previous data

    for index, row in input_df.iterrows():
        # for year in range(2010, 2024):
        for year in range(2020, 2024):
            url = row['url'].replace('profil','leistungsdatendetails')+f'/plus/1?saison={year}'
            print(url)
            print(get_player_matches_data(url, row['player_id'], year)) 
        break