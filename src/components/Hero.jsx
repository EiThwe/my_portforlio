import React from "react";
import { Icon } from "@iconify/react";
import { TypeAnimation } from "react-type-animation";
import { Waypoint } from "react-waypoint";
import ScrollIndicator from "./ScrollIndicator";
import "./Hero.css";

const Hero = ({ setActiveTab }) => {
  return (
    <Waypoint onEnter={() => setActiveTab("Home")}>
      <section
        id="home"
        className="w-full md:min-h-full  flex md:py-10 py-20  items-start justify-center flex-col "
      >
        <div class="cube hidden md:flex  absolute right-20 top-5">
          <div class="topD"></div>
          <div>
            <span style={{ "--i": "0" }}></span>
            <span style={{ "--i": "1" }}></span>
            <span style={{ "--i": "2" }}></span>
            <span style={{ "--i": "3" }}></span>
          </div>

          <div class="cube2">
            <div>
              <span style={{ "--i": "0" }}></span>
              <span style={{ "--i": "1" }}></span>
              <span style={{ "--i": "2" }}></span>
              <span style={{ "--i": "3" }}></span>
            </div>

            <div class="cube3">
              <div class="top3"></div>
              <div>
                <span style={{ "--i": "0" }}></span>
                <span style={{ "--i": "1" }}></span>
                <span style={{ "--i": "2" }}></span>
                <span style={{ "--i": "3" }}></span>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full  text-white ">
          <div className="h-[300px] sm:h-[240px] lg:h-[250px] xl:h-[200px]">
            <h6 className="uppercase text-[9px] font-bold tracking-[1.4px] mb-5">
              INTRODUCTION
            </h6>
            <h3 className="ml-2 text-[30px] tracking-tighter leading-[66.7px] mb-5 font-[400]">
              I'm{" "}
              <span
                style={{
                  fontWeight: 400,
                  fontFamily: "VT323",
                  letterSpacing: 1,
                  fontSize: 55,
                  color: "#04d9ff",
                }}
              >
                Denny Kate
              </span>
              ,{" "}
              <TypeAnimation
                sequence={[
                  " Jr. React Developer",
                  3000,
                  " Jr. Frontend Developer",
                  3000,
                ]}
                wrapper="div"
                cursor={true}
                repeat={Infinity}
                style={{
                  display: "block",
                  color: "#c90076",
                  fontWeight: 400,
                  fontFamily: "VT323",
                  letterSpacing: 1,
                  fontSize: 55,
                }}
              />
            </h3>
          </div>
          <hr className="w-8 mb-10" />
         {/* <div className="flex items-center gap-3 ml-10"> <button class="button-3d">Download CV</button><button class="button-4d">Hire me</button></div> */}

          {/* <div className="flex items-center gap-3">
            <button
              className=" h-[50px] w-[200px] bg-[#2d2d2d] text-white backdrop-blur-[70px] bg-opacity-40  z-1 rounded-xl
        flex items-center justify-center gap-3 shadow-inner	
        shadow-[#6b6b6b] border border-gray-500 border-opacity-20 z-10"
            >
              <h6>Download CV</h6>
            </button>

            <button
              className=" h-[50px] w-[200px] bg-primary text-primary backdrop-blur-[50px] bg-opacity-10  z-1 rounded-xl
        flex items-center justify-center gap-3 shadow-inner	
        shadow-[#6b6b6b] border border-gray-500 border-opacity-20 z-10"
            >
              <h6>Hire Me</h6>
            </button>
          </div> */}
        </div>
      </section>
    </Waypoint>
  );
};

export default Hero;
