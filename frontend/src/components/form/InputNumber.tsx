type Props = {
  label: string;
  value: number | "";
  onChange: (value: number) => void;
};

export default function InputNumber({
  label,
  value,
  onChange,
}: Props) {
  return (
    <div className="flex flex-col gap-2">
      <label>{label}</label>

      <input
        type="number"
        value={value}
        onChange={(e) =>
          onChange(Number(e.target.value))
        }
        className="rounded-lg border p-3"
      />
    </div>
  );
}