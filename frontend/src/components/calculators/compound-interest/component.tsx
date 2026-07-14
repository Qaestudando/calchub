"use client";

import { useMemo, useState } from "react";
import Faq from "./Faq";
import Article from "./Article";
import RelatedCalculators from "./RelatedCalculators";

import {
  Button,
  InputNumber,
  ResultCard,
} from "@/src/components/form";

import {
  calculateCompoundInterest,
} from "@/src/services/api";

import type {
  CompoundInterestResponse,
} from "./types";

import EvolutionChart from "./EvolutionChart";
import EvolutionTable from "./EvolutionTable";
import { div } from "framer-motion/m";

function formatCurrency(value: number) {
  return value.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });
}

export default function CompoundInterestCalculator() {
  const [capital, setCapital] = useState<number | "">(1000);
  const [rate, setRate] = useState<number | "">(1);
  const [months, setMonths] = useState<number | "">(12);
  const [monthlyContribution, setMonthlyContribution] =
    useState<number | "">(0);

  const [loading, setLoading] = useState(false);

  const [result, setResult] =
    useState<CompoundInterestResponse | null>(null);

  async function handleCalculate() {
    try {
      setLoading(true);

      const response =
        await calculateCompoundInterest(
          Number(capital),
          Number(rate),
          Number(months),
          Number(monthlyContribution),
        );

      setResult(response);
    } catch {
      alert("Erro ao calcular.");
    } finally {
      setLoading(false);
    }
  }

  function handleClear() {
    setCapital(1000);
    setRate(1);
    setMonths(12);
    setMonthlyContribution(0);
    setResult(null);
  }

  const chartData = useMemo(() => {
    const data = [];

    let amount = Number(capital);

    for (let month = 1; month <= Number(months); month++) {
      amount =
        amount * (1 + Number(rate) / 100) +
        Number(monthlyContribution);

      data.push({
        month,
        value: Number(amount.toFixed(2)),
      });
    }

    return data;
  }, [
    capital,
    months,
    rate,
    monthlyContribution,
  ]);

  return (
    <div className="space-y-10">

      <section className="rounded-3xl border border-gray-200 bg-white p-8 shadow-sm">

        <h2 className="text-2xl font-bold">
          Simule seu investimento
        </h2>

        <p className="mt-2 text-gray-600">
          Informe os dados abaixo para calcular a evolução do seu patrimônio.
        </p>

        <div className="mt-8 grid gap-6 md:grid-cols-2">

          <InputNumber
            label="Capital Inicial"
            value={capital}
            onChange={setCapital}
          />

          <InputNumber
            label="Taxa de Juros (% ao mês)"
            value={rate}
            onChange={setRate}
          />

          <InputNumber
            label="Quantidade de Meses"
            value={months}
            onChange={setMonths}
          />

          <InputNumber
            label="Aporte Mensal"
            value={monthlyContribution}
            onChange={setMonthlyContribution}
          />

        </div>

        <div className="mt-8 flex flex-col gap-4 sm:flex-row">

          <Button
            type="button"
            onClick={handleCalculate}
          >
            {loading
              ? "Calculando..."
              : "Calcular"}
          </Button>

          <Button
            type="button"
            onClick={handleClear}
          >
            Limpar
          </Button>

        </div>

      </section>

      {result && (
        <>
          <section className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">

            <ResultCard
              title="Valor Final"
              value={formatCurrency(result.final_amount)}
            />

            <ResultCard
              title="Juros Obtidos"
              value={formatCurrency(result.interest_earned)}
            />

            <ResultCard
              title="Total Investido"
              value={formatCurrency(result.total_invested)}
            />

            <ResultCard
              title="Rentabilidade"
              value={`${result.profitability.toFixed(2)}%`}
            />

          </section>

          <EvolutionChart
            data={chartData}
          />

          <EvolutionTable
            data={chartData}
          />
        </>
      )}

      <Faq />
      <Article />
      <RelatedCalculators />
    </div>  );
}