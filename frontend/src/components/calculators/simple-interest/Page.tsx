import type { Metadata } from "next";

import SimpleInterestCalculator from "@/src/components/calculators/simple-interest/Component";
import CalculatorHero from "@/src/components/layout/CalculatorHero";
import CalculatorLayout from "@/src/components/layout/CalculatorLayout";
import JsonLd from "@/src/components/seo/JsonLd";

export const metadata: Metadata = {
  title: "Calculadora de Juros Simples | CalcHub",

  description:
    "Calcule juros simples online gratuitamente. Descubra o valor dos juros e o montante final em poucos segundos.",

  alternates: {
    canonical: "/calculators/simple-interest",
  },

  openGraph: {
    title: "Calculadora de Juros Simples | CalcHub",

    description:
      "Simule juros simples gratuitamente com a calculadora online do CalcHub.",

    url: "https://calchub.com.br/calculators/simple-interest",

    siteName: "CalcHub",

    locale: "pt_BR",

    type: "website",
  },
};

const softwareSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Calculadora de Juros Simples",
  applicationCategory: "FinanceApplication",
  operatingSystem: "Web",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "BRL",
  },
};

export default function SimpleInterestPage() {
  return (
    <>
      <JsonLd data={softwareSchema} />

      <CalculatorHero
        category="Calculadoras Financeiras"
        title="Calculadora de Juros Simples"
        description="Calcule rapidamente o rendimento de aplicações com juros simples. Informe o capital inicial, a taxa de juros e o período para descobrir os juros acumulados e o valor final."
      />

      <CalculatorLayout>
        <SimpleInterestCalculator />
      </CalculatorLayout>
    </>
  );
}