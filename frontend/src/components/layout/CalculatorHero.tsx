type Props = {
  category: string;
  title: string;
  description: string;
};

export default function CalculatorHero({
  category,
  title,
  description,
}: Props) {
  return (
    <section className="border-b bg-white">
      <div className="mx-auto max-w-6xl px-6 py-14">

        <span className="text-sm font-semibold uppercase tracking-wide text-blue-600">
          {category}
        </span>

        <h1 className="mt-4 text-4xl font-bold tracking-tight text-gray-900 md:text-5xl">
          {title}
        </h1>

        <p className="mt-6 max-w-3xl text-lg leading-8 text-gray-600">
          {description}
        </p>

      </div>
    </section>
  );
}