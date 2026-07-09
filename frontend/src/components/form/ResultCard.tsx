import Card from "../ui/Card";

type Props = {
  title: string;
  value: string;
};

export default function ResultCard({
  title,
  value,
}: Props) {
  return (
    <Card className="text-center">
      <h3 className="text-gray-500">
        {title}
      </h3>

      <p className="text-3xl font-bold text-blue-600 mt-2">
        {value}
      </p>
    </Card>
  );
}