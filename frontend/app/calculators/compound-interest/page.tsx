
import Header from "@/src/components/layout/Header";
import Hero from "@/src/components/home/Hero";
import Footer from "@/src/components/layout/Footer";
import Container from "@/src/components/layout/Container";
import CategoryGrid from "@/src/components/home/CategoryGrid";
import PopularCalculators from "@/src/components/home/PopularCalculators";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Header />

      <Hero />

      <Footer />
    </>
  );
}
