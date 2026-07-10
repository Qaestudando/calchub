type Props = {
  children: React.ReactNode;
  onClick?: () => void;
  type?: "button" | "submit";
};

export default function Button({
  children,
  onClick,
  type = "button",
}: Props) {
  return (
    <button
      type={type}
      onClick={onClick}
      className="w-full rounded-xl bg-blue-600 px-4 py-3 text-white font-semibold hover:bg-blue-700 transition"
    >
      {children}
    </button>
  );
}