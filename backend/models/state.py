from pydantic import BaseModel
from typing import Optional

from models.research import ResearchReport


class GenesisState(BaseModel):
    idea: str

    research: Optional[ResearchReport] = None
    product: Optional[dict] = None

    architecture: Optional[dict] = None

    code: Optional[dict] = None

    qa: Optional[dict] = None

    deployment: Optional[dict] = None

    # product = None

    # architecture = None

    # code = None

    # qa = None

    # deployment = None