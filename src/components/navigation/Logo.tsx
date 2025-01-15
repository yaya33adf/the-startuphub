import { TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";

export const Logo = () => (
  <Link 
    to="/" 
    className="flex items-center space-x-2 transition-all duration-200 hover:opacity-80 hover:scale-105 flex-shrink-0"
  >
    <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-gradient-to-r from-[#0EA5E9] to-[#9b87f5] shadow-lg">
      <TrendingUp className="w-5 h-5 text-white" />
    </div>
    <span className="font-bold text-xl bg-gradient-to-r from-[#0EA5E9] to-[#9b87f5] bg-clip-text text-transparent">
      Startup Hub
    </span>
  </Link>
);