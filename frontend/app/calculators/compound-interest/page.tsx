import type { Metadata } from "next";

import CompoundInterestCalculator from "@/src/components/calculators/compound-interest/Component";
import CalculatorHero from "@/src/components/layout/CalculatorHero";
import CalculatorLayout from "@/src/components/layout/CalculatorLayout";
import JsonLd from "@/src/components/seo/JsonLd";

export const metadata: Metadata = {
  title: "Calculadora de Juros Compostos | CalcHub",

  description:
    "Calcule juros compostos online gratuitamente. Simule investimentos com aportes mensais e acompanhe a evolução do patrimônio.",

  alternates: {
    canonical: "/calculators/compound-interest",
  },

  openGraph: {
    title: "Calculadora de Juros Compostos | CalcHub",

    description:
      "Simule investimentos utilizando juros compostos e aportes mensais.",

    url: "https://calchub.com.br/calculators/compound-interest",

    siteName: "CalcHub",

    locale: "pt_BR",

    type: "website",
  },
};

const softwareSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Calculadora de Juros Compostos",
  applicationCategory: "FinanceApplication",
  operatingSystem: "Web",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "BRL",
  },
};

export default function CompoundInterestPage() {
  return (
    <>
      <JsonLd data={softwareSchema} />

      <CalculatorHero
        category="Calculadoras Financeiras"
        title="Calculadora de Juros Compostos"
        description="Descubra quanto seu dinheiro pode render ao longo do tempo utilizando juros compostos. Faça simulações com aportes mensais e acompanhe a evolução do patrimônio gratuitamente."
      />

      <CalculatorLayout>
        <CompoundInterestCalculator />
      </CalculatorLayout>
    </>
  );
}