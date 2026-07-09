type InputNumberProps = {
  label: string;
  value: number | "";
  onChange: (value: number | "") => void;
  placeholder?: string;
};

export default function InputNumber({
  label,
  value,
  onChange,
  placeholder,
}: InputNumberProps) {
  return (
    <div className="flex flex-col gap-2">
      <label className="font-medium text-gray-700">
        {label}
      </label>

      <input
        type="number"
        value={value}
        placeholder={placeholder}
        onChange={(e) =>
          onChange(
            e.target.value === ""
              ? ""
              : Number(e.target.value)
          )
        }
        className="
          rounded-lg
          border
          border-gray-300
          px-4
          py-3
          outline-none
          focus:border-blue-500
        "
      />
    </div>
  );
}