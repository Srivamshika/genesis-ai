from pydantic import BaseModel
from typing import List


class ResearchReport(BaseModel):
    problem_summary: str
    target_users: List[str]
    competitors: List[str]
    market_gap: str
    mvp_features: List[str]