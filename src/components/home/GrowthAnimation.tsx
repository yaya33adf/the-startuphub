import { useEffect, useRef } from 'react';
import './GrowthAnimation.css';

export const GrowthAnimation = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // Create climbing line animation points
    const points = [
      { x: '20%', y: '80%', delay: 0.5, text: 'Start' },
      { x: '40%', y: '60%', delay: 1.0, text: 'Growth' },
      { x: '60%', y: '40%', delay: 1.5, text: 'Scale' },
      { x: '80%', y: '20%', delay: 2.0, text: 'Success' }
    ];

    // Clear existing elements
    const existingElements = containerRef.current.querySelectorAll('.growth-point, .growth-text, .sparkle');
    existingElements.forEach(el => el.remove());

    // Add climbing line
    const line = document.createElement('div');
    line.className = 'climbing-line';
    containerRef.current.appendChild(line);

    // Add points and text
    points.forEach(point => {
      // Create point
      const pointEl = document.createElement('div');
      pointEl.className = 'growth-point';
      pointEl.style.left = point.x;
      pointEl.style.top = point.y;
      pointEl.style.animation = `fadeInUp 0.5s ease-out forwards ${point.delay}s`;
      containerRef.current?.appendChild(pointEl);

      // Create text
      const textEl = document.createElement('div');
      textEl.className = 'growth-text';
      textEl.textContent = point.text;
      textEl.style.left = point.x;
      textEl.style.top = `calc(${point.y} - 25px)`;
      textEl.style.animation = `fadeInUp 0.5s ease-out forwards ${point.delay + 0.2}s`;
      containerRef.current?.appendChild(textEl);
    });

    // Add sparkles
    for (let i = 0; i < 20; i++) {
      const sparkle = document.createElement('div');
      sparkle.className = 'sparkle';
      sparkle.style.left = `${Math.random() * 100}%`;
      sparkle.style.top = `${Math.random() * 100}%`;
      sparkle.style.animation = `sparkle 2s infinite ${Math.random() * 2}s`;
      containerRef.current?.appendChild(sparkle);
    }

    // Cleanup function
    return () => {
      if (containerRef.current) {
        const elements = containerRef.current.querySelectorAll('.growth-point, .growth-text, .sparkle, .climbing-line');
        elements.forEach(el => el.remove());
      }
    };
  }, []);

  return (
    <div className="animation-wrapper">
      <div 
        ref={containerRef}
        className="growth-container"
        aria-hidden="true"
      />
    </div>
  );
};