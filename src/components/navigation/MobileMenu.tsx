import { Menu, LogIn } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { NavLinks } from "./NavLinks";

interface MobileMenuProps {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
  session: any;
  userProfile: any;
  handleSignOut: () => Promise<void>;
}

export const MobileMenu = ({ isOpen, setIsOpen, session, userProfile, handleSignOut }: MobileMenuProps) => {
  const handleClose = () => setIsOpen(false);

  return (
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
        <nav className="flex flex-col gap-4 mt-4" onClick={handleClose}>
          <NavLinks />
          {session ? (
            <Button 
              variant="outline" 
              onClick={handleSignOut} 
              className="mt-2 text-red-600"
            >
              <LogIn className="w-4 h-4 mr-2" />
              Sign Out
            </Button>
          ) : (
            <Button 
              variant="outline" 
              asChild 
              className="mt-2"
            >
              <Link to="/auth/signin" className="flex items-center gap-2 justify-center">
                <LogIn className="w-4 h-4 flex-shrink-0" />
                <span>Sign In</span>
              </Link>
            </Button>
          )}
        </nav>
      </SheetContent>
    </Sheet>
  );
};