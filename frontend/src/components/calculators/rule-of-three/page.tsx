import type { Metadata } from "next";

import RuleOfThreeCalculator from "@/src/components/calculators/rule-of-three/Component";
import CalculatorHero from "@/src/components/layout/CalculatorHero";
import CalculatorLayout from "@/src/components/layout/CalculatorLayout";
import JsonLd from "@/src/components/seo/JsonLd";

export const metadata: Metadata = {
  title: "Calculadora de Regra de Três | CalcHub",

  description:
    "Resolva regra de três simples online gratuitamente.",

  alternates: {
    canonical: "/calculators/rule-of-three",
  },

  openGraph: {
    title: "Calculadora de Regra de Três | CalcHub",

    description:
      "Resolva regra de três simples em segundos.",

    url: "https://calchub.com.br/calculators/rule-of-three",

    siteName: "CalcHub",

    locale: "pt_BR",

    type: "website",
  },
};

const softwareSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Calculadora de Regra de Três",
  applicationCategory: "FinanceApplication",
  operatingSystem: "Web",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "BRL",
  },
};

export default function RuleOfThreePage() {
  return (
    <>
      <JsonLd data={softwareSchema} />

      <CalculatorHero
        category="Calculadoras Matemáticas"
        title="Calculadora de Regra de Três"
        description="Calcule proporções de forma rápida utilizando a regra de três simples."
      />

      <CalculatorLayout>
        <RuleOfThreeCalculator />
      </CalculatorLayout>
    </>
  );
}