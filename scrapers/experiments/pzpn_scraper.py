from playwright.sync_api import sync_playwright
import time

def scrape_players_matches(url):
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=False, proxy={
        "server": "http://pr.oxylabs.io:7777",
        "username": "Hasamba",
        "password": "jrdy6mtgMbVDEobe4R"
        })  
        page = browser.new_page()
        page.goto(url)

        input("Press Enter to close the browser...")
        browser.close()

def scrape_table_data(url):
    pass

if __name__ == "__main__":
    website = "https://www.laczynaspilka.pl/rozgrywki/zawodnik/8d20e514-9f1c-4185-81b5-51de5a8fa064?season=2023%2F2024&leagueId=20505afb-3cb6-4e59-9bb1-ed56e8201bb8&tab=tab-matches"
    scrape_players_matches(website)
