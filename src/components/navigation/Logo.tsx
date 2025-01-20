import { Link } from "react-router-dom";
import { memo } from "react";
import { LogoImage } from "./LogoImage";
import { useLogoSubscription } from "./hooks/useLogoSubscription";

export const Logo = memo(() => {
  const logoUrl = useLogoSubscription();

  return (
    <Link 
      to="/" 
      className="flex items-center space-x-2 transition-all duration-200 hover:opacity-80 hover:scale-105 flex-shrink-0"
    >
      <LogoImage 
        logoUrl={logoUrl} 
        onError={() => console.log('Logo image error handled')} 
      />
      <span className="font-bold text-xl bg-gradient-to-r from-[#0EA5E9] to-[#9b87f5] bg-clip-text text-transparent">
        Startup Hub
      </span>
    </Link>
  );
});

Logo.displayName = "Logo";