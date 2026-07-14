import type { Metadata } from "next";
import CompoundInterestCalculator from "@/src/components/calculators/compound-interest/Component";

export const metadata: Metadata = {
  title: "Calculadora de Juros Compostos Online",
  description:
    "Simule investimentos com juros compostos, aportes mensais e acompanhe a evolução do patrimônio gratuitamente.",

  keywords: [
    "juros compostos",
    "calculadora de juros compostos",
    "simulador de investimentos",
    "aporte mensal",
    "calculadora financeira",
    "rendimento",
    "investimentos",
  ],

  alternates: {
    canonical: "/calculators/compound-interest",
  },

  openGraph: {
    title: "Calculadora de Juros Compostos | CalcHub",
    description:
      "Calcule o rendimento dos seus investimentos com juros compostos e aportes mensais.",
    url: "https://calchub.com.br/calculators/compound-interest",
    type: "website",
  },
};

export default function CompoundInterestPage() {
  return (
    <main className="bg-gray-50">

      <section className="border-b bg-white">
        <div className="mx-auto max-w-6xl px-6 py-12">

          <span className="text-sm font-medium text-blue-600">
            Calculadoras Financeiras
          </span>

          <h1 className="mt-3 text-4xl font-bold tracking-tight text-gray-900">
            Calculadora de Juros Compostos
          </h1>

          <p className="mt-4 max-w-3xl text-lg leading-8 text-gray-600">
            Descubra quanto seu dinheiro pode render ao longo do tempo utilizando
            juros compostos. Simule aportes mensais, acompanhe a evolução do
            patrimônio e tome decisões financeiras com mais segurança.
          </p>

        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-12">
        <CompoundInterestCalculator />
      </section>

    </main>
  );
}