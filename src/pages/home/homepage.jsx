import React from 'react';
import GreenWheelMeter from '../../components/greenwheel';
import WeeklyScore from '../../components/weeklyscore';
import LoadingBar from '../../components/progressbar';
import Taskbox from '../../components/taskbox';
import VerticalBoxes from '../../components/tasks';
import GreenWheelLogo from '../../components/greenwheellogo';

// Importing the BarGraph component
import BarGraph from '../../components/bargraph';

function Home() {
  const data = [
    { label: 'Jan', value: 100 },
    { label: 'Feb', value: 20 },
    { label: 'Mar', value: 50 },
    { label: 'Apr', value: 80 },
    { label: 'May', value: 60 },
    { label: 'Jun', value: 90 },
  ];

  return (
    <div className="text-gray-800">
      {/* Center the components with some space */}
      <div className="flex justify-center items-center flex-col space-y-8 py-20">
        {/* Green Wheel Meter with 75% progress */}
        <GreenWheelMeter /> 
        <WeeklyScore />
        <LoadingBar />
        <Taskbox />
        <VerticalBoxes />
        <GreenWheelLogo />

        {/* Bar Graph Component */}
        <div className="w-full max-w-lg mt-8">
          <BarGraph data={data} />
        </div>

        {/* Weekly Score showing 4/16 */}
      </div>
    </div>
  );
}

export default Home;