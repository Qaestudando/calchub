const questions = [
  {
    question: "O que é porcentagem?",
    answer:
      "Porcentagem representa uma parte de um todo dividida em 100 partes iguais. É uma das formas mais utilizadas para comparar valores.",
  },
  {
    question: "Como calcular uma porcentagem?",
    answer:
      "Basta multiplicar o valor pela porcentagem e dividir por 100.",
  },
  {
    question: "Onde a porcentagem é utilizada?",
    answer:
      "Descontos, impostos, investimentos, inflação, reajustes salariais e praticamente toda a matemática financeira utilizam porcentagens.",
  },
  {
    question: "A calculadora é gratuita?",
    answer:
      "Sim. Todas as calculadoras do CalcHub são totalmente gratuitas.",
  },
];

export default function Faq() {
  return (
    <section className="rounded-3xl border border-gray-200 bg-white p-8 shadow-sm">
      <h2 className="text-3xl font-bold">
        Perguntas Frequentes
      </h2>

      <div className="mt-8 space-y-8">
        {questions.map((item) => (
          <div
            key={item.question}
            className="border-b border-gray-100 pb-6 last:border-0"
          >
            <h3 className="text-lg font-semibold">
              {item.question}
            </h3>

            <p className="mt-3 leading-7 text-gray-600">
              {item.answer}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}