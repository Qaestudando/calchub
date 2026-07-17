import Link from "next/link";

import Card from "../ui/Card";
import SectionTitle from "../ui/SectionTitle";

import { calculators } from "@/src/constants/calculators";

export default function PopularCalculators() {
  return (
    <section className="mt-24">

      <SectionTitle
        title="Calculadoras mais acessadas"
        subtitle="As ferramentas mais utilizadas pelos nossos usuários."
      />

      <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">

        {calculators.slice(0, 6).map((calculator) => (

          <Link
            key={calculator.slug}
            href={`/calculators/${calculator.slug}`}
          >

            <Card className="cursor-pointer hover:-translate-y-2 hover:border-blue-200 hover:shadow-xl">

              <h3 className="text-xl font-bold">
                {calculator.title}
              </h3>

              <p className="mt-3 leading-7 text-gray-600">
                {calculator.description}
              </p>

            </Card>

          </Link>

        ))}

      </div>

    </section>
  );
}