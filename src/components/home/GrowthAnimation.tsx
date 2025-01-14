import { useEffect, useRef } from 'react';
import './GrowthAnimation.css';

export const GrowthAnimation = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // Create data points
    const points = [
      { x: 20, y: 80, delay: 0.5 },
      { x: 40, y: 60, delay: 1 },
      { x: 60, y: 40, delay: 1.5 },
      { x: 80, y: 20, delay: 2 }
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

    // Add sparkles
    const sparkleCount = 10;
    for (let i = 0; i < sparkleCount; i++) {
      const sparkle = document.createElement('div');
      sparkle.className = 'sparkle';
      sparkle.style.left = `${Math.random() * 100}%`;
      sparkle.style.top = `${Math.random() * 100}%`;
      sparkle.style.animationDelay = `${Math.random() * 2}s`;
      containerRef.current?.appendChild(sparkle);
    }

    console.log('Growth Animation mounted and initialized');
  }, []);

  return (
    <div className="animation-wrapper">
      <div 
        ref={containerRef}
        className="growth-container"
        aria-hidden="true"
      >
        <div className="chart-line" />
        <div className="success-icon">🚀</div>
      </div>
    </div>
  );
};