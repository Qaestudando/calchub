import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";

import "./globals.css";

import Header from "@/src/components/layout/header";
import Footer from "@/src/components/layout/footer";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://calchub.com.br"),

  title: {
    default: "CalcHub | Calculadoras Online Gratuitas",
    template: "%s | CalcHub",
  },

  description:
    "Portal brasileiro de calculadoras online gratuitas. Juros Compostos, Juros Simples, Porcentagem, Regra de Três, IMC, Financiamento e muito mais.",

  keywords: [
    "calculadora",
    "calculadora online",
    "juros compostos",
    "juros simples",
    "porcentagem",
    "regra de três",
    "imc",
    "financiamento",
    "calc",
    "calchub",
  ],

  authors: [
    {
      name: "CalcHub",
    },
  ],

  creator: "CalcHub",

  publisher: "CalcHub",

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
      "Portal brasileiro de calculadoras online gratuitas.",

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
      "Portal brasileiro de calculadoras online.",

    images: ["/og-image.png"],
  },

  robots: {
    index: true,
    follow: true,

    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-video-preview": -1,
      "max-snippet": -1,
    },
  },

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#2563eb",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">

      <body
        className={`${inter.className} bg-gray-50 text-gray-900 antialiased`}
      >

        <Header />

        <main className="min-h-screen">
          {children}
        </main>

        <Footer />

      </body>

    </html>
  );
}