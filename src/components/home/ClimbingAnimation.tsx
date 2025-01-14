import { useEffect, useRef } from 'react';

export const ClimbingAnimation = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    console.log("ClimbingAnimation mounted");
    if (containerRef.current) {
      containerRef.current.classList.add('animation-mounted');
    }
  }, []);

  return (
    <div 
      ref={containerRef}
      className="relative h-[400px] w-full max-w-[600px] mx-auto mb-12 overflow-visible bg-gradient-to-b from-transparent to-primary/5 rounded-lg"
      aria-hidden="true"
    >
      <div className="climbing-boy">
        <div className="head"></div>
        <div className="body"></div>
        <div className="legs"></div>
      </div>
      {[...Array(5)].map((_, index) => (
        <div
          key={index}
          className="stair absolute h-16 rounded-md backdrop-blur-sm"
          style={{
            width: '160px',
            left: `${index * 100 - 100}px`, // Adjusted positioning
            bottom: `${index * 60}px`,
            transform: `rotate(${Math.sin(index) * 2}deg)`,
            animationDelay: `${index * 0.2}s`
          }}
        />
      ))}
    </div>
  );
};