def calculate(
    a: float,
    b: float,
    c: float,
):
    """
    Regra de três simples.

    a -> b
    c -> x

    x = (b * c) / a
    """

    if a == 0:
        raise ValueError("O primeiro valor não pode ser zero.")

    result = (b * c) / a

    return {
        "a": a,
        "b": b,
        "c": c,
        "result": round(result, 2),
    }