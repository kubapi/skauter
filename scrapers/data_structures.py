from dataclasses import dataclass
from enum import Enum
from typing import Dict, Optional

class MatchResult(Enum):
    WIN = "win"
    DRAW = "draw"
    LOSS = "loss"

@dataclass
class PlayerMatchData:
    player_id: str
    team_id: str 
    league_id: str
    round_number: int
    result: MatchResult
    score_team: int
    score_rival: int
    minutes_played: int
    nth_season: int

    team_position_in_league: int
    rival_position_in_league: int
    team_points_in_league: int
    rival_points_in_league: int

    goals_scored: int = 0
    received_yellow_card: bool = False
    received_two_yellows_cards: bool = False
    received_red_cards: bool = False
    position_difference: Optional[int] = None  
    point_difference: Optional[int] = None

    def __post_init__(self):
        self.position_difference = self.rival_position_in_league - self.team_position_in_league
        self.point_difference = self.rival_points_in_league - self.team_points_in_league

@dataclass
class PlayerMarketValue:
    player_id: str
    player_name: str
    born: int
    url: str
    country_name: str
    market_value: int = 0

@dataclass
class TableData:
    league_id: str
    round_number: int
    league_table: Dict[int, int]