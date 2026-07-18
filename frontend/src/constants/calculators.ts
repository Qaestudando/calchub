import {
  Calculator,
  Percent,
  Landmark,
  Scale,
  TrendingUp,
  PiggyBank,
} from "lucide-react";

export const calculators = [
  {
    slug: "compound-interest",
    title: "Juros Compostos",
    description: "Simule investimentos com aportes mensais.",
    category: "Financeiras",
    icon: PiggyBank,
  },
  {
    slug: "simple-interest",
    title: "Juros Simples",
    description: "Calcule juros simples rapidamente.",
    category: "Financeiras",
    icon: TrendingUp,
  },
  {
    slug: "percentage",
    title: "Porcentagem",
    description: "Calcule porcentagens em segundos.",
    category: "Matemática",
    icon: Percent,
  },
  {
    slug: "rule-of-three",
    title: "Regra de Três",
    description: "Resolva proporções facilmente.",
    category: "Matemática",
    icon: Calculator,
  },
  {
    slug: "financing",
    title: "Financiamento",
    description: "Simule parcelas e juros.",
    category: "Financeiras",
    icon: Landmark,
  },
  {
    slug: "bmi",
    title: "IMC",
    description: "Calcule seu Índice de Massa Corporal.",
    category: "Saúde",
    icon: Scale,
  },
];