type Props = {
  children: React.ReactNode;
};

export default function CalculatorLayout({
  children,
}: Props) {
  return (
    <main className="bg-gray-50 min-h-screen">

      <section className="mx-auto max-w-6xl px-6 py-12">

        {children}

      </section>

    </main>
  );
}