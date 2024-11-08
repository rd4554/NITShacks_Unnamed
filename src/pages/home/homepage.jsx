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

function BarSection(){

    return(
        <>
            <BarGraph className="w-[60%] mx-auto mt-10 mb-[3rem]"/>
        </>
    )
}

function Home() {

  return (
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
                    className=" mt-14 pt-10"
                    style={{ background: 'linear-gradient(245.04deg, #62F35E 0.77%, #387436 99.23%)'}}>
                        <Heading head="Tasks"/>
                        <TaskBody />
                </div>
            </section>

            <section id="tasks" className=" overflow-hidden bg-[#2B7150]">
                <div
                    className=" mt-14 pt-10"
                    style={{ background: 'linear-gradient(245.04deg, #62F35E 0.77%, #387436 99.23%)'}}>
                        <Heading head="Outdoor Challenges"/>
                        <TaskBody />
                </div>
            </section>

            <section id="outdoor" className=" overflow-hidden bg-[#2B7150]">
                <div className="overflow-hidden pt-10"
                    style={{ background: 'linear-gradient(245.04deg, #62F35E 0.77%, #387436 99.23%)'}}>
                        <Heading head="Progress Bar" />
                        <BarSection /> 
                </div>            
            </section>
            
        </div>
    </>
  )
    

}

export default Home;