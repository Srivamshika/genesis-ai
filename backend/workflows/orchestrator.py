# from kernel.kernel import GenesisKernel
# from agents.research_agent import ResearchAgent


# class GenesisOrchestrator:

#     def __init__(self):

#         self.research_agent = ResearchAgent()

#     def run(self, idea: str):

#         kernel = GenesisKernel(idea)

#         report = self.research_agent.research(idea)

#         kernel.set_research(report)

#         return kernel.get_state()

from kernel.kernel import GenesisKernel

from agents.research_agent import ResearchAgent
from agents.product_agent import ProductAgent


class GenesisOrchestrator:

    def __init__(self):

        self.research_agent = ResearchAgent()
        self.product_agent = ProductAgent()

    def run(self, idea: str):

        # Initialize project state
        kernel = GenesisKernel(idea)

        # -----------------------------
        # Step 1: Research Agent
        # -----------------------------
        research = self.research_agent.research(idea)
        kernel.set_research(research)

        # -----------------------------
        # Step 2: Product Manager Agent
        # -----------------------------
        product = self.product_agent.create_product(research)
        kernel.set_product(product)

        # Return the complete state
        return kernel.get_state()