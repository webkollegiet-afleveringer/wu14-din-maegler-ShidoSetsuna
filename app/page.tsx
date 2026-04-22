import { PageHero } from "./_components/PageHero";
import { SearchCard } from "./_components/SearchCard";
import { AboutSection } from "./_components/AboutSection";

export default function HomePage() {
  return (
    <main>
      <PageHero
        title="Søg efter din drømmebolig"
        image="/home_hero.jpg"
        size="lg"
      >
        <SearchCard />
      </PageHero>
      <AboutSection />
    </main>
  );
}
