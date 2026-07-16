from fastapi import APIRouter

from app.calculators.compound_interest import calculate as calculate_compound_interest
from app.calculators.simple_interest import calculate as calculate_simple_interest
from app.calculators.percentage import calculate as calculate_percentage
from app.calculators.rule_of_three import calculate as calculate_rule_of_three

router = APIRouter()


@router.get("/compound-interest")
def compound_interest(
    capital: float,
    rate: float,
    months: int,
    monthly_contribution: float = 0,
):
    return calculate_compound_interest(
        capital=capital,
        rate=rate,
        months=months,
        monthly_contribution=monthly_contribution,
    )


@router.get("/simple-interest")
def simple_interest(
    capital: float,
    rate: float,
    months: int,
):
    return calculate_simple_interest(
        capital=capital,
        rate=rate,
        months=months,
    )

@router.get("/percentage")
def percentage(
    value: float,
    percentage: float,
):
    return calculate_percentage(
        value=value,
        percentage=percentage,
    )

@router.get("/rule-of-three")
def rule_of_three(
    a: float,
    b: float,
    c: float,
):
    return calculate_rule_of_three(
        a=a,
        b=b,
        c=c,
    )