def calculate(
    capital: float,
    rate: float,
    months: int,
    monthly_contribution: float = 0,
):
    balance = capital

    history = []

    total_contributions = monthly_contribution * months
    total_invested = capital + total_contributions

    monthly_rate = rate / 100

    for month in range(1, months + 1):
        balance *= (1 + monthly_rate)
        balance += monthly_contribution

        history.append({
            "month": month,
            "balance": round(balance, 2)
        })

    interest_earned = balance - total_invested

    profitability = (
        (interest_earned / total_invested) * 100
        if total_invested > 0
        else 0
    )

    return {
        "initial_amount": round(capital, 2),
        "monthly_contribution": round(monthly_contribution, 2),
        "months": months,
        "rate": rate,
        "total_contributions": round(total_contributions, 2),
        "total_invested": round(total_invested, 2),
        "final_amount": round(balance, 2),
        "interest_earned": round(interest_earned, 2),
        "profitability": round(profitability, 2),
        "history": history,
    }