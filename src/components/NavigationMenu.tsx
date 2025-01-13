import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ChartLineUp, Briefcase, Lightbulb, Tools, BookOpen, Home } from "lucide-react";

export const NavigationMenu = () => {
  return (
    <nav className="border-b">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-2">
            <Home className="w-6 h-6" />
            <span className="font-bold text-xl">Startup Hub</span>
          </Link>
          
          <div className="hidden md:flex space-x-4">
            <Button variant="ghost" asChild>
              <Link to="/trends" className="flex items-center space-x-2">
                <ChartLineUp className="w-4 h-4" />
                <span>Trends</span>
              </Link>
            </Button>
            
            <Button variant="ghost" asChild>
              <Link to="/markets" className="flex items-center space-x-2">
                <Briefcase className="w-4 h-4" />
                <span>Markets</span>
              </Link>
            </Button>
            
            <Button variant="ghost" asChild>
              <Link to="/side-hustles" className="flex items-center space-x-2">
                <Lightbulb className="w-4 h-4" />
                <span>Side Hustles</span>
              </Link>
            </Button>
            
            <Button variant="ghost" asChild>
              <Link to="/tools" className="flex items-center space-x-2">
                <Tools className="w-4 h-4" />
                <span>Tools</span>
              </Link>
            </Button>
            
            <Button variant="ghost" asChild>
              <Link to="/blog" className="flex items-center space-x-2">
                <BookOpen className="w-4 h-4" />
                <span>Blog</span>
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};