import React from 'react';
import { Globe, Sparkles } from 'lucide-react';

const GlobalTrendsHeader = () => {
  return (
    <>
      <style>
        {`
          @keyframes float {
            0% {
              transform: translateY(0px);
            }
            50% {
              transform: translateY(-20px);
            }
            100% {
              transform: translateY(0px);
            }
          }
          .animate-float {
            animation: float 6s ease-in-out infinite;
          }
        `}
      </style>
      <div className="flex items-center justify-center mb-8 animate-float">
        <div className="relative">
          <Globe className="h-20 w-20 text-blue-400" />
          <Sparkles className="h-6 w-6 text-yellow-400 absolute -top-2 -right-2 animate-pulse" />
        </div>
        <h1 className="text-6xl font-bold ml-6 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 text-transparent bg-clip-text">
          Global Trends
        </h1>
      </div>
    </>
  );
};

export default GlobalTrendsHeader;