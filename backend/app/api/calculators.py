from fastapi import APIRouter

from app.calculators.compound_interest import calculate

router = APIRouter()


@router.get("/compound-interest")
def compound_interest(
    capital: float,
    rate: float,
    months: int
):

    result = calculate(
        capital,
        rate,
        months
    )

    return {
        "final_amount": round(result, 2)
    }