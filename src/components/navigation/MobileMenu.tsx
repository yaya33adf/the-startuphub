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
      <Button variant="ghost" size="icon">
        <Menu className="h-4 w-4" />
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
            className="mt-2 text-red-600"
          >
            <LogIn className="h-4 w-4 mr-2" />
            Sign Out
          </Button>
        ) : (
          <Button asChild variant="outline" className="mt-2">
            <Link 
              to="/auth/signin"
              className="flex items-center gap-2 justify-center w-full"
            >
              <LogIn className="h-4 w-4" />
              Sign In
            </Link>
          </Button>
        )}
      </div>
    </SheetContent>
  </Sheet>
);