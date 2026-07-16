def calculate(
    capital: float,
    rate: float,
    months: int,
):
    """
    Calcula juros simples.

    Fórmula:
        J = C * i * t
        M = C + J
    """

    interest = capital * (rate / 100) * months

    final_amount = capital + interest

    return {
        "capital": round(capital, 2),
        "rate": rate,
        "months": months,
        "interest_earned": round(interest, 2),
        "final_amount": round(final_amount, 2),
    }