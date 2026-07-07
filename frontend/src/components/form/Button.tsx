type ButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
};

export default function Button({
  children,
  onClick,
}: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className="
        bg-blue-600
        text-white
        px-6
        py-3
        rounded-lg
        font-semibold
        hover:bg-blue-700
        transition
      "
    >
      {children}
    </button>
  );
}