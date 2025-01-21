const CompassAnimation = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 400" className="w-48 h-48 mx-auto mt-4">
      {/* Base circle */}
      <circle cx="200" cy="200" r="180" fill="none" stroke="#D9FC59" strokeWidth="2">
        <animate attributeName="stroke-opacity" values="0.6;1;0.6" dur="3s" repeatCount="indefinite"/>
      </circle>

      {/* Large Compass */}
      <g transform="translate(200,200)">
        {/* Outer compass ring */}
        <circle cx="0" cy="0" r="170" fill="none" stroke="#5F2DD3" strokeWidth="2" opacity="0.2"/>
        
        {/* Compass cardinal lines */}
        <line x1="0" y1="-170" x2="0" y2="170" stroke="#5F2DD3" strokeWidth="1" opacity="0.3"/>
        <line x1="-170" y1="0" x2="170" y2="0" stroke="#5F2DD3" strokeWidth="1" opacity="0.3"/>
        
        {/* Diagonal lines */}
        <line x1="-120" y1="-120" x2="120" y2="120" stroke="#5F2DD3" strokeWidth="1" opacity="0.2"/>
        <line x1="-120" y1="120" x2="120" y2="-120" stroke="#5F2DD3" strokeWidth="1" opacity="0.2"/>
        
        {/* Compass direction markers */}
        <text x="0" y="-150" fill="#5F2DD3" textAnchor="middle" fontSize="16">N</text>
        <text x="150" y="0" fill="#5F2DD3" textAnchor="start" fontSize="16">E</text>
        <text x="0" y="150" fill="#5F2DD3" textAnchor="middle" fontSize="16">S</text>
        <text x="-150" y="0" fill="#5F2DD3" textAnchor="end" fontSize="16">W</text>

        {/* Rotating compass needle */}
        <g>
          <animateTransform
            attributeName="transform"
            type="rotate"
            from="0 0 0"
            to="360 0 0"
            dur="30s"
            repeatCount="indefinite"/>
          {/* North pointer */}
          <path d="M0,-80 L15,0 L0,10 L-15,0 Z" fill="#5F2DD3" opacity="0.8"/>
          {/* South pointer */}
          <path d="M0,80 L-15,0 L0,-10 L15,0 Z" fill="#5F2DD3" opacity="0.4"/>
        </g>

        {/* Decorative circles */}
        <circle cx="0" cy="0" r="130" fill="none" stroke="#5F2DD3" strokeWidth="1" opacity="0.1"/>
        <circle cx="0" cy="0" r="100" fill="none" stroke="#5F2DD3" strokeWidth="1" opacity="0.1"/>
      </g>

      {/* Cute Avatar in Center */}
      <g transform="translate(200,200)">
        {/* Head */}
        <circle cx="0" cy="0" r="35" fill="#5F2DD3" opacity="0.9"/>
        
        {/* Face */}
        <circle cx="-10" cy="-5" r="6" fill="white"/> {/* Left eye */}
        <circle cx="10" cy="-5" r="6" fill="white"/> {/* Right eye */}
        <circle cx="-10" cy="-5" r="3" fill="#000"/> {/* Left pupil */}
        <circle cx="10" cy="-5" r="3" fill="#000"/> {/* Right pupil */}
        <path d="M-15,10 Q0,20 15,10" stroke="white" strokeWidth="3" fill="none"/> {/* Smile */}
        
        {/* Cheeks */}
        <circle cx="-18" cy="5" r="5" fill="#FF9999" opacity="0.5"/>
        <circle cx="18" cy="5" r="5" fill="#FF9999" opacity="0.5"/>

        {/* Flying Money Animation */}
        <g>
          <animateTransform
            attributeName="transform"
            type="rotate"
            from="0 0 0"
            to="360 0 0"
            dur="10s"
            repeatCount="indefinite"/>
          
          {/* Dollar Bills */}
          <g transform="translate(-25,-25)">
            <rect x="-10" y="-7" width="20" height="14" fill="#85bb65" rx="2"/>
            <text x="0" y="4" fontSize="12" fill="white" textAnchor="middle">$</text>
            <animateTransform
              attributeName="transform"
              type="translate"
              values="-25,-25; -28,-28; -25,-25"
              dur="2s"
              repeatCount="indefinite"/>
          </g>
          
          <g transform="translate(25,-25)">
            <rect x="-10" y="-7" width="20" height="14" fill="#85bb65" rx="2"/>
            <text x="0" y="4" fontSize="12" fill="white" textAnchor="middle">$</text>
            <animateTransform
              attributeName="transform"
              type="translate"
              values="25,-25; 28,-28; 25,-25"
              dur="2s"
              repeatCount="indefinite"/>
          </g>
          
          <g transform="translate(0,-30)">
            <rect x="-10" y="-7" width="20" height="14" fill="#85bb65" rx="2"/>
            <text x="0" y="4" fontSize="12" fill="white" textAnchor="middle">$</text>
            <animateTransform
              attributeName="transform"
              type="translate"
              values="0,-30; 0,-33; 0,-30"
              dur="2s"
              repeatCount="indefinite"/>
          </g>
        </g>
      </g>

      {/* Full circle text path */}
      <path id="textCircle" fill="none"
        d="M200,40 A160,160 0 0,1 200,360 A160,160 0 0,1 200,40"/>
      
      {/* Rotating text */}
      <text fill="#5F2DD3" fontSize="20" fontWeight="bold" letterSpacing="8">
        <textPath href="#textCircle" startOffset="0%">
          STARTUP • HUB • STARTUP • HUB • STARTUP • HUB • 
          <animate attributeName="startOffset" 
            values="0%;-100%" 
            dur="30s" 
            repeatCount="indefinite"/>
        </textPath>
      </text>

      {/* Degree markings */}
      <g transform="translate(200,200)">
        {Array.from({ length: 24 }).map((_, i) => (
          <g key={i} transform={`rotate(${i * 15})`}>
            <line x1="0" y1="-160" x2="0" y2="-170" stroke="#5F2DD3" strokeWidth="1" opacity="0.3"/>
          </g>
        ))}
      </g>
    </svg>
  );
};

export default CompassAnimation;