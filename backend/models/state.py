from pydantic import BaseModel
from typing import Optional

from models.research import ResearchReport
from models.product import ProductSpecification

class GenesisState(BaseModel):
    idea: str

    research: Optional[ResearchReport] = None
    product: ProductSpecification | None = None

    architecture: Optional[dict] = None

    code: Optional[dict] = None

    qa: Optional[dict] = None

    deployment: Optional[dict] = None

    # product = None

    # architecture = None

    # code = None

    # qa = None

    # deployment = None