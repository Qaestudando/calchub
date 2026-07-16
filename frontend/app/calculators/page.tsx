import Link from "next/link";
import type { Metadata } from "next";

import Card from "@/src/components/ui/Card";
import CalculatorHero from "@/src/components/layout/CalculatorHero";
import CalculatorLayout from "@/src/components/layout/CalculatorLayout";

import { calculators } from "@/src/constants/calculators";

export const metadata: Metadata = {
  title: "Todas as Calculadoras | CalcHub",
  description:
    "Encontre calculadoras financeiras, matemáticas, de saúde e muito mais.",
  alternates: {
    canonical: "/calculators",
  },
};

export default function CalculatorsPage() {
  return (
    <>
      <CalculatorHero
        category="CalcHub"
        title="Todas as Calculadoras"
        description="Escolha uma das calculadoras disponíveis e faça simulações gratuitamente."
      />

      <CalculatorLayout>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {calculators.map((calculator) => {
            const Icon = calculator.icon;

            return (
              <Link
                key={calculator.slug}
                href={`/calculators/${calculator.slug}`}
                className="block"
              >
                <Card className="h-full hover:border-blue-500 transition-all">
                  <Icon
                    size={32}
                    className="text-blue-600"
                  />

                  <h2 className="mt-5 text-xl font-bold">
                    {calculator.title}
                  </h2>

                  <p className="mt-3 text-gray-600">
                    {calculator.description}
                  </p>

                  <span className="mt-6 inline-block rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold text-blue-700">
                    {calculator.category}
                  </span>
                </Card>
              </Link>
            );
          })}
        </div>
      </CalculatorLayout>
    </>
  );
}