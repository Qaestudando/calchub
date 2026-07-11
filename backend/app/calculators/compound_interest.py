def calculate(
    capital: float,
    rate: float,
    months: int,
    monthly_contribution: float = 0,
):
    balance = capital
    history = []

    for month in range(1, months + 1):
        balance += monthly_contribution
        balance *= 1 + (rate / 100)

        history.append(
            {
                "month": month,
                "balance": round(balance, 2),
            }
        )

    total_invested = capital + (monthly_contribution * months)
    interest_earned = balance - total_invested

    return {
        "initial_amount": round(capital, 2),
        "monthly_contribution": round(monthly_contribution, 2),
        "rate": rate,
        "months": months,
        "total_invested": round(total_invested, 2),
        "final_amount": round(balance, 2),
        "interest_earned": round(interest_earned, 2),
        "profitability": round(
            (interest_earned / total_invested) * 100,
            2,
        )
        if total_invested > 0
        else 0,
        "history": history,
    }