import { useEffect, useRef } from 'react';

export const ClimbingAnimation = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    console.log("ClimbingAnimation mounted");
    // Add a class to verify the component is rendered
    if (containerRef.current) {
      containerRef.current.classList.add('animation-mounted');
    }
  }, []);

  return (
    <div 
      ref={containerRef}
      className="relative h-[300px] w-full max-w-[500px] mx-auto mb-8 overflow-visible"
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
          className="stair absolute h-12 bg-primary/20 rounded-md"
          style={{
            width: '120px',
            left: `${index * 80}px`,
            bottom: `${index * 50}px`,
          }}
        />
      ))}
    </div>
  );
};