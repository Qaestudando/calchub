type Props = {
  title: string;
  value: string;
};

export default function ResultCard({
  title,
  value,
}: Props) {
  return (
    <div className="rounded-xl border p-6 bg-green-50">
      <p className="text-gray-500">
        {title}
      </p>

      <h2 className="text-4xl font-bold tracking-tight text-white">
        {value}
      </h2>
    </div>
  );
}