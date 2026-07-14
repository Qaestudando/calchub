import Link from "next/link";

const calculators = [
  {
    title: "Calculadora de Juros Simples",
    href: "/calculators/simple-interest",
  },
  {
    title: "Calculadora de Financiamento",
    href: "/calculators/financing",
  },
  {
    title: "Calculadora de Porcentagem",
    href: "/calculators/percentage",
  },
];

export default function RelatedCalculators() {
  return (
    <section className="rounded-3xl border border-gray-200 bg-white p-8 shadow-sm">

      <h2 className="text-3xl font-bold">
        Calculadoras relacionadas
      </h2>

      <div className="mt-8 grid gap-4 md:grid-cols-3">

        {calculators.map((calculator) => (
          <Link
            key={calculator.href}
            href={calculator.href}
            className="rounded-2xl border border-gray-200 p-5 transition hover:border-blue-300 hover:bg-blue-50"
          >
            <h3 className="font-semibold text-gray-900">
              {calculator.title}
            </h3>

            <p className="mt-2 text-sm text-blue-600">
              Abrir calculadora →
            </p>
          </Link>
        ))}

      </div>

    </section>
  );
}