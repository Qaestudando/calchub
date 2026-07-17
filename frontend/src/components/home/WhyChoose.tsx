export default function WhyChoose() {
  const items = [
    ["⚡", "Resultados instantâneos"],
    ["📱", "Funciona em qualquer dispositivo"],
    ["🔒", "Sem cadastro"],
    ["💰", "100% gratuito"],
    ["🎯", "Resultados precisos"],
    ["🚀", "Atualizado constantemente"],
  ];

  return (
    <section className="mt-24 rounded-3xl bg-blue-600 px-10 py-20 text-white">

      <h2 className="text-center text-4xl font-bold">
        Por que usar o CalcHub?
      </h2>

      <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-3">

        {items.map(([icon, text]) => (

          <div
            key={text}
            className="rounded-2xl bg-white/10 p-8 backdrop-blur"
          >

            <div className="text-4xl">
              {icon}
            </div>

            <h3 className="mt-4 text-xl font-semibold">
              {text}
            </h3>

          </div>

        ))}

      </div>

    </section>
  );
}