from dataclasses import dataclass
from enum import Enum
from typing import Optional

class MatchResult(Enum):
    WIN = "win"
    DRAW = "draw"
    LOSS = "loss"

@dataclass
class PlayerMatchData:
    player_id: str

    team_name: str 
    rival_name: str
    round: int
    year: int

    date: str

    score_team: int
    score_rival: int
    result: MatchResult

    team_position_in_league: int
    team_points_in_league: int
    
    starting_position: str

    minutes_played: int
    minute_in: str
    minute_out: str

    played: bool = False
    in_first_team: bool = False
    on_bench: bool = False

    goals: int = 0
    asists: int = 0
    own_goals: int = 0

    captain: bool = False

    received_yellow_card: bool = False
    received_two_yellows_cards: bool = False
    received_red_cards: bool = False

    def __post_init__(self):
        self.position_difference = self.rival_position_in_league - self.team_position_in_league

@dataclass
class PlayerMarketValue:
    player_id: str
    player_name: str
    born: int
    url: str
    country_name: str
    market_value: int = 0