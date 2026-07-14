# from dotenv import load_dotenv
# import os

# load_dotenv()

# OPENAI_API_KEY = os.getenv("OPENAI_API_KEY")

# MODEL = "gpt-5"

# import os
# from dotenv import load_dotenv

# load_dotenv()

# OPENAI_API_KEY = os.getenv("OPENAI_API_KEY")
# MODEL = os.getenv("MODEL", "gpt-5")

import os
from dotenv import load_dotenv

load_dotenv()

OPENAI_API_KEY = os.getenv("OPENAI_API_KEY")
MODEL = os.getenv("MODEL", "gpt-5")

APP_NAME = "Genesis"

MAX_OUTPUT_TOKENS = 1000
TEMPERATURE = 0.7
USE_MOCK = os.getenv("USE_MOCK", "true").lower() == "true"