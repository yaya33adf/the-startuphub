import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ChartLine, Globe, Lightbulb, Wrench, BookOpen, Home, LogIn, MessageSquare, Menu, Rocket } from "lucide-react";
import { useState } from "react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

export const NavigationMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { to: "/trends", icon: ChartLine, label: "Trends" },
    { to: "/markets", icon: Globe, label: "Markets" },
    { to: "/side-hustles", icon: Lightbulb, label: "Side Hustles" },
    { to: "/tools", icon: Wrench, label: "Tools" },
    { to: "/blog", icon: BookOpen, label: "Blog" },
    { to: "/community", icon: MessageSquare, label: "Community" },
  ];

  const NavLinks = ({ onClick = () => {} }) => (
    <>
      {navItems.map((item) => (
        <Button key={item.to} variant="ghost" asChild onClick={onClick}>
          <Link to={item.to} className="flex items-center space-x-2">
            <item.icon className="w-4 h-4" />
            <span>{item.label}</span>
          </Link>
        </Button>
      ))}
    </>
  );

  return (
    <nav className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-2 hover:opacity-80 transition-opacity">
            <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-primary">
              <Rocket className="w-5 h-5 text-white transform rotate-45" />
            </div>
            <span className="font-bold text-xl bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Startup Hub
            </span>
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4">
            <NavLinks />
            <Button variant="outline" asChild>
              <Link to="/auth/signin" className="flex items-center space-x-2">
                <LogIn className="w-4 h-4" />
                <span>Sign In</span>
              </Link>
            </Button>
          </div>

          {/* Mobile Navigation */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[80vw] sm:w-[350px]">
              <SheetHeader>
                <SheetTitle>Menu</SheetTitle>
              </SheetHeader>
              <div className="flex flex-col space-y-4 mt-4">
                <NavLinks onClick={() => setIsOpen(false)} />
                <Button variant="outline" asChild onClick={() => setIsOpen(false)}>
                  <Link to="/auth/signin" className="flex items-center space-x-2">
                    <LogIn className="w-4 h-4" />
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