// src/components/LoadingBar.jsx
import React from 'react';

function LoadingBar({ progress }) {
  return (
    <div className="w-full bg-gray-200 rounded-full h-4 mt-4">
      <div
        className="bg-gray-400 h-4 rounded-full transition-all duration-300"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
}

export default LoadingBar;