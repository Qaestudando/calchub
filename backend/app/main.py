from fastapi import FastAPI

<<<<<<< HEAD
from app.api.calculators import router

app = FastAPI(
    title="CalcHub API",
    version="1.0.0",
    description="API oficial do CalcHub"
)


=======
app = FastAPI(
    title="CalcHub API",
    version="1.0.0"
)

>>>>>>> de8cdf0 (chore: create initial project structure)
@app.get("/")
def home():
    return {
        "message": "CalcHub API Online"
<<<<<<< HEAD
    }


app.include_router(router)
=======
    }
>>>>>>> de8cdf0 (chore: create initial project structure)
