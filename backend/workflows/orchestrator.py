from kernel.kernel import GenesisKernel
from agents.research_agent import ResearchAgent


class GenesisOrchestrator:

    def __init__(self):

        self.research_agent = ResearchAgent()

    def run(self, idea: str):

        kernel = GenesisKernel(idea)

        report = self.research_agent.research(idea)

        kernel.set_research(report)

        return kernel.get_state()