from fastapi import FastAPI

from app.api.calculators import router

app = FastAPI(
    title="CalcHub API",
    version="1.0.0",
    description="API oficial do CalcHub"
)


@app.get("/")
def home():
    return {
        "message": "CalcHub API Online"
    }


app.include_router(router)