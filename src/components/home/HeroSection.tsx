import { TrendSearch } from "@/components/TrendSearch";
import type { TrendData } from "@/types/trends";
import { TrendResults } from "@/components/TrendResults";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { GrowthAnimation } from "./GrowthAnimation";

interface HeroSectionProps {
  searchResults: TrendData | null;
  onSearchResults: (results: TrendData) => void;
}

export const HeroSection = ({ searchResults, onSearchResults }: HeroSectionProps) => {
  return (
    <section className="relative py-20 px-4 text-center bg-gradient-to-b from-primary/20 via-accent/10 to-background min-h-[800px] overflow-hidden">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-bold mb-8 animate-fade-in">
          Welcome to The Startup Hub
        </h1>
        <div className="relative z-10 mb-12">
          <GrowthAnimation />
        </div>
        <p className="text-lg md:text-xl text-muted-foreground mb-8 animate-fade-in" style={{ animationDelay: '0.2s' }}>
          Your comprehensive platform for tracking market trends, exploring opportunities, and discovering side hustles
        </p>
        <div className="mb-8 animate-fade-in" style={{ animationDelay: '0.4s' }}>
          <TrendSearch onSearchResults={onSearchResults} />
          {searchResults && <TrendResults data={searchResults} />}
        </div>
        <Button size="lg" asChild className="animate-fade-in hover:scale-105 transition-transform" style={{ animationDelay: '0.6s' }}>
          <Link to="/trends">Explore Trends</Link>
        </Button>
      </div>
    </section>
  );
};