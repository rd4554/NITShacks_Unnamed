// src/components/GreenWheelLogo.jsx
import React from 'react';

function GreenWheelLogo({className}) {
  const progress = 70;
  const strokeDasharray = 283; // Circumference of the circle
  const strokeDashoffset = strokeDasharray - (progress / 100) * strokeDasharray;

  return (
    <div className= {`flex items-center justify-center w-32 h-32 bg-transparent ${className}`} >
      <svg className="w-24 h-24 transform -rotate-90" viewBox="0 0 100 100">
        {/* Background circle */}
        <circle
          cx="50"
          cy="50"
          r="45"
          strokeWidth="10"
          className="text-gray-300"
          fill="none"
          stroke="currentColor"
        />
        {/* Green progress circle */}
        <circle
          cx="50"
          cy="50"
          r="45"
          strokeWidth="10"
          fill="none"
          stroke="green"
          strokeDasharray={strokeDasharray}
          strokeDashoffset={strokeDashoffset}
          strokeLinecap="round"
          className="transition-all duration-300"
        />
      </svg>
      {/* 70% Text in Center */}
    </div>
  );
}

export default GreenWheelLogo;