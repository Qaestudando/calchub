from fastapi import FastAPI

app = FastAPI(
    title="CalcHub API",
    version="1.0.0"
)

@app.get("/")
def home():
    return {
        "message": "CalcHub API Online"
    }