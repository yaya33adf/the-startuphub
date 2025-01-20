import { Link } from "react-router-dom";

export const TemplatesSection = () => {
  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold">Templates</h2>
      <ul className="space-y-2">
        <li>
          <Link 
            to="/business-cards" 
            className="text-sm text-muted-foreground hover:text-primary transition-colors"
          >
            Business Cards
          </Link>
        </li>
        <li>
          <Link 
            to="/wordpress-templates" 
            className="text-sm text-muted-foreground hover:text-primary transition-colors"
          >
            WordPress Templates
          </Link>
        </li>
        <li>
          <Link 
            to="/blossom-word-game" 
            className="text-sm text-muted-foreground hover:text-primary transition-colors"
          >
            Blossom Word Game
          </Link>
        </li>
      </ul>
    </div>
  );
};