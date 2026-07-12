"use client";

import { useState } from "react";

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

  return (
    <div className="mx-auto flex max-w-4xl flex-col gap-6 p-8">
      <h1 className="text-4xl font-bold">
        Calculadora de Juros Compostos
      </h1>

      <div className="grid gap-4 md:grid-cols-2">
        <InputNumber
          label="Capital Inicial"
          value={capital}
          onChange={setCapital}
        />

        <InputNumber
          label="Taxa (%)"
          value={rate}
          onChange={setRate}
        />

        <InputNumber
          label="Meses"
          value={months}
          onChange={setMonths}
        />

        <InputNumber
          label="Aporte Mensal"
          value={monthlyContribution}
          onChange={setMonthlyContribution}
        />
      </div>

      <Button
        type="button"
        onClick={handleCalculate}
      >
        {loading ? "Calculando..." : "Calcular"}
      </Button>

      {result && (
        <div className="grid gap-4 md:grid-cols-2">
          <ResultCard
            title="Valor Final"
            value={`R$ ${result.final_amount.toFixed(2)}`}
          />

          <ResultCard
            title="Juros Obtidos"
            value={`R$ ${result.interest_earned.toFixed(2)}`}
          />

          <ResultCard
            title="Total Investido"
            value={`R$ ${result.total_invested.toFixed(2)}`}
          />

          <ResultCard
            title="Rentabilidade"
            value={`${result.profitability}%`}
          />
        </div>
      )}
    </div>
  );
}