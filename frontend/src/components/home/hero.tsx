import Container from "../layout/Container";

export default function Hero() {
  return (
    <section className="py-20">

      <Container>

        <h2 className="text-5xl font-bold">

          A maior plataforma de calculadoras online.

        </h2>

        <p className="mt-6 text-xl text-gray-600">

          Financeiras, saúde, construção, matemática, engenharia,
          educação e muito mais.

        </p>

      </Container>

    </section>
  );
}