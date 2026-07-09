type Props = {
  title: string;
  children: React.ReactNode;
};

export default function Section({
  title,
  children,
}: Props) {
  return (
    <section className="mb-10">
      <h2 className="text-2xl font-bold mb-5">
        {title}
      </h2>

      {children}
    </section>
  );
}