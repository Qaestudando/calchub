import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-[70vh] flex-col items-center justify-center px-6 text-center">

      <h1 className="text-7xl font-extrabold text-blue-600">
        404
      </h1>

      <h2 className="mt-6 text-3xl font-bold">
        Página não encontrada
      </h2>

      <p className="mt-4 max-w-lg text-gray-600">
        A página que você tentou acessar não existe
        ou foi movida.
      </p>

      <Link
        href="/"
        className="mt-10 rounded-xl bg-blue-600 px-8 py-4 font-semibold text-white transition hover:bg-blue-700"
      >
        Voltar para Home
      </Link>

    </main>
  );
}