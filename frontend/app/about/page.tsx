import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sobre | CalcHub",
  description:
    "Conheça o CalcHub, portal brasileiro de calculadoras online gratuitas.",
};

export default function AboutPage() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-20">

      <h1 className="text-5xl font-bold">
        Sobre o CalcHub
      </h1>

      <p className="mt-8 text-lg leading-9 text-gray-600">
        O CalcHub nasceu com um objetivo simples: oferecer
        calculadoras online rápidas, gratuitas e confiáveis para
        estudantes, profissionais e qualquer pessoa que precise
        realizar cálculos no dia a dia.
      </p>

      <p className="mt-8 text-lg leading-9 text-gray-600">
        Nossa missão é reunir centenas de ferramentas em um único
        lugar, sempre priorizando facilidade de uso, velocidade
        e precisão.
      </p>

    </main>
  );
}