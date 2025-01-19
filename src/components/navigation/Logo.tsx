import { Link } from "react-router-dom";
import { memo } from "react";

export const Logo = memo(() => (
  <Link 
    to="/" 
    className="flex items-center space-x-2 transition-all duration-200 hover:opacity-80 hover:scale-105 flex-shrink-0"
  >
    <div className="flex items-center justify-center w-8 h-8">
      <img 
        src="/lovable-uploads/2648bf04-322d-4322-8339-6c58898ddde6.png" 
        alt="Startup Hub Logo" 
        className="w-full h-full object-contain"
      />
    </div>
    <span className="font-bold text-xl bg-gradient-to-r from-[#0EA5E9] to-[#9b87f5] bg-clip-text text-transparent">
      Startup Hub
    </span>
  </Link>
));

Logo.displayName = "Logo";