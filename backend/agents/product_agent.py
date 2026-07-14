from pathlib import Path

from services.llm_service import LLMService

from models.product import ProductSpecification


class ProductAgent:

    def __init__(self):

        self.llm = LLMService()

        self.system_prompt = Path(
            "prompts/product_prompt.txt"
        ).read_text()

    def create_product(self, research):

        prompt = f"""

{self.system_prompt}

Research

{research}

"""

        response = self.llm.generate(prompt)

        return ProductSpecification(**response)