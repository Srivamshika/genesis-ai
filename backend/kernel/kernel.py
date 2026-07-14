from kernel.state import GenesisState

# class GenesisKernel:

#     def __init__(self):

#         self.state = GenesisState()

#     def initialize(self, idea: str):

#         self.state.idea = idea

#         self.state.completed_steps.append("Idea Received")

#         return self.state
        
        
from models.state import GenesisState

class GenesisKernel:

    def __init__(self, idea: str):

        self.state = GenesisState(
            idea=idea
        )

    def get_state(self):

        return self.state

    def set_research(self, report):

        self.state.research = report