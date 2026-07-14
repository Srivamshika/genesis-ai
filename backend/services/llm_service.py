# from openai import OpenAI
# from config import OPENAI_API_KEY, MODEL

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

# from config import USE_MOCK

# class LLMService:

#     def generate(self, prompt: str):

#         if USE_MOCK:

#             return {
#                 "problem_summary": "Emergency rooms suffer from long waiting times.",
#                 "target_users": [
#                     "Hospitals",
#                     "Patients"
#                 ],
#                 "competitors": [
#                     "Epic",
#                     "Cerner"
#                 ],
#                 "market_gap": "Real-time AI triage optimization",
#                 "mvp_features": [
#                     "Bed prediction",
#                     "Patient queue optimization"
#                 ]
#             }

#         # Real OpenAI call goes here later

from openai import OpenAI
from config import OPENAI_API_KEY, MODEL
from config import USE_MOCK


class LLMService:

    def generate(self, prompt: str):

        if USE_MOCK:

            # ----------------------------------
            # Product Manager Mock Response
            # ----------------------------------
            if "Product Manager" in prompt:

                return {
                    "product_name": "ERFlow AI",

                    "elevator_pitch":
                        "AI-powered emergency room optimization platform.",

                    "target_users": [
                        "Hospitals",
                        "Emergency Departments",
                        "Healthcare Administrators"
                    ],

                    "core_features": [
                        "AI Bed Prediction",
                        "Patient Queue Optimization",
                        "Live Dashboard"
                    ],

                    "tech_stack": [
                        "Next.js",
                        "FastAPI",
                        "OpenAI"
                    ],

                    "success_metrics": [
                        "30% reduction in waiting time",
                        "20% better resource utilization"
                    ]
                }

            # ----------------------------------
            # Research Agent Mock Response
            # ----------------------------------
            return {
                "problem_summary":
                    "Emergency rooms suffer from long waiting times.",

                "target_users": [
                    "Hospitals",
                    "Patients"
                ],

                "competitors": [
                    "Epic",
                    "Cerner"
                ],

                "market_gap":
                    "Real-time AI triage optimization",

                "mvp_features": [
                    "Bed prediction",
                    "Patient queue optimization"
                ]
            }

        # ----------------------------------
        # Real OpenAI Call
        # (We'll implement this later)
        # ----------------------------------
        client = OpenAI(api_key=OPENAI_API_KEY)

        response = client.responses.create(
            model=MODEL,
            input=prompt
        )

        return response.output_text