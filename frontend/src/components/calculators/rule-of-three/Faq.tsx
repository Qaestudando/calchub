const questions = [
  {
    question: "O que é regra de três?",
    answer:
      "É um método matemático utilizado para descobrir um valor desconhecido a partir de uma proporção.",
  },
  {
    question: "Quando utilizar?",
    answer:
      "Em cálculos de consumo, velocidade, receitas, escalas, porcentagens e diversas situações do cotidiano.",
  },
  {
    question: "A calculadora é gratuita?",
    answer:
      "Sim. Todas as calculadoras do CalcHub são gratuitas.",
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