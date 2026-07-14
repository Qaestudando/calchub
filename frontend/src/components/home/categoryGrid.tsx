import Card from "../ui/Card";
import { categories } from "../../constants/categories";

export default function CategoryGrid() {
  return (
    <section className="py-20">

      <div className="mb-12 text-center">

        <span className="rounded-full bg-blue-100 px-4 py-1 text-sm font-semibold text-blue-700">
          Categorias
        </span>

        <h2 className="mt-5 text-4xl font-bold tracking-tight text-gray-900">
          Explore por categoria
        </h2>

        <p className="mx-auto mt-4 max-w-2xl text-lg leading-8 text-gray-600">
          Encontre rapidamente a calculadora ideal para investimentos,
          financiamentos, saúde, matemática, porcentagens e muito mais.
        </p>

      </div>

      <div className="grid gap-8 sm:grid-cols-2 xl:grid-cols-4">

        {categories.map((category) => {
          const Icon = category.icon;

          return (
            <Card
              key={category.id}
              className="group cursor-pointer rounded-2xl border border-gray-200 bg-white p-7 transition-all duration-300 hover:-translate-y-2 hover:border-blue-200 hover:shadow-xl"
            >
              <div
                className={`flex h-16 w-16 items-center justify-center rounded-2xl text-white shadow-lg ${category.color}`}
              >
                <Icon size={30} />
              </div>

              <h3 className="mt-6 text-2xl font-bold text-gray-900 transition group-hover:text-blue-600">
                {category.title}
              </h3>

              <p className="mt-3 text-base leading-7 text-gray-600">
                {category.description}
              </p>

              <div className="mt-8 flex items-center text-sm font-semibold text-blue-600">
                Explorar categoria

                <span className="ml-2 transition-transform duration-300 group-hover:translate-x-2">
                  →
                </span>
              </div>
            </Card>
          );
        })}

      </div>

    </section>
  );
}