import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ChartLine, Globe, Lightbulb, Wrench, BookOpen, Home, LogIn } from "lucide-react";

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
                <ChartLine className="w-4 h-4" />
                <span>Trends</span>
              </Link>
            </Button>
            
            <Button variant="ghost" asChild>
              <Link to="/markets" className="flex items-center space-x-2">
                <Globe className="w-4 h-4" />
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
                <Wrench className="w-4 h-4" />
                <span>Tools</span>
              </Link>
            </Button>
            
            <Button variant="ghost" asChild>
              <Link to="/blog" className="flex items-center space-x-2">
                <BookOpen className="w-4 h-4" />
                <span>Blog</span>
              </Link>
            </Button>

            <Button variant="outline" asChild>
              <Link to="/auth/signin" className="flex items-center space-x-2">
                <LogIn className="w-4 h-4" />
                <span>Sign In</span>
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};