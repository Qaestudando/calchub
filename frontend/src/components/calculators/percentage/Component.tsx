"use client";

import { useState } from "react";

import {
  Button,
  InputNumber,
  ResultCard,
} from "@/src/components/form";

import {
  calculatePercentage,
} from "@/src/services/api";

import type {
  PercentageResponse,
} from "./types";

import Faq from "./Faq";
import Article from "./Article";
import RelatedCalculators from "./RelatedCalculators";

export default function PercentageCalculator() {
  const [value, setValue] = useState<number | "">(1000);

  const [percentage, setPercentage] =
    useState<number | "">(10);

  const [loading, setLoading] = useState(false);

  const [result, setResult] =
    useState<PercentageResponse | null>(null);

  async function handleCalculate() {
    try {
      setLoading(true);

      const response =
        await calculatePercentage(
          Number(value),
          Number(percentage),
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

        <div className="grid gap-5 md:grid-cols-2">

          <InputNumber
            label="Valor"
            value={value}
            onChange={setValue}
          />

          <InputNumber
            label="Porcentagem (%)"
            value={percentage}
            onChange={setPercentage}
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

        <ResultCard
          title="Resultado"
          value={result.result.toLocaleString(
            "pt-BR",
            {
              style: "currency",
              currency: "BRL",
            },
          )}
        />

      )}

      <Faq />

      <Article />

      <RelatedCalculators />

    </div>
  );
}