"use client";

import { useState } from "react";

import {
  Button,
  InputNumber,
  ResultCard,
} from "@/src/components/form";

import {
  calculateSimpleInterest,
} from "@/src/services/api";

import type {
  SimpleInterestResponse,
} from "./types";

import Faq from "./Faq";
import Article from "./Article";
import RelatedCalculators from "./Related-Calculators";

export default function SimpleInterestCalculator() {
  const [capital, setCapital] = useState<number | "">(1000);

  const [rate, setRate] = useState<number | "">(1);

  const [months, setMonths] = useState<number | "">(12);

  const [loading, setLoading] = useState(false);

  const [result, setResult] =
    useState<SimpleInterestResponse | null>(null);

  async function handleCalculate() {
    try {
      setLoading(true);

      const response =
        await calculateSimpleInterest(
          Number(capital),
          Number(rate),
          Number(months),
        );

      setResult(response);
    } catch {
      alert("Erro ao calcular.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="mx-auto flex max-w-5xl flex-col gap-10">

      <div className="rounded-3xl border border-gray-200 bg-white p-8 shadow-sm">

        <div className="grid gap-5 md:grid-cols-3">

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
            label="Período (Meses)"
            value={months}
            onChange={setMonths}
          />

        </div>

        <div className="mt-8">

          <Button
            type="button"
            onClick={handleCalculate}
          >
            {loading
              ? "Calculando..."
              : "Calcular"}
          </Button>

        </div>

      </div>

      {result && (

        <div className="grid gap-5 md:grid-cols-2">

          <ResultCard
            title="Valor Final"
            value={result.final_amount.toLocaleString(
              "pt-BR",
              {
                style: "currency",
                currency: "BRL",
              },
            )}
          />

          <ResultCard
            title="Juros Obtidos"
            value={result.interest_earned.toLocaleString(
              "pt-BR",
              {
                style: "currency",
                currency: "BRL",
              },
            )}
          />

        </div>

      )}

      <Faq />

      <Article />

      <RelatedCalculators />

    </div>
  );
}