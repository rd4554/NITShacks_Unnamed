// src/components/GreenWheelMeter.jsx
import React from 'react';

function GreenWheelMeter({ progress }) {
  const strokeDasharray = 283; // Circumference of the circle
  const strokeDashoffset = strokeDasharray - (progress / 100) * strokeDasharray;

  return (
    <div className="flex flex-col items-center justify-center p-4 rounded-lg shadow-md w-48 h-48" style={{ backgroundColor: '#183717' }}>
      <div className="flex items-center justify-center w-full h-full relative">
        <svg className="w-32 h-32 transform rotate-180" viewBox="0 0 100 100">
          <circle
            cx="50"
            cy="50"
            r="45"
            strokeWidth="10"
            className="text-gray-300"
            fill="none"
            stroke="currentColor"
          />
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
        <span className="absolute text-lg font-semibold text-white">{progress}%</span>
      </div>
      <p className="text-sm font-medium text-gray-200 mt-2">Task List</p>
    </div>
  );
}

export default GreenWheelMeter;