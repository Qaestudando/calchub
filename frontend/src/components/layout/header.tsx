import Link from "next/link";

import Container from "./Container";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-gray-200 bg-white/90 backdrop-blur">

      <Container>

        <div className="flex h-16 items-center justify-between">

          <Link
            href="/"
            className="text-3xl font-bold text-blue-600"
          >
            CalcHub
          </Link>

          <nav className="hidden items-center gap-8 md:flex">

            <Link
              href="/calculators"
              className="transition hover:text-blue-600"
            >
              Calculadoras
            </Link>

            <Link
              href="/categories"
              className="transition hover:text-blue-600"
            >
              Categorias
            </Link>

            <Link
              href="/about"
              className="transition hover:text-blue-600"
            >
              Sobre
            </Link>

          </nav>

        </div>

      </Container>

    </header>
  );
}