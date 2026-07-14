from pydantic import BaseModel
from typing import List


class ProductSpecification(BaseModel):

    product_name: str

    elevator_pitch: str

    target_users: List[str]

    core_features: List[str]

    tech_stack: List[str]

    success_metrics: List[str]