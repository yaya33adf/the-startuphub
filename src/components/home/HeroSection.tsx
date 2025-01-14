import { TrendSearch } from "@/components/TrendSearch";
import type { TrendData } from "@/types/trends";
import { TrendResults } from "@/components/TrendResults";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ClimbingAnimation } from "./ClimbingAnimation";

interface HeroSectionProps {
  searchResults: TrendData | null;
  onSearchResults: (results: TrendData) => void;
}

export const HeroSection = ({ searchResults, onSearchResults }: HeroSectionProps) => {
  return (
    <section className="py-20 px-4 text-center bg-gradient-to-b from-primary/10 via-accent/5 to-background relative overflow-hidden">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
          Welcome to The Startup Hub
        </h1>
        <div className="relative z-10 animate-scale-in">
          <ClimbingAnimation />
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