import Card from "../ui/Card";
import SectionTitle from "../ui/SectionTitle";

const calculators = [
  "Juros Compostos",
  "Juros Simples",
  "Porcentagem",
  "Regra de Três",
  "Financiamento",
  "IMC",
];

export default function PopularCalculators() {
  return (
    <section className="mt-16">
      <SectionTitle
        title="Calculadoras Populares"
        subtitle="As ferramentas mais utilizadas pelos usuários."
      />

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 mt-8">
        {calculators.map((calculator) => (
          <Card key={calculator}>
            <h3 className="font-semibold text-lg">{calculator}</h3>
          </Card>
        ))}
      </div>
    </section>
  );
}