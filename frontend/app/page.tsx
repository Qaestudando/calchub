import Container from "@/src/components/layout/Container";

import Hero from "@/src/components/home/hero";
import SearchBar from "@/src/components/home/searchBar";
import CategoryGrid from "@/src/components/home/categoryGrid";
import PopularCalculators from "@/src/components/home/PopularCalculators";
import WhyChoose from "@/src/components/home/WhyChoose";
import LatestArticles from "@/src/components/home/LatestArticles";

export default function HomePage() {
  return (
    <>
      <Hero />

      <Container>

        <SearchBar />

        <CategoryGrid />

        <PopularCalculators />

        <WhyChoose />

        <LatestArticles />

      </Container>
    </>
  );
}