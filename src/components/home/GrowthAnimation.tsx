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
    const existingElements = containerRef.current.querySelectorAll('.growth-point, .growth-text, .sparkle, .arrow, .dollar');
    existingElements.forEach(el => el.remove());

    // Add climbing line
    const line = document.createElement('div');
    line.className = 'climbing-line';
    containerRef.current.appendChild(line);

    // Create SVG container for arrows
    const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    svg.setAttribute('width', '100%');
    svg.setAttribute('height', '100%');
    svg.style.position = 'absolute';
    svg.style.top = '0';
    svg.style.left = '0';
    containerRef.current.appendChild(svg);

    // Add gradient definition
    const defs = document.createElementNS('http://www.w3.org/2000/svg', 'defs');
    const gradient = document.createElementNS('http://www.w3.org/2000/svg', 'linearGradient');
    gradient.setAttribute('id', 'arrow-gradient');
    gradient.setAttribute('gradientUnits', 'userSpaceOnUse');
    
    const stop1 = document.createElementNS('http://www.w3.org/2000/svg', 'stop');
    stop1.setAttribute('offset', '0%');
    stop1.setAttribute('stop-color', '#8B5CF6');
    
    const stop2 = document.createElementNS('http://www.w3.org/2000/svg', 'stop');
    stop2.setAttribute('offset', '100%');
    stop2.setAttribute('stop-color', '#D946EF');
    
    gradient.appendChild(stop1);
    gradient.appendChild(stop2);
    defs.appendChild(gradient);
    svg.appendChild(defs);

    // Add points, text, and arrows
    points.forEach((point, index) => {
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

      // Create arrow to next point (except for last point)
      if (index < points.length - 1) {
        const nextPoint = points[index + 1];
        const arrow = document.createElementNS('http://www.w3.org/2000/svg', 'path');
        
        // Calculate arrow path
        const startX = parseFloat(point.x) / 100 * containerRef.current.offsetWidth;
        const startY = parseFloat(point.y) / 100 * containerRef.current.offsetHeight;
        const endX = parseFloat(nextPoint.x) / 100 * containerRef.current.offsetWidth;
        const endY = parseFloat(nextPoint.y) / 100 * containerRef.current.offsetHeight;
        
        // Create curved path for arrow
        const path = `M ${startX} ${startY} 
                     Q ${(startX + endX) / 2} ${startY} 
                       ${(startX + endX) / 2} ${(startY + endY) / 2} 
                     T ${endX} ${endY}`;
        
        arrow.setAttribute('d', path);
        arrow.setAttribute('fill', 'none');
        arrow.setAttribute('stroke', 'url(#arrow-gradient)');
        arrow.setAttribute('stroke-width', '3');
        arrow.setAttribute('marker-end', 'url(#arrowhead)');
        arrow.classList.add('arrow');
        arrow.style.animation = `drawArrow 1.5s ease-out forwards ${point.delay + 0.5}s`;
        
        // Add arrowhead marker with gradient
        const marker = document.createElementNS('http://www.w3.org/2000/svg', 'marker');
        marker.setAttribute('id', 'arrowhead');
        marker.setAttribute('markerWidth', '10');
        marker.setAttribute('markerHeight', '7');
        marker.setAttribute('refX', '9');
        marker.setAttribute('refY', '3.5');
        marker.setAttribute('orient', 'auto');
        
        const polygon = document.createElementNS('http://www.w3.org/2000/svg', 'polygon');
        polygon.setAttribute('points', '0 0, 10 3.5, 0 7');
        polygon.setAttribute('fill', '#D946EF');
        
        marker.appendChild(polygon);
        defs.appendChild(marker);
        svg.appendChild(arrow);
      }
    });

    // Add falling dollars
    const createDollar = () => {
      if (!containerRef.current) return;
      
      const dollar = document.createElement('div');
      dollar.className = 'dollar';
      dollar.textContent = '$';
      dollar.style.left = `${Math.random() * 100}%`;
      dollar.style.animationDelay = `${Math.random() * 2}s`;
      containerRef.current.appendChild(dollar);

      // Remove dollar after animation
      dollar.addEventListener('animationend', () => {
        dollar.remove();
      });
    };

    // Create initial dollars
    for (let i = 0; i < 10; i++) {
      createDollar();
    }

    // Continuously create new dollars
    const dollarInterval = setInterval(() => {
      createDollar();
    }, 300);

    // Cleanup function
    return () => {
      clearInterval(dollarInterval);
      if (containerRef.current) {
        const elements = containerRef.current.querySelectorAll('.growth-point, .growth-text, .sparkle, .climbing-line, svg, .dollar');
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