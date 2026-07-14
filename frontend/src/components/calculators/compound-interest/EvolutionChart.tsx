"use client";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

type Props = {
  data: {
    month: number;
    value: number;
  }[];
};

function formatCurrency(value: number) {
  return value.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
    maximumFractionDigits: 0,
  });
}

export default function EvolutionChart({
  data,
}: Props) {
  return (
    <section className="rounded-3xl border border-gray-200 bg-white p-8 shadow-sm">

      <h2 className="text-2xl font-bold">
        Evolução do Patrimônio
      </h2>

      <p className="mt-2 text-gray-600">
        Veja o crescimento do investimento ao longo do tempo.
      </p>

      <div className="mt-8 h-96">

        <ResponsiveContainer
          width="100%"
          height="100%"
        >
          <LineChart data={data}>

            <CartesianGrid strokeDasharray="3 3" />

            <XAxis
              dataKey="month"
              tickLine={false}
            />

            <YAxis
              tickFormatter={formatCurrency}
            />

            <Tooltip
              formatter={(value) =>
                formatCurrency(Number(value))
              }
            />

            <Line
              dataKey="value"
              stroke="#2563eb"
              strokeWidth={3}
              dot={false}
            />

          </LineChart>
        </ResponsiveContainer>

      </div>

    </section>
  );
}