// src/pages/Home.jsx
import React from 'react';
import GreenWheelMeter from '../../components/greenwheel';
import WeeklyScore from '../../components/weeklyscore';
import LoadingBar from '../../components/progressbar';
import Taskbox from '../../components/taskbox';
import VerticalBoxes from '../../components/tasks';
import GreenWheelLogo from '../../components/greenwheellogo';
function Home() {
  return (
    <>
      <div className="overflow-hidden ">

            <section id="home" className="h-[100vh] w-[100vw] overflow-hidden bg-[#2B7150]">
            <div
  className="h-[85vh] w-[90vw] ml-16 mt-14 rounded-3xl"
  style={{ background: 'linear-gradient(245.04deg, #62F35E 0.77%, #387436 99.23%)'}}></div>

            
            </section>
            <section id="tasks" className="h-[100vh] w-[100vw] overflow-hidden bg-[#2B7150]">
            <div
  className="h-[85vh] w-[90vw] ml-16 mt-14 rounded-3xl"
  style={{ background: 'linear-gradient(245.04deg, #62F35E 0.77%, #387436 99.23%)'}}></div>

            
            </section>
            <section id="outdoor" className="h-[100vh] w-[100vw] overflow-hidden bg-[#2B7150]">
            <div
  className="h-[85vh] w-[90vw] ml-16 mt-14 rounded-3xl"
  style={{ background: 'linear-gradient(245.04deg, #62F35E 0.77%, #387436 99.23%)'}}></div>

            
            </section>

        </div>
    </>
  )
    

}

export default Home;