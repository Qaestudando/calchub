type Props = {
  title: string;
  value: string;
};

export default function ResultCard({
  title,
  value,
}: Props) {
  return (
    <div className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl">

      <p className="text-sm font-medium uppercase tracking-wide text-gray-500">
        {title}
      </p>

      <h2 className="mt-4 text-3xl font-bold text-gray-900">
        {value}
      </h2>

    </div>
  );
}