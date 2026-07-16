export default function Article() {
  return (
    <article className="rounded-3xl border border-gray-200 bg-white p-8 shadow-sm">

      <h2 className="text-3xl font-bold">
        Como calcular porcentagem?
      </h2>

      <p className="mt-6 leading-8 text-gray-700">
        O cálculo de porcentagem é um dos mais utilizados no dia a dia.
        Ele aparece em descontos, juros, investimentos, inflação,
        impostos, reajustes salariais e diversas outras situações.
      </p>

      <h3 className="mt-10 text-2xl font-semibold">
        Fórmula
      </h3>

      <div className="mt-6 rounded-xl bg-gray-100 p-6 text-center text-2xl font-bold">
        Valor × Porcentagem ÷ 100
      </div>

      <h3 className="mt-10 text-2xl font-semibold">
        Exemplo
      </h3>

      <p className="mt-4 leading-8 text-gray-700">
        Quanto é 20% de R$ 500?
      </p>

      <p className="mt-4 rounded-xl bg-blue-50 p-5 text-lg font-semibold text-blue-700">
        500 × 20 ÷ 100 = R$ 100
      </p>

      <h3 className="mt-10 text-2xl font-semibold">
        Quando utilizar?
      </h3>

      <p className="mt-4 leading-8 text-gray-700">
        Sempre que precisar descobrir descontos,
        aumentos, rendimentos, impostos ou qualquer
        valor proporcional em relação a outro.
      </p>

    </article>
  );
}