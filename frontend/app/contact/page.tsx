import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contato | CalcHub",
  description:
    "Entre em contato com a equipe do CalcHub.",
};

export default function ContactPage() {
  return (
    <main className="mx-auto max-w-4xl px-6 py-20">

      <h1 className="text-5xl font-bold">
        Contato
      </h1>

      <p className="mt-8 text-lg leading-9 text-gray-600">
        Encontrou algum erro em uma calculadora,
        deseja sugerir uma nova ferramenta ou falar conosco?
      </p>

      <p className="mt-8 text-xl font-semibold text-blue-600">
        contato@calchub.com.br
      </p>

    </main>
  );
}