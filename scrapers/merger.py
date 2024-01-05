import pandas as pd
from dataclasses import fields
from data_structures import PlayerMatchData

if __name__ == "__main__": 
    matches_df = pd.read_csv('../database/players_1998_2008_matches_data.csv')
    matches_df.columns =[field.name for field in fields(PlayerMatchData)]
    players_df = pd.read_csv('../database/modified_transfermarket_players_1998_2008.csv')
    merged_df = pd.merge(matches_df, players_df, on='player_id', how='left')
    merged_df.to_csv('../database/merged_players_and_matches_1998_2008_data_v4.csv')
