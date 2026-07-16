const questions = [
  {
    question: "O que são juros simples?",
    answer:
      "Juros simples são calculados apenas sobre o capital inicial durante todo o período da aplicação ou empréstimo.",
  },
  {
    question: "Qual a diferença entre juros simples e compostos?",
    answer:
      "Nos juros simples o rendimento é sempre calculado sobre o capital inicial. Nos juros compostos os juros incidem também sobre os juros acumulados.",
  },
  {
    question: "Quando os juros simples são utilizados?",
    answer:
      "São comuns em operações de curto prazo, cálculos acadêmicos e alguns contratos específicos de empréstimos e financiamentos.",
  },
  {
    question: "Esta calculadora é gratuita?",
    answer:
      "Sim. Todas as calculadoras do CalcHub podem ser utilizadas gratuitamente.",
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