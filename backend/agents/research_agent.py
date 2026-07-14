from pathlib import Path

from services.llm_service import LLMService

from models.research import ResearchReport
class ResearchAgent:

    def __init__(self):

        self.llm = LLMService()

        prompt_path = Path("prompts/research_prompt.txt")

        self.system_prompt = prompt_path.read_text()

    def research(self, idea: str):

        prompt = f"""

{self.system_prompt}

Startup Idea:

{idea}

"""

        #return self.llm.generate(prompt)
        response = self.llm.generate(prompt)
        return ResearchReport(**response)