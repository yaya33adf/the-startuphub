import { TrendingUp } from "lucide-react";

interface LogoImageProps {
  logoUrl: string | null;
  onError: () => void;
}

export const LogoImage = ({ logoUrl, onError }: LogoImageProps) => {
  if (!logoUrl) {
    return (
      <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-gradient-to-r from-[#0EA5E9] to-[#9b87f5] shadow-lg">
        <TrendingUp className="w-5 h-5 text-white" />
      </div>
    );
  }

  return (
    <img 
      src={logoUrl} 
      alt="Site Logo" 
      className="w-8 h-8 rounded-lg object-contain"
      onError={(e) => {
        console.error('Error loading logo image');
        e.currentTarget.src = ''; // Clear the src to show fallback
        onError(); // Reset to fallback icon
      }}
    />
  );
};