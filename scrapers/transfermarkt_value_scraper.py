import requests
from bs4 import BeautifulSoup
import pandas as pd
from dataclasses import asdict
from datetime import datetime

from data_structures import PlayerMarketValue

headers = {
    'authority': 'www.transfermarkt.pl',
    'accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7',
    'user-agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/117.0.0.0 Safari/537.36'
}

# def get_single_player_data(query: str) -> PlayerMarketValue:
#     try:
#         response = get_single_player_data_response(query)
#         return parse_single_player_data(response.text)
#     except Exception as e:
#         print(f"An error occurred: {e}")
#         return PlayerMarketValue(None, None, None, None, None)

# def get_single_player_data_response(query: str) -> requests.Response:
#     params = {'query': query}
#     return requests.get(
#         'https://www.transfermarkt.pl/schnellsuche/ergebnis/schnellsuche',
#         params=params,
#         headers=headers,
#     )

# def parse_single_player_data(html_content: str) -> PlayerMarketValue:
#     soup = BeautifulSoup(html_content, 'html.parser')
    
#     try:
#         player_url_selector = soup.select_one("td.hauptlink a")
#         url = "https://www.transfermarkt.pl" + player_url_selector['href'] if player_url_selector else None
#         name = player_url_selector.text.strip()

#         player_market_value_selector = soup.select("td.hauptlink")[1]
#         market_value = format_market_value(player_market_value_selector.text.strip() if player_market_value_selector and len(player_market_value_selector.text) > 1 else None)
        
#         return PlayerMarketValue(None, name, None, url, market_value)
#     except Exception as e:
#         print(f"Error during parsing: {e}")
#         return PlayerMarketValue(None, None, None, None, None)

def format_market_value(market_value: str) -> int:
    if not market_value:
        return None
    
    value = market_value.replace(',', '.').replace('€', '').strip()
    
    if "mln" in value:
        return int(float(value.replace('mln', '').strip()) * 1_000_000)
    
    elif "tys." in value:
        return int(float(value.replace('tys.', '').strip()) * 1_000)
    
    return 0 

def get_players_by_year_data_response(year: str, page: int, country_id: str) -> requests.Response:
    params = {
        'ausrichtung': 'alle',
        'spielerposition_id': 'alle',
        'altersklasse': 'alle',
        'jahrgang': year,
        'land_id': country_id,
        'kontinent_id': '0',
        'page': page,
        
    }
    return requests.get(
        'https://www.transfermarkt.pl/spieler-statistik/wertvollstespieler/marktwertetop/plus/0/galerie/0',
        params=params,
        headers=headers,
    )

def get_players_by_year_data(year: str, page: int, country_name: str, country_id: str):
    try:
        response = get_players_by_year_data_response(year, page, country_id)
        return parse_players_by_year_data(response.text, year, country_name)
    except Exception as e:
        print(f"An error occurred: {e}")
        return []

def parse_players_by_year_data(html_content: str, born: str, country_name: str):
    soup = BeautifulSoup(html_content, 'html.parser')
    scraped_players = []
    try:
        selectors = soup.select("td.hauptlink a")
        for i in range(0, len(selectors), 2):
            url = "https://www.transfermarkt.pl" + selectors[i]['href'] if selectors[i] else None
            name = selectors[i].text.strip()
            player_market_value_selector = selectors[i+1]
            market_value = format_market_value(player_market_value_selector.text.strip() if player_market_value_selector and len(player_market_value_selector.text) > 1 else None)
            scraped_players.append(PlayerMarketValue(None, name, born, url, country_name, market_value))
        return scraped_players
    except Exception as e:
        print(f"Error during parsing: {e}")
        return scraped_players

if __name__ == "__main__":
    # I am interested only in players born this years
    years_to_scrape = [str(year) for year in range(1998, 2009)]

    # Top 30 leagues by UEFA: https://www.transfermarkt.pl/statistik/5jahreswertung
    countries = {
        'Poland':'135',
        'Italy': '75',
        'Spain': '157',
        'Germany': '40',
        'Netherlands': '122',
        'France': '50',
        'England': '189',
        'Portugal': '136',
        'Belgium': '19',
        'Turkey': '174',
        'Scotland': '190',
        'Austria': '127',
        'Switzerland': '148',
        'Serbia': '150',
        'Denmark': '39',
        'Norway': '125',
        'Ukraine': '177',
        'Isreal': '74',
        'Greece': '56',
        'Croatia': '37',
        'Cyprus': '188',
        'Sweden': '147',
        'Romania': '140',
        'Hungary': '178',
        'Russia': '141',
        'Bulgaria': '28',
        'Slovakia': '154',
        'Azerbaijan': '13',
        'Moldavia': '112',
    }
    scraped_players = [] 
    # 20 pages is maximum for transfermarket
    max_pages = 20

    save_path = f'database/transfermarket_players_1998_2008_{datetime.now().timestamp()}.csv'

    for country_name, country_id in countries.items():
        for year in years_to_scrape:
            for page in range(1, max_pages+1):
                print(f'Scraping {country_name} players born {year}. Scraping page number {page}.')
                temp_scraped_players = get_players_by_year_data(year, page, country_name, country_id)
                if temp_scraped_players:
                    # Checking if duplicates are coming if so then stop pagination.
                    if temp_scraped_players[0].url in [scraped_player.url for scraped_player in scraped_players]:
                        break
                    scraped_players += temp_scraped_players
                    print(f'Total number of scraped profiles - {len(scraped_players)}')
                else:
                    break
                
        results_df = pd.DataFrame([asdict(p) for p in scraped_players])
        results_df.drop_duplicates('url', inplace=True)
        results_df.to_csv(save_path, index=False) 
