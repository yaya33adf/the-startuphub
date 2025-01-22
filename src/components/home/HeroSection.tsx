import { TrendSearch } from "@/components/TrendSearch";
import type { TrendData } from "@/types/trends";
import { TrendResults } from "@/components/TrendResults";
import AlternatingJourney from "./AlternatingJourney";
import GlobalTrendsHeader from "./GlobalTrendsHeader";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Star } from "lucide-react";
import { lazy, Suspense } from "react";

// Lazy load components that are below the fold
const StartupJourney = lazy(() => import("./StartupJourney"));

interface HeroSectionProps {
  searchResults: TrendData | null;
  onSearchResults: (results: TrendData) => void;
}

const trendyApps = [
  {
    name: "AI Code Assistant",
    description: "Intelligent coding companion powered by machine learning",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=600&q=80",
    score: 4.8,
    category: "Development"
  },
  {
    name: "Smart Analytics",
    description: "Real-time business insights and data visualization",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=600&q=80",
    score: 4.5,
    category: "Business"
  },
  {
    name: "Virtual Assistant",
    description: "AI-powered personal productivity assistant",
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=600&q=80",
    score: 4.7,
    category: "Productivity"
  },
  {
    name: "Cloud Workspace",
    description: "Collaborative remote work platform",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=600&q=80",
    score: 4.6,
    category: "Collaboration"
  }
];

export const HeroSection = ({ searchResults, onSearchResults }: HeroSectionProps) => {
  const renderStars = (score: number) => {
    return [...Array(5)].map((_, index) => (
      <Star
        key={index}
        className={`w-3 h-3 md:w-4 md:h-4 ${
          index < Math.floor(score)
            ? 'text-yellow-400 fill-yellow-400'
            : 'text-gray-300'
        }`}
      />
    ));
  };

  return (
    <>
      <section className="relative py-12 md:py-20 px-4 bg-gradient-to-br from-secondary/30 via-accent/20 to-primary/10">
        <div className="max-w-4xl mx-auto">
          {/* Prioritize loading of the header */}
          <link rel="preload" as="image" href="/og-image.png" />
          
          <GlobalTrendsHeader />
          <div className="relative z-10 mb-8 md:mb-12">
            <AlternatingJourney />
          </div>
          <p className="text-base md:text-xl text-muted-foreground mb-6 md:mb-8 animate-fade-in px-4" style={{ animationDelay: '0.2s' }}>
            Your comprehensive platform for tracking market trends, exploring opportunities, and discovering side hustles
          </p>
          <div className="mb-6 md:mb-8 animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <TrendSearch onSearchResults={onSearchResults} />
            {searchResults && <TrendResults data={searchResults} />}
          </div>

          <div className="mt-16 md:mt-20">
            <h2 className="text-2xl md:text-3xl font-bold mb-8 md:mb-12">Trending Apps & Websites</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
              {trendyApps.map((app, index) => (
                <Card key={index} className="group hover:shadow-lg transition-shadow duration-300">
                  <CardHeader className="p-0">
                    <div className="relative h-40 md:h-48 overflow-hidden rounded-t-lg">
                      {/* Add loading="lazy" for images below the fold */}
                      <img
                        src={app.image}
                        alt={app.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        loading={index > 1 ? "lazy" : "eager"}
                        width="600"
                        height="400"
                        decoding="async"
                      />
                      <div className="absolute top-2 right-2 bg-black/70 text-white px-2 py-1 rounded-full text-xs md:text-sm">
                        {app.category}
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="p-3 md:p-4">
                    <CardTitle className="text-lg md:text-xl mb-2">{app.name}</CardTitle>
                    <p className="text-muted-foreground text-sm mb-3 line-clamp-2">{app.description}</p>
                    <div className="flex items-center gap-1">
                      {renderStars(app.score)}
                      <span className="ml-2 text-sm font-medium">{app.score}</span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Lazy load the mission section since it's below the fold */}
          <Suspense fallback={<div className="h-[600px] flex items-center justify-center">Loading...</div>}>
            <section className="relative py-20 md:py-32 px-4 text-center bg-gradient-to-br from-primary via-secondary to-accent min-h-[600px] overflow-hidden mt-16 rounded-xl">
              <div className="max-w-4xl mx-auto text-white">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                  Empowering Innovators, Driving Global Impact
                </h1>
                <p className="text-lg md:text-xl lg:text-2xl mb-12 text-white/90">
                  Our mission is to connect, inspire, and accelerate entrepreneurs through a centralized hub of resources, mentorship, and opportunities.
                </p>
              </div>
            </section>
          </Suspense>
        </div>
      </section>
    </>
  );
};