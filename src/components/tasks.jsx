import React from 'react';

function VerticalBoxes({className}) {
  return (
    <div className={`flex items-center justify-center h-screen ${className}`}>
      {/* Main Container */}
      <div
        className="w-60 h-[400px] flex flex-col items-center justify-around rounded-md p-4"
        style={{ backgroundColor: 'rgba(45, 109, 43, 1)' }}
      >
        {/* Smaller Boxes */}
        <div
  className="w-40 h-32 rounded-md mb-6 mt-4 flex items-center justify-center"
  style={{ backgroundColor: 'rgba(80, 218, 76, 1)'  }}>Environment </div>

        <div className="w-40 h-32 rounded-md mb-6 flex items-center justify-center" style={{ backgroundColor: 'rgba(80, 218, 76, 1)' }}>Outdoor games</div>
        <div className="w-40 h-32 rounded-md mb-6 flex items-center justify-center" style={{ backgroundColor: 'rgba(80, 218, 76, 1)' }}>Books</div>
        {/* <div className="w-20 h-32 rounded-md mb-6" style={{ backgroundColor: 'rgba(80, 218, 76, 1)' }}></div> */}
        <div className="w-40 h-32 rounded-md mb-6 flex items-center justify-center" style={{ backgroundColor: 'rgba(90, 128, 88, 1)'}}>Hobbies</div>
        <div className="w-40 h-32 rounded-md mb-5 flex items-center justify-center" style={{ backgroundColor: 'rgba(90, 128, 88, 1)'}}>General knowledge</div>
      </div>
    </div>
  );
}

export default VerticalBoxes;
