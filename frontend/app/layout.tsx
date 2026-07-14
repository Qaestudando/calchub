import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://calchub.com.br"),

  title: {
    default: "CalcHub | Calculadoras Online Gratuitas",
    template: "%s | CalcHub",
  },

  description:
    "O CalcHub reúne calculadoras financeiras, matemáticas, saúde e conversores em uma plataforma rápida, gratuita e fácil de usar.",

  keywords: [
    "calculadora",
    "calculadoras online",
    "juros compostos",
    "juros simples",
    "financiamento",
    "regra de três",
    "IMC",
    "calculadora financeira",
    "conversor",
    "CalcHub",
  ],

  applicationName: "CalcHub",

  authors: [
    {
      name: "CalcHub",
    },
  ],

  creator: "CalcHub",

  publisher: "CalcHub",

  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  alternates: {
    canonical: "/",
  },

  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://calchub.com.br",
    siteName: "CalcHub",
    title: "CalcHub | Calculadoras Online Gratuitas",
    description:
      "Calcule investimentos, financiamentos, IMC, porcentagem, regra de três e muito mais gratuitamente.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "CalcHub",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "CalcHub",
    description:
      "Plataforma brasileira de calculadoras online gratuitas.",
    images: ["/og-image.png"],
  },

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}