import Header from "@/src/components/layout/header";
import Hero from "@/src/components/home/hero";
import Footer from "@/src/components/layout/footer";
import Container from "@/src/components/layout/container";
import CategoryGrid from "@/src/components/home/categoryGrid";
import PopularCalculators from "@/src/components/home/PopularCalculators";

export default function Home() {
  return (
    <>
      <Header />

      <Hero />

      <Container>
        <CategoryGrid />

        <PopularCalculators />
      </Container>

      <Footer />
    </>
  );
}