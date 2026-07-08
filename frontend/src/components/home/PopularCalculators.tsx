import Card from "@/src/components/ui/Card";
import SectionTitle from "@/src/components/ui/SectionTitle";

const calculators = [
  "Juros Compostos",
  "Financiamento",
  "IMC",
  "Porcentagem",
  "Regra de 3",
  "Idade",
];

export default function PopularCalculators() {
  return (
    <section className="py-16">
      <SectionTitle
        title="Calculadoras Populares"
        subtitle="As mais utilizadas pelos usuários."
      />

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {calculators.map((calc) => (
          <Card key={calc}>
            <h3 className="font-bold text-xl">
              {calc}
            </h3>

            <p className="text-gray-600 mt-2">
              Clique para acessar esta calculadora.
            </p>
          </Card>
        ))}
      </div>
    </section>
  );
}