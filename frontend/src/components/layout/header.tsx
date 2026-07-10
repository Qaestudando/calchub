import Container from "./Container";

export default function Header() {
  return (
    <header className="border-b bg-white">
      <Container>
        <div className="flex items-center justify-between h-16">

          <h1 className="text-3xl font-bold text-blue-600">
            CalcHub
          </h1>

          <nav className="flex gap-6">

            <a href="#">Calculadoras</a>

            <a href="#">Conversores</a>

            <a href="#">Artigos</a>

          </nav>

        </div>
      </Container>
    </header>
  );
}