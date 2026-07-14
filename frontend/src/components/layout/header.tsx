import Link from "next/link";
import Container from "./Container";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-gray-200 bg-white/90 backdrop-blur-md">
      <Container>
        <div className="flex h-18 items-center justify-between">

          <Link
            href="/"
            className="flex items-center gap-2"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600 text-lg font-bold text-white shadow-sm">
              C
            </div>

            <div className="flex flex-col leading-none">
              <span className="text-xl font-bold tracking-tight text-gray-900">
                CalcHub
              </span>

              <span className="text-xs text-gray-500">
                Calculadoras Online
              </span>
            </div>
          </Link>

          <nav className="hidden items-center gap-8 text-sm font-medium text-gray-600 md:flex">

            <Link
              href="/"
              className="transition hover:text-blue-600"
            >
              Início
            </Link>

            <Link
              href="/calculators"
              className="transition hover:text-blue-600"
            >
              Calculadoras
            </Link>

            <Link
              href="/converters"
              className="transition hover:text-blue-600"
            >
              Conversores
            </Link>

            <Link
              href="/articles"
              className="transition hover:text-blue-600"
            >
              Artigos
            </Link>

          </nav>

          <Link
            href="/calculators"
            className="rounded-xl bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-blue-700"
          >
            Explorar
          </Link>

        </div>
      </Container>
    </header>
  );
}