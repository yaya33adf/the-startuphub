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
  handleSignOut: () => Promise<void>;
}

export const MobileMenu = ({ isOpen, setIsOpen, session, handleSignOut }: MobileMenuProps) => (
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
        <NavLinks />
        {session ? (
          <Button 
            variant="outline" 
            onClick={handleSignOut} 
            className="mt-2 text-red-600 flex items-center gap-2 h-10"
          >
            <LogIn className="h-5 w-5" />
            <span className="font-medium">Sign Out</span>
          </Button>
        ) : (
          <Link to="/auth/signin" className="mt-2">
            <Button 
              variant="outline"
              className="w-full flex items-center gap-2 justify-center h-10"
            >
              <LogIn className="h-5 w-5" />
              <span className="font-medium">Sign In</span>
            </Button>
          </Link>
        )}
      </div>
    </SheetContent>
  </Sheet>
);