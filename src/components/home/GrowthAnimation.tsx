import { useEffect, useRef } from 'react';
import './GrowthAnimation.css';

export const GrowthAnimation = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // Create data points
    const points = [
      { bottom: '20%', left: '20%', delay: '1s' },
      { bottom: '40%', left: '40%', delay: '1.5s' },
      { bottom: '60%', left: '60%', delay: '2s' },
      { bottom: '80%', left: '80%', delay: '2.5s' }
    ];

    // Create sparkles
    const sparklePositions = Array.from({ length: 10 }, () => ({
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      animationDelay: `${Math.random() * 2}s`
    }));

    // Add data points
    points.forEach(point => {
      const dataPoint = document.createElement('div');
      dataPoint.className = 'data-point';
      dataPoint.style.bottom = point.bottom;
      dataPoint.style.left = point.left;
      dataPoint.style.animation = `appearPoint 0.5s ease-out forwards ${point.delay}`;
      containerRef.current?.appendChild(dataPoint);
    });

    // Add sparkles
    sparklePositions.forEach(sparkle => {
      const sparkleElement = document.createElement('div');
      sparkleElement.className = 'sparkle';
      sparkleElement.style.top = sparkle.top;
      sparkleElement.style.left = sparkle.left;
      sparkleElement.style.animationDelay = sparkle.animationDelay;
      containerRef.current?.appendChild(sparkleElement);
    });

    console.log('Growth Animation mounted');
  }, []);

  return (
    <div 
      ref={containerRef}
      className="growth-container"
      aria-hidden="true"
    >
      <div className="chart-line"></div>
      <div className="success-icon">🚀</div>
    </div>
  );
};