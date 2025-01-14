import { useEffect, useRef } from 'react';
import './GrowthAnimation.css';

export const GrowthAnimation = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // Create data points with more dramatic positioning
    const points = [
      { x: 15, y: 85, delay: 0.8 },
      { x: 35, y: 65, delay: 1.4 },
      { x: 55, y: 45, delay: 2.0 },
      { x: 75, y: 25, delay: 2.6 },
      { x: 85, y: 15, delay: 3.2 }
    ];

    // Clear existing points
    const existingPoints = containerRef.current.querySelectorAll('.data-point');
    existingPoints.forEach(point => point.remove());

    // Add data points
    points.forEach(point => {
      const dataPoint = document.createElement('div');
      dataPoint.className = 'data-point';
      dataPoint.style.left = `${point.x}%`;
      dataPoint.style.bottom = `${point.y}%`;
      dataPoint.style.animationDelay = `${point.delay}s`;
      containerRef.current?.appendChild(dataPoint);
    });

    // Add sparkles for enhanced effect
    const sparkleCount = 15;
    for (let i = 0; i < sparkleCount; i++) {
      const sparkle = document.createElement('div');
      sparkle.className = 'sparkle';
      sparkle.style.left = `${Math.random() * 100}%`;
      sparkle.style.top = `${Math.random() * 100}%`;
      sparkle.style.animationDelay = `${Math.random() * 3}s`;
      containerRef.current?.appendChild(sparkle);
    }

    // Cleanup function
    return () => {
      if (containerRef.current) {
        const points = containerRef.current.querySelectorAll('.data-point, .sparkle');
        points.forEach(point => point.remove());
      }
    };
  }, []);

  return (
    <div className="animation-wrapper">
      <div 
        ref={containerRef}
        className="growth-container"
        aria-hidden="true"
      >
        <div className="chart-line" />
        <div className="success-icon">⭐</div>
      </div>
    </div>
  );
};