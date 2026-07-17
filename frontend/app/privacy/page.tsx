import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Política de Privacidade | CalcHub",
};

export default function PrivacyPage() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-20">

      <h1 className="text-5xl font-bold">
        Política de Privacidade
      </h1>

      <p className="mt-8 leading-9 text-gray-600">
        O CalcHub respeita sua privacidade.
        Não coletamos dados pessoais sem consentimento.
      </p>

      <p className="mt-6 leading-9 text-gray-600">
        Podemos utilizar cookies para melhorar
        a experiência de navegação e obter estatísticas
        de acesso através do Google Analytics.
      </p>

    </main>
  );
}