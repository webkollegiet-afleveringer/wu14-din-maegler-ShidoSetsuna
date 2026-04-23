import { PageHero } from "./_components/PageHero";
import { SearchCard } from "./_components/SearchCard";
import { AboutSection } from "./_components/AboutSection";
import { FeaturedHomes } from "./_components/FeaturedHomes";
import { NewsletterSignup } from "./_components/NewsletterSignup";

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
      <FeaturedHomes />
      <NewsletterSignup />
    </main>
  );
}