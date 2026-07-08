import Card from "@/src/components/ui/Card";
import SectionTitle from "@/src/components/ui/SectionTitle";
import { categories } from "@/src/constants/categories";

export default function CategoryGrid() {
  return (
    <section className="py-16">
      <SectionTitle
        title="Categorias"
        subtitle="Escolha uma categoria para encontrar a calculadora ideal."
      />

      <div className="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-4">
        {categories.map((category) => {
          const Icon = category.icon;

          return (
            <Card
              key={category.id}
              className="cursor-pointer text-center hover:-translate-y-1"
            >
              <div
                className={`
                  w-16
                  h-16
                  rounded-full
                  mx-auto
                  mb-4
                  flex
                  items-center
                  justify-center
                  ${category.color}
                  text-white
                `}
              >
                <Icon size={30} />
              </div>

              <h3 className="text-lg font-semibold">
                {category.title}
              </h3>
            </Card>
          );
        })}
      </div>
    </section>
  );
}