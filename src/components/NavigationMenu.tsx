import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ChartLine, Wrench, BookOpen, LogIn, MessageSquare, Menu, TrendingUp, DollarSign } from "lucide-react";
import { useState } from "react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const navItems = [
  { to: "/business-insights", icon: ChartLine, label: "Business Insights" },
  { to: "/tools", icon: Wrench, label: "Tools" },
  { to: "/blog", icon: BookOpen, label: "Blog" },
  { to: "/community", icon: MessageSquare, label: "Community" },
  { to: "/crowdfunding", icon: DollarSign, label: "Crowdfunding" },
];

export const NavigationMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const NavLinks = ({ onClick = () => {} }) => (
    <>
      {navItems.map((item) => (
        <Button 
          key={item.to} 
          variant="ghost" 
          asChild 
          onClick={onClick}
          className="h-10 px-3 py-2"
        >
          <Link to={item.to} className="flex items-center gap-2 min-w-[100px] justify-start">
            <item.icon className="w-4 h-4 flex-shrink-0" />
            <span className="whitespace-nowrap">{item.label}</span>
          </Link>
        </Button>
      ))}
    </>
  );

  return (
    <nav className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-2 hover:opacity-80 transition-opacity flex-shrink-0">
            <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-gradient-to-r from-primary to-secondary">
              <TrendingUp className="w-5 h-5 text-white" />
            </div>
            <span className="text-lg font-semibold">
              TrendScope
            </span>
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1 overflow-x-auto flex-grow justify-end max-w-[calc(100%-200px)]">
            <NavLinks />
            <Button variant="outline" asChild className="ml-2 h-10 px-3 py-2">
              <Link to="/auth/signin" className="flex items-center gap-2 min-w-[100px] justify-center">
                <LogIn className="w-4 h-4 flex-shrink-0" />
                <span className="whitespace-nowrap">Sign In</span>
              </Link>
            </Button>
          </div>

          {/* Mobile Navigation */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon" className="h-10 w-10">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[80vw] sm:w-[350px]">
              <SheetHeader>
                <SheetTitle>Menu</SheetTitle>
              </SheetHeader>
              <div className="flex flex-col gap-2 mt-4">
                <NavLinks onClick={() => setIsOpen(false)} />
                <Button variant="outline" asChild onClick={() => setIsOpen(false)} className="mt-2">
                  <Link to="/auth/signin" className="flex items-center gap-2 justify-center">
                    <LogIn className="w-4 h-4 flex-shrink-0" />
                    <span>Sign In</span>
                  </Link>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
};