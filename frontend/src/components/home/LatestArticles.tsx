import Link from "next/link";

export default function LatestArticles() {
  const articles = [
    "Como calcular Juros Compostos",
    "O que é CDI",
    "Como calcular porcentagem",
  ];

  return (
    <section className="mt-24">

      <h2 className="text-4xl font-bold">
        Últimos artigos
      </h2>

      <div className="mt-10 grid gap-6 lg:grid-cols-3">

        {articles.map((article) => (

          <Link
            href="#"
            key={article}
            className="rounded-2xl border border-gray-200 p-8 transition hover:border-blue-200 hover:shadow-xl"
          >

            <h3 className="text-xl font-bold">
              {article}
            </h3>

            <p className="mt-4 text-blue-600">
              Ler artigo →
            </p>

          </Link>

        ))}

      </div>

    </section>
  );
}