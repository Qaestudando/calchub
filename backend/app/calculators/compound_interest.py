def calculate(
    capital: float,
    rate: float,
    months: int
):

    return capital * (1 + rate / 100) ** months