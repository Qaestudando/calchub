import Link from "next/link";

import Container from "../layout/Container";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-blue-50 via-white to-white">

      <Container>

        <div className="mx-auto flex max-w-5xl flex-col items-center py-24 text-center lg:py-32">

          <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
            🚀 Mais de 200 calculadoras online gratuitas
          </span>

          <h1 className="mt-8 max-w-4xl text-5xl font-extrabold tracking-tight text-gray-900 md:text-6xl">
            O jeito mais rápido de fazer cálculos online.
          </h1>

          <p className="mt-8 max-w-3xl text-xl leading-9 text-gray-600">
            O CalcHub reúne calculadoras de finanças, matemática,
            saúde, engenharia e diversas outras categorias em um
            único lugar, gratuitamente e sem necessidade de cadastro.
          </p>

          <div className="mt-12 flex flex-col gap-4 sm:flex-row">

            <Link
              href="/calculators"
              className="rounded-xl bg-blue-600 px-8 py-4 text-lg font-semibold text-white transition hover:bg-blue-700"
            >
              Explorar Calculadoras
            </Link>

            <Link
              href="#categorias"
              className="rounded-xl border border-gray-300 px-8 py-4 text-lg font-semibold text-gray-700 transition hover:border-blue-500 hover:text-blue-600"
            >
              Ver Categorias
            </Link>

          </div>

          <div className="mt-16 grid gap-8 text-left sm:grid-cols-3">

            <div>
              <div className="text-3xl">⚡</div>

              <h3 className="mt-3 font-bold">
                Resultado imediato
              </h3>

              <p className="mt-2 text-gray-600">
                Cálculos rápidos e precisos em poucos segundos.
              </p>
            </div>

            <div>
              <div className="text-3xl">🔒</div>

              <h3 className="mt-3 font-bold">
                Sem cadastro
              </h3>

              <p className="mt-2 text-gray-600">
                Utilize todas as ferramentas gratuitamente.
              </p>
            </div>

            <div>
              <div className="text-3xl">📱</div>

              <h3 className="mt-3 font-bold">
                Funciona em qualquer dispositivo
              </h3>

              <p className="mt-2 text-gray-600">
                Celular, tablet ou computador.
              </p>
            </div>

          </div>

        </div>

      </Container>

    </section>
  );
}