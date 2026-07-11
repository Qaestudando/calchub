from fastapi import APIRouter

from app.calculators.compound_interest import calculate

router = APIRouter()


@router.get("/compound-interest")
def compound_interest(
    capital: float,
    rate: float,
    months: int,
    monthly_contribution: float = 0,
):
    return calculate(
        capital=capital,
        rate=rate,
        months=months,
        monthly_contribution=monthly_contribution,
    )