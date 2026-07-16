import type { Metadata } from "next";

import PercentageCalculator from "@/src/components/calculators/percentage/Component";
import CalculatorHero from "@/src/components/layout/CalculatorHero";
import CalculatorLayout from "@/src/components/layout/CalculatorLayout";
import JsonLd from "@/src/components/seo/JsonLd";

export const metadata: Metadata = {
  title: "Calculadora de Porcentagem | CalcHub",

  description:
    "Calcule porcentagens online gratuitamente. Descubra rapidamente quanto representa uma porcentagem de um valor.",

  alternates: {
    canonical: "/calculators/percentage",
  },

  openGraph: {
    title: "Calculadora de Porcentagem | CalcHub",

    description:
      "Calcule porcentagens de forma rápida e gratuita com o CalcHub.",

    url: "https://calchub.com.br/calculators/percentage",

    siteName: "CalcHub",

    locale: "pt_BR",

    type: "website",
  },
};

const softwareSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Calculadora de Porcentagem",
  applicationCategory: "FinanceApplication",
  operatingSystem: "Web",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "BRL",
  },
};

export default function PercentagePage() {
  return (
    <>
      <JsonLd data={softwareSchema} />

      <CalculatorHero
        category="Calculadoras Matemáticas"
        title="Calculadora de Porcentagem"
        description="Descubra rapidamente quanto representa uma porcentagem de qualquer valor utilizando nossa calculadora gratuita."
      />

      <CalculatorLayout>
        <PercentageCalculator />
      </CalculatorLayout>
    </>
  );
}