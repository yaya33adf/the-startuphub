import { ReactNode } from "react";

interface NavigationContainerProps {
  children: ReactNode;
}

export const NavigationContainer = ({ children }: NavigationContainerProps) => (
  <nav 
    className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 shadow-sm overflow-hidden"
    style={{ willChange: 'transform' }}
  >
    <div className="container flex h-16 items-center justify-between transition-all duration-200 ease-in-out transform-gpu max-w-[100vw] overflow-hidden">
      {children}
    </div>
  </nav>
);