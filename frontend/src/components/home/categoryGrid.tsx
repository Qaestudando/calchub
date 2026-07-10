import Card from "../ui/Card";
import { categories } from "../../constants/categories";

export default function CategoryGrid() {
  return (
    <section className="mt-16">
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {categories.map((category) => {
          const Icon = category.icon;

          return (
            <Card key={category.id}>
              <div
                className={`w-12 h-12 rounded-xl flex items-center justify-center text-white ${category.color}`}
              >
                <Icon size={24} />
              </div>

              <h2 className="mt-4 text-xl font-bold">
                {category.title}
              </h2>

              <p className="mt-2 text-gray-600 text-sm">
                {category.description}
              </p>
            </Card>
          );
        })}
      </div>
    </section>
  );
}