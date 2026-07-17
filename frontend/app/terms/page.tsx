import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Termos de Uso | CalcHub",
};

export default function TermsPage() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-20">
      <h1 className="text-5xl font-bold">Termos de Uso</h1>

      <p className="mt-8 leading-9 text-gray-600">
        Os conteúdos e calculadoras do CalcHub possuem caráter
        informativo e educacional.
      </p>
    </main>
  );
}