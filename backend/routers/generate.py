# from fastapi import APIRouter
# from pydantic import BaseModel
# from kernel.kernel import GenesisKernel

# router = APIRouter()


# class IdeaRequest(BaseModel):
#     idea: str


# @router.post("/generate")
# async def generate(request: IdeaRequest):

#     # return {
#     #     "status": "success",
#     #     "idea": request.idea,
#     #     "message": "Genesis received your idea.",
#     #     "next_step": "Research Agent"
#     # }
#     kernel = GenesisKernel()

#     state = kernel.initialize(request.idea)

#     return state

#     research = ResearchAgent()

#     report = research.research(request.idea)

#     kernel.set_research(report)

#     return kernel.get_state()

# # return {

# #     "idea": request.idea,

# #     "research": report

# # }

# from fastapi import APIRouter
# from pydantic import BaseModel

# from kernel.kernel import GenesisKernel
# from agents.research_agent import ResearchAgent


# router = APIRouter()


# class IdeaRequest(BaseModel):
#     idea: str


# @router.post("/generate")
# async def generate(request: IdeaRequest):

#     kernel = GenesisKernel(request.idea)

#     research = ResearchAgent()

#     report = research.research(request.idea)

#     kernel.set_research(report)

#     return kernel.get_state()

from fastapi import APIRouter
from pydantic import BaseModel

from workflows.orchestrator import GenesisOrchestrator

router = APIRouter()


class IdeaRequest(BaseModel):
    idea: str


@router.post("/generate")
async def generate(request: IdeaRequest):
    orchestrator = GenesisOrchestrator()

    state = orchestrator.run(request.idea)

    return state