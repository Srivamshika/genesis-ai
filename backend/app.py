# from fastapi import FastAPI

# app = FastAPI(
#     title="Genesis AI",
#     version="0.1.0"
# )

# @app.get("/")
# def home():
#     return {
#         "message": "Genesis Backend Running"
#     }

# from fastapi import FastAPI
# from fastapi.middleware.cors import CORSMiddleware

# app = FastAPI(
#     title="Genesis AI",
#     version="0.1.0"
# )

# origins = [
#     "http://localhost:3000",
# ]

# app.add_middleware(
#     CORSMiddleware,
#     allow_origins=origins,
#     allow_credentials=True,
#     allow_methods=["*"],
#     allow_headers=["*"],
# )

# @app.get("/")
# def home():
#     return {
#         "message": "Genesis Backend Running"
#     }

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from routers.generate import router as generate_router

app = FastAPI(
    title="Genesis AI"
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(generate_router)


@app.get("/")
def home():
    return {
        "message": "Genesis Backend Running"
    }