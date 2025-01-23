import { ReactNode } from "react";

interface NavigationContainerProps {
  children: ReactNode;
}

export const NavigationContainer = ({ children }: NavigationContainerProps) => {
  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center px-4">
        {children}
      </div>
    </nav>
  );
};