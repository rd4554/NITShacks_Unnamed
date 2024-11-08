// src/components/WeeklyScore.jsx
import React from 'react';

function WeeklyScore() {
  const tasksCompleted = 4; // Change this dynamically as needed
  const totalTasks = 16;    // Change this dynamically as needed

  return (
    <div className="flex flex-col items-center justify-center p-4 rounded-lg shadow-md w-48 h-48" style={{ backgroundColor: '#183717' }}>
      {/* Centered "Weekly Task" text */}
      <span className="text-lg font-semibold text-white">Weekly Task</span>
      
      {/* Task completion ratio */}
      <span className="text-sm font-medium text-white mt-2">{tasksCompleted}/{totalTasks}</span>
    </div>
  );
}

export default WeeklyScore;