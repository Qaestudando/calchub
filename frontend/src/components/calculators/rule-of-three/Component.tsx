"use client";

import { useState } from "react";

import {
  Button,
  InputNumber,
  ResultCard,
} from "@/src/components/form";

import {
  calculateRuleOfThree,
} from "@/src/services/api";

import type {
  RuleOfThreeResponse,
} from "./types";

import Faq from "./Faq";
import Article from "./Article";
import RelatedCalculators from "./RelatedCalculators";

export default function RuleOfThreeCalculator() {
  const [a, setA] = useState<number | "">(0);
  const [b, setB] = useState<number | "">(0);
  const [c, setC] = useState<number | "">(0);

  const [loading, setLoading] = useState(false);

  const [result, setResult] =
    useState<RuleOfThreeResponse | null>(null);

  async function handleCalculate() {
    try {
      setLoading(true);

      const response =
        await calculateRuleOfThree(
          Number(a),
          Number(b),
          Number(c),
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
            label="Valor A"
            value={a}
            onChange={setA}
          />

          <InputNumber
            label="Valor B"
            value={b}
            onChange={setB}
          />

          <InputNumber
            label="Valor C"
            value={c}
            onChange={setC}
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
              minimumFractionDigits: 2,
              maximumFractionDigits: 2,
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