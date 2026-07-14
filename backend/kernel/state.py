from pydantic import BaseModel

class GenesisState(BaseModel):

    idea: str = ""

    research: dict = {}

    product: dict = {}

    architecture: dict = {}

    code: dict = {}

    qa: dict = {}

    deployment: dict = {}

    completed_steps: list[str] = []