export default function Article() {
  return (
    <article className="rounded-3xl border border-gray-200 bg-white p-8 shadow-sm">

      <h2 className="text-3xl font-bold">
        Como funciona a regra de três?
      </h2>

      <p className="mt-6 leading-8 text-gray-700">
        A regra de três é utilizada quando duas grandezas possuem uma relação
        proporcional. Ela permite encontrar um valor desconhecido utilizando
        uma proporção conhecida.
      </p>

      <h3 className="mt-10 text-2xl font-semibold">
        Fórmula
      </h3>

      <div className="mt-6 rounded-xl bg-gray-100 p-6 text-center text-2xl font-bold">
        x = (B × C) ÷ A
      </div>

      <h3 className="mt-10 text-2xl font-semibold">
        Exemplo
      </h3>

      <p className="mt-4 leading-8 text-gray-700">
        Se 5 produtos custam R$ 40, quanto custam 8 produtos?
      </p>

      <p className="mt-4 rounded-xl bg-blue-50 p-5 text-lg font-semibold text-blue-700">
        x = (40 × 8) ÷ 5 = R$ 64
      </p>

    </article>
  );
}