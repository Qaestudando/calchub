def calculate(
    value: float,
    percentage: float,
):
    result = value * (percentage / 100)

    return {
        "value": round(value, 2),
        "percentage": percentage,
        "result": round(result, 2),
    }