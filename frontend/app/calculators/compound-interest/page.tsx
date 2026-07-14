import type { Metadata } from "next";

import CompoundInterestCalculator from "@/src/components/calculators/compound-interest/Component";
import JsonLd from "@/src/components/seo/JsonLd";

export const metadata: Metadata = {
  title: "Calculadora de Juros Compostos Online | CalcHub",

  description:
    "Calcule juros compostos com aportes mensais gratuitamente. Simule investimentos, descubra o patrimônio final e acompanhe a evolução do seu dinheiro.",

  keywords: [
    "juros compostos",
    "calculadora de juros compostos",
    "investimentos",
    "aporte mensal",
    "simulador de investimentos",
    "calculadora financeira",
    "rendimento",
  ],

  alternates: {
    canonical: "/calculators/compound-interest",
  },

  openGraph: {
    title: "Calculadora de Juros Compostos | CalcHub",

    description:
      "Simule investimentos com juros compostos, aportes mensais e acompanhe a evolução do patrimônio.",

    url: "https://calchub.com.br/calculators/compound-interest",

    siteName: "CalcHub",

    locale: "pt_BR",

    type: "website",
  },

  twitter: {
    card: "summary_large_image",

    title: "Calculadora de Juros Compostos",

    description:
      "Calcule gratuitamente juros compostos e acompanhe o crescimento do patrimônio.",
  },
};

const faqSchema = {
  "@context": "https://schema.org",

  "@type": "FAQPage",

  mainEntity: [
    {
      "@type": "Question",

      name: "O que são juros compostos?",

      acceptedAnswer: {
        "@type": "Answer",

        text:
          "Juros compostos são juros calculados sobre o capital inicial e também sobre os juros acumulados ao longo do tempo.",
      },
    },

    {
      "@type": "Question",

      name: "Qual a diferença entre juros simples e compostos?",

      acceptedAnswer: {
        "@type": "Answer",

        text:
          "Nos juros simples, os juros incidem apenas sobre o capital inicial. Nos juros compostos ocorre o efeito dos juros sobre juros.",
      },
    },

    {
      "@type": "Question",

      name: "Vale a pena fazer aportes mensais?",

      acceptedAnswer: {
        "@type": "Answer",

        text:
          "Sim. Aportes mensais aumentam significativamente o patrimônio final devido ao efeito da capitalização composta.",
      },
    },

    {
      "@type": "Question",

      name: "Esta calculadora é gratuita?",

      acceptedAnswer: {
        "@type": "Answer",

        text:
          "Sim. Todas as simulações podem ser realizadas gratuitamente no CalcHub.",
      },
    },
  ],
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
      <JsonLd data={faqSchema} />

      <JsonLd data={softwareSchema} />

      <main className="bg-gray-50">

        <section className="border-b bg-white">

          <div className="mx-auto max-w-6xl px-6 py-12">

            <span className="text-sm font-semibold uppercase tracking-wide text-blue-600">
              Calculadoras Financeiras
            </span>

            <h1 className="mt-4 text-4xl font-bold tracking-tight text-gray-900 md:text-5xl">
              Calculadora de Juros Compostos
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-gray-600">
              Descubra quanto seu dinheiro pode render ao longo do tempo com
              juros compostos. Faça simulações com aportes mensais, acompanhe o
              crescimento do patrimônio e planeje seus investimentos de forma
              simples e gratuita.
            </p>

          </div>

        </section>

        <section className="mx-auto max-w-6xl px-6 py-12">

          <CompoundInterestCalculator />

        </section>

      </main>
    </>
  );
}