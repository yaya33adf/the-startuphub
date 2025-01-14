import { useEffect, useRef } from 'react';
import './ClimbingAnimation.css';

export const ClimbingAnimation = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    console.log("ClimbingAnimation mounted");
    if (containerRef.current) {
      console.log("Animation container dimensions:", {
        width: containerRef.current.offsetWidth,
        height: containerRef.current.offsetHeight
      });
    }
  }, []);

  return (
    <div 
      ref={containerRef}
      className="relative h-[600px] w-full max-w-[800px] mx-auto mb-12 overflow-visible bg-gradient-to-b from-primary/20 to-transparent rounded-lg"
      aria-hidden="true"
    >
      <div className="climbing-boy">
        <div className="head"></div>
        <div className="body"></div>
        <div className="legs"></div>
      </div>
      {[...Array(6)].map((_, index) => (
        <div
          key={index}
          className="stair"
          style={{
            left: `${index * 150 - 200}px`,
            bottom: `${index * 80}px`,
            transform: `rotate(${Math.sin(index) * 3}deg)`,
            animationDelay: `${index * 0.2}s`
          }}
        />
      ))}
    </div>
  );
};