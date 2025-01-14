import React, { useState, useEffect } from 'react';

const StartupJourney = () => {
  const [currentStage, setCurrentStage] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const stages = [
    {
      title: "Ideation",
      description: "The spark of innovation",
      color: "text-yellow-500",
      icon: "💡"
    },
    {
      title: "Team Building",
      description: "Finding the right talent",
      color: "text-blue-500",
      icon: "👥"
    },
    {
      title: "Launch",
      description: "Taking off to market",
      color: "text-purple-500",
      icon: "🚀"
    },
    {
      title: "Growth",
      description: "Scaling the business",
      color: "text-green-500",
      icon: "📈"
    },
    {
      title: "Market Fit",
      description: "Reaching the target audience",
      color: "text-red-500",
      icon: "🎯"
    },
    {
      title: "Success",
      description: "Achieving milestones",
      color: "text-indigo-500",
      icon: "🏆"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentStage((prev) => (prev + 1) % stages.length);
      setIsAnimating(true);
      setTimeout(() => setIsAnimating(false), 500);
    }, 3000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="w-full max-w-4xl mx-auto p-8 bg-white rounded-xl shadow-2xl">
      {/* Journey Path */}
      <div className="relative mb-12">
        <div className="absolute top-1/2 left-0 w-full h-1 bg-gray-200 transform -translate-y-1/2" />
        <div 
          className="absolute top-1/2 left-0 h-1 bg-blue-500 transform -translate-y-1/2 transition-all duration-500" 
          style={{ width: `${(currentStage + 1) * (100/stages.length)}%` }}
        />
        <div className="relative flex justify-between">
          {stages.map((stage, index) => {
            const isActive = index <= currentStage;
            const isCurrent = index === currentStage;

            return (
              <div 
                key={index} 
                className={`relative flex flex-col items-center ${
                  isAnimating && isCurrent ? 'animate-bounce' : ''
                }`}
              >
                <div 
                  className={`w-12 h-12 rounded-full flex items-center justify-center ${
                    isActive ? stage.color : 'bg-gray-200'
                  } shadow-lg transition-all duration-500 z-10`}
                >
                  <span className="text-2xl">
                    {stage.icon}
                  </span>
                </div>
                <div className={`absolute -bottom-16 w-32 text-center transition-all duration-500 ${
                  isCurrent ? 'opacity-100 transform scale-110' : 'opacity-60 scale-90'
                }`}>
                  <h3 className={`font-bold ${isCurrent ? stage.color : 'text-gray-600'}`}>
                    {stage.title}
                  </h3>
                  <p className="text-sm text-gray-500 mt-1">
                    {stage.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Current Stage Animation */}
      <div className="mt-24 text-center">
        <div className={`transform transition-all duration-500 ${
          isAnimating ? 'scale-110' : 'scale-100'
        }`}>
          <div className="flex justify-center mb-4">
            <span className="text-5xl">
              {stages[currentStage].icon}
            </span>
          </div>
          <h2 className={`text-2xl font-bold mb-2 ${stages[currentStage].color}`}>
            {stages[currentStage].title}
          </h2>
          <p className="text-gray-600">
            {stages[currentStage].description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default StartupJourney;