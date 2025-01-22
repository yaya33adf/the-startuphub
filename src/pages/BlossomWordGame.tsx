import { PageSEO } from "@/components/seo/PageSEO";
import StartupWordGame from "@/components/word-game/StartupWordGame";

const BlossomWordGame = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <PageSEO 
        title="Blossom Word Game - Fun Word Game for Startups" 
        description="Play our engaging word game designed specifically for startup enthusiasts and entrepreneurs" 
      />
      
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-purple-600 text-transparent bg-clip-text">
          Blossom Word Game
        </h1>
        <p className="text-muted-foreground mb-8 text-lg">
          Test your startup vocabulary and have fun with our interactive word game. 
          Perfect for entrepreneurs and startup enthusiasts!
        </p>

        <StartupWordGame />
      </div>
    </div>
  );
};

export default BlossomWordGame;