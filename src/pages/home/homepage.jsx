// src/pages/Home.jsx
import React from 'react';
import GreenWheelMeter from '../../components/greenwheel';
import WeeklyScore from '../../components/weeklyscore';
import VerticalBoxes from '../../components/tasks';
import LoadingBar from '../../components/progressbar';
import Taskbox from '../../components/taskbox';
function Home() {
  return (
    <div className="text-gray-800">
      {/* Center the components with some space */}
      <div className="flex justify-center items-center flex-col space-y-8 py-20">
        {/* Green Wheel Meter with 75% progress */}
        <GreenWheelMeter/> 
        <WeeklyScore/>
        <VerticalBoxes/>
        <LoadingBar/>
        <Taskbox/>
        {/* Weekly Score showing 4/16 */}
      </div>
    </div>
  );
}

export default Home;