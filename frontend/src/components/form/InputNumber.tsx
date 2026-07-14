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
    <div>

      <label className="mb-2 block text-sm font-semibold text-gray-700">
        {label}
      </label>

      <input
        type="number"
        value={value}
        onChange={(e) =>
          onChange(Number(e.target.value))
        }
        className="w-full rounded-xl border border-gray-300 bg-gray-50 px-4 py-3 text-lg outline-none transition focus:border-blue-600 focus:bg-white"
      />

    </div>
  );
}