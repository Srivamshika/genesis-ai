from openai import OpenAI
from config import OPENAI_API_KEY, MODEL

# class LLMService:

#     def __init__(self):

#         self.client = OpenAI(
#             api_key=OPENAI_API_KEY
#         )

#         self.model = MODEL

#     def generate(self, prompt: str):

#         response = self.client.responses.create(

#             model=self.model,

#             input=prompt

#         )

#         return response.output_text

from config import USE_MOCK

class LLMService:

    def generate(self, prompt: str):

        if USE_MOCK:

            return {
                "problem_summary": "Emergency rooms suffer from long waiting times.",
                "target_users": [
                    "Hospitals",
                    "Patients"
                ],
                "competitors": [
                    "Epic",
                    "Cerner"
                ],
                "market_gap": "Real-time AI triage optimization",
                "mvp_features": [
                    "Bed prediction",
                    "Patient queue optimization"
                ]
            }

        # Real OpenAI call goes here later