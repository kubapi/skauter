from dataclasses import dataclass
from enum import Enum

class MatchResult(Enum):
    WIN = "win"
    DRAW = "draw"
    LOSS = "loss"
    NOT_PLAYED = "not played"

class MatchType(Enum):
    CUP = "cup"
    LEAGUE = "league"
    NOT_SPECIFIED = "not specified"

@dataclass
class PlayerMatchData:
    player_id: str

    round: str

    year: int
    date: str

    own_team_name: str 
    rival_team_name: str
    own_team_position_in_league: int = -1
    rival_team_position_in_league: int = -1
    match_type: MatchType = MatchType.CUP

    match_canceled: bool = False

    score_own_team: int = -1
    score_rival_team: int = -1
    result: MatchResult = MatchResult.NOT_PLAYED

    susspended_for_red_card: bool = False
    in_team: bool = False
    on_bench: bool = False
    played: bool = False
    skipped_cause_of_injury: bool = False

    starting_position: str = 'N/A'
    captain: bool = False

    goals: int = 0
    asists: int = 0
    own_goals: int = 0

    received_yellow_card: bool = False
    received_two_yellows_cards: bool = False
    received_red_cards: bool = False

    minutes_played: int = 0
    minute_in: str = -1
    minute_out: str = -1
    out_cause_of_injury: bool = False

    rating_transfermarkt: float = 0.0

    def __post_init__(self):
        self.position_difference = self.rival_team_position_in_league - self.own_team_position_in_league
        
        if self.match_canceled:
            pass

        if self.susspended_for_red_card:
            pass

        if self.score_own_team != -1 and self.score_rival_team != -1:
            if self.score_own_team > self.score_rival_team:
                self.result = MatchResult.WIN
            elif self.score_own_team < self.score_rival_team:
                self.result = MatchResult.LOSS
            else:
                self.result = MatchResult.DRAW

@dataclass
class PlayerMarketValue:
    player_id: str
    player_name: str
    born: int
    url: str
    country_name: str
    market_value: int = 0