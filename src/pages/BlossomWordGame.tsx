import { PageSEO } from "@/components/seo/PageSEO";
import StartupWordGame from "@/components/word-game/StartupWordGame";

const BlossomWordGame = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <PageSEO 
        title="Blossom Word Game for Startups" 
        description="Test your startup knowledge with our fun word scramble game. Unscramble startup-related words and learn while you play!" 
      />
      
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-4 text-center bg-gradient-to-r from-primary to-purple-600 text-transparent bg-clip-text">
          Blossom Word Game for Startups
        </h1>
        <p className="text-muted-foreground mb-8 text-lg text-center">
          Challenge yourself with our startup-themed word scramble game. 
          Unscramble the letters to discover words related to startups, business, and entrepreneurship.
        </p>

        <StartupWordGame />
      </div>
    </div>
  );
};

export default BlossomWordGame;