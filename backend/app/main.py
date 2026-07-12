from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from app.api.calculators import router

app = FastAPI(
    title="CalcHub API",
    version="1.0.0",
    description="API oficial do CalcHub",
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:3000",
        "http://127.0.0.1:3000",
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(router)


@app.get("/")
def home():
    return {
        "message": "CalcHub API Online"
    }