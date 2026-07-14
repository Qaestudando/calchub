const questions = [
  {
    question: "O que são juros compostos?",
    answer:
      "Juros compostos são juros calculados sobre o capital inicial e também sobre os juros acumulados ao longo do tempo.",
  },
  {
    question: "Qual a diferença entre juros simples e compostos?",
    answer:
      "Nos juros simples, os juros são calculados apenas sobre o valor inicial. Nos juros compostos, os juros incidem sobre o saldo acumulado.",
  },
  {
    question: "O aporte mensal influencia no resultado?",
    answer:
      "Sim. Aportes mensais aumentam significativamente o patrimônio final devido ao efeito dos juros compostos ao longo do tempo.",
  },
  {
    question: "Qual taxa devo informar?",
    answer:
      "Informe a taxa de rendimento mensal. Caso tenha uma taxa anual, converta-a para a taxa equivalente mensal antes da simulação.",
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
            <h3 className="text-lg font-semibold text-gray-900">
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