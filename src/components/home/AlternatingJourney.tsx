import React, { useState, useEffect } from 'react';

const AlternatingJourney = () => {
  const [currentStage, setCurrentStage] = useState(0);

  const stages = [
    {
      icon: "💡",
      title: "Ideation",
      description: "Transform your innovative ideas into concrete plans that will shape the future of your business",
      color: "text-yellow-500",
      bgColor: "bg-yellow-50",
      position: "left"
    },
    {
      icon: "👥",
      title: "Team Building",
      description: "Assemble your dream team of talented individuals who share your vision and passion",
      color: "text-blue-500",
      bgColor: "bg-blue-50",
      position: "right"
    },
    {
      icon: "🚀",
      title: "Launch",
      description: "Take your product to market with a strategic and impactful launch that captures attention",
      color: "text-purple-500",
      bgColor: "bg-purple-50",
      position: "left"
    },
    {
      icon: "📈",
      title: "Growth",
      description: "Scale your operations and expand your reach to new markets and audiences",
      color: "text-green-500",
      bgColor: "bg-green-50",
      position: "right"
    },
    {
      icon: "🎯",
      title: "Market Fit",
      description: "Refine your product based on market feedback and achieve perfect product-market fit",
      color: "text-red-500",
      bgColor: "bg-red-50",
      position: "left"
    },
    {
      icon: "🏆",
      title: "Success",
      description: "Celebrate achievements and set new goals for continued growth and innovation",
      color: "text-indigo-500",
      bgColor: "bg-indigo-50",
      position: "right"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentStage((prev) => (prev + 1) % stages.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="w-full max-w-6xl mx-auto p-4 sm:p-8">
      {/* Desktop Timeline */}
      <div className="hidden sm:block relative">
        {/* Central Line */}
        <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gray-200 transform -translate-x-1/2" />
        <div 
          className="absolute left-1/2 top-0 w-1 bg-blue-500 transform -translate-x-1/2 transition-all duration-500"
          style={{ height: `${((currentStage + 1) / stages.length) * 100}%` }}
        />

        {/* Timeline Items */}
        <div className="space-y-24">
          {stages.map((stage, index) => (
            <div key={index} className="relative">
              {/* Content Container */}
              <div className={`flex items-center ${
                stage.position === 'left' ? 'justify-start' : 'justify-end'
              }`}>
                {/* Content Box */}
                <div className={`w-5/12 ${stage.position === 'right' && 'order-2'}`}>
                  <div className={`transform transition-all duration-500
                    ${index === currentStage ? 'opacity-100 scale-105' : 'opacity-60 scale-95'}
                    ${stage.bgColor} rounded-xl p-6 shadow-lg border border-gray-100`}
                  >
                    <div className="flex items-center space-x-4 mb-4">
                      <div className={`w-12 h-12 rounded-full flex items-center justify-center ${stage.color} 
                        shadow-lg transition-all duration-500`}>
                        <span className="text-2xl">{stage.icon}</span>
                      </div>
                      <h3 className={`text-xl font-bold ${stage.color}`}>
                        {stage.title}
                      </h3>
                    </div>
                    <p className="text-gray-600">
                      {stage.description}
                    </p>
                  </div>
                </div>

                {/* Center Point */}
                <div className={`absolute left-1/2 w-8 h-8 rounded-full border-4 
                  transform -translate-x-1/2 transition-all duration-500 
                  ${index <= currentStage ? 'bg-blue-500 border-blue-300' : 'bg-gray-200 border-gray-100'}
                  ${index === currentStage ? 'scale-125' : 'scale-100'}`}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Mobile Timeline */}
      <div className="sm:hidden space-y-8">
        {stages.map((stage, index) => (
          <div 
            key={index}
            className={`transition-all duration-500 ${stage.bgColor} rounded-xl p-6 
              ${index === currentStage ? 'opacity-100 scale-105' : 'opacity-60 scale-95'}`}
          >
            <div className="flex items-center space-x-4 mb-4">
              <div className={`w-12 h-12 rounded-full flex items-center justify-center ${stage.color} 
                shadow-lg`}>
                <span className="text-2xl">{stage.icon}</span>
              </div>
              <h3 className={`text-xl font-bold ${stage.color}`}>
                {stage.title}
              </h3>
            </div>
            <p className="text-gray-600">
              {stage.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AlternatingJourney;