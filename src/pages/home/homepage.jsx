import React from 'react';
import GreenWheelMeter from '../../components/greenwheel';
import WeeklyScore from '../../components/weeklyscore';
import LoadingBar from '../../components/progressbar';
import Taskbox from '../../components/taskbox';
import VerticalBoxes from '../../components/tasks';
import GreenWheelLogo from '../../components/greenwheellogo';

// Importing the BarGraph component
import BarGraph from '../../components/bargraph';


function TaskBody(){

    return(
        <>
            <div className="taskbody flex justify-center gap-10 mt-10">
                <VerticalBoxes className="mt-[-8rem]"/>
                <Taskbox className="mt-[1rem]"/>
            </div>
        </>
    )
}

function Heading({head}){

    return(
        <>
            <div className="headcontainer flex justify-between items-center">
                <GreenWheelLogo className="ml-[18rem]"/>
                <h1 className='headingmain text-5xl mr-[20rem] font-bold' style={{ fontFamily: 'Inconsolata, monospace' }}>{head}</h1>
            </div>
        </>
    )
}

function Card(){

    return(
        <>
            <div className="container mt-10">
                <GreenWheelMeter />
            </div>
        </>
    )
}

function Cardrow() {

    return(
        <>
            <div className="cardrow flex justify-between ml-[4rem] pb-10">
                <Card />
                <Card />
                <Card />
            </div>
        </>
    )
}

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
    <>
      <div className="overflow-hidden ">

            <section id="home" className="overflow-hidden bg-[#2B7150]">
                <div
                    className="w-[60%]  ml-[17rem] mt-10 rounded-3xl"
                    style={{ background: 'linear-gradient(245.04deg, #62F35E 0.77%, #387436 99.23%)'}}>
                    <div className="textbox  text-[100px] text-white ml-16" style={{ fontFamily: 'Inconsolata, monospace' }}>The</div>
                    <div className="textbox  text-[100px] text-white ml-16 " style={{ fontFamily: 'Inconsolata, monospace' }}>Ben-10 meter</div>
                    <p className=' text-white ml-[4.5rem] text-2xl' style={{ fontFamily: 'Inconsolata, monospace' }}>Weekly Progress</p>
                    <LoadingBar />
                    <Cardrow />
                </div>
            </section>
            
            
            <section id="tasks" className=" overflow-hidden bg-[#2B7150]">
                <div
                    className=" mt-14 "
                    style={{ background: 'linear-gradient(245.04deg, #62F35E 0.77%, #387436 99.23%)'}}>
                        <Heading head="Tasks"/>
                        <TaskBody />
                    </div>
            </section>
            
            
            <section id="outdoor" className=" overflow-hidden bg-[#2B7150]">
                <div className=" "
                    style={{ background: 'linear-gradient(245.04deg, #62F35E 0.77%, #387436 99.23%)'}}>
                         <Heading head="Outdoor Challenge"/>
                         <TaskBody />
                    </div>            
            </section>

        </div>
    </>
  )
    

}

export default Home;