from fastapi import FastAPI

<<<<<<< HEAD
<<<<<<< HEAD
from app.api.calculators import router

app = FastAPI(
    title="CalcHub API",
    version="1.0.0",
    description="API oficial do CalcHub"
)


=======
=======
from app.api.calculators import router

>>>>>>> 7d94c1e (estrutura)
app = FastAPI(
    title="CalcHub API",
    version="1.0.0",
    description="API oficial do CalcHub"
)

<<<<<<< HEAD
>>>>>>> de8cdf0 (chore: create initial project structure)
=======

>>>>>>> 7d94c1e (estrutura)
@app.get("/")
def home():
    return {
        "message": "CalcHub API Online"
<<<<<<< HEAD
<<<<<<< HEAD
    }


app.include_router(router)
=======
    }
>>>>>>> de8cdf0 (chore: create initial project structure)
=======
    }


app.include_router(router)
>>>>>>> 7d94c1e (estrutura)
