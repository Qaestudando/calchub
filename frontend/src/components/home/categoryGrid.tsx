import Link from "next/link";

import Card from "../ui/Card";
import { categories } from "../../constants/categories";

export default function CategoryGrid() {
  return (
    <section
      id="categorias"
      className="mt-24"
    >

      <div className="mb-12 text-center">

        <h2 className="text-4xl font-bold">
          Explore por categoria
        </h2>

        <p className="mt-4 text-lg text-gray-600">
          Escolha uma categoria e encontre rapidamente a calculadora ideal.
        </p>

      </div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">

        {categories.map((category) => {

          const Icon = category.icon;

          return (

            <Link
              key={category.id}
              href={`/categories/${category.slug}`}
>
            

              <Card className="h-full cursor-pointer hover:-translate-y-2 hover:border-blue-200 hover:shadow-xl">

                <div
                  className={`flex h-14 w-14 items-center justify-center rounded-2xl text-white ${category.color}`}
                >
                  <Icon size={28} />
                </div>

                <h3 className="mt-5 text-xl font-bold">
                  {category.title}
                </h3>

                <p className="mt-3 leading-7 text-gray-600">
                  {category.description}
                </p>

              </Card>

            </Link>

          );

        })}

      </div>

    </section>
  );
}