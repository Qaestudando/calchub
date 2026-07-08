type CardProps = {
  children: React.ReactNode;
  className?: string;
};

export default function Card({
  children,
  className = "",
}: CardProps) {
  return (
    <div
      className={`
        rounded-2xl
        border
        border-gray-200
        bg-white
        p-6
        shadow-sm
        hover:shadow-lg
        transition-all
        duration-300
        ${className}
      `}
    >
      {children}
    </div>
  );
}