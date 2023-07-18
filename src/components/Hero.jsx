import React from "react";
import { Icon } from "@iconify/react";
import { TypeAnimation } from "react-type-animation";
import { Waypoint } from "react-waypoint";

const Hero = ({ setActiveTab }) => {
  return (
    <Waypoint onEnter={() => setActiveTab("Home")}>
      <section
        id="home"
        className="w-full min-h-full flex py-10  items-start justify-center flex-col"
      >
        <div className="w-full  text-white ">
          <h6 className="uppercase text-[9px] font-bold tracking-[1.4px] mb-5">
            INTRODUCTION
          </h6>
          <h3 className="ml-2 text-[50px] tracking-tighter leading-[66.7px] mb-5 font-[300]">
            I'm a Creative Developer & Technology Expert{" "}
            <TypeAnimation
              sequence={[
                "One",
                1000,
                "Two", //
                1000,
              ]}
              wrapper="span"
              cursor={true}
              repeat={Infinity}
              style={{ display: "inline-block" }}
            />
          </h3>
          <hr className="w-8 mb-10" />
          <div className="flex items-center gap-3">
            <button
              className=" h-[50px] w-[200px] bg-white backdrop-blur-[50px] bg-opacity-10  z-1 rounded
        flex items-center justify-center gap-3 shadow-inner	
        shadow-[#6b6b6b] border border-gray-500 border-opacity-20"
            >
              <h6>Download CV</h6>
              <Icon icon="ps:download" color="white" width={20} />
            </button>

            <button
              className=" h-[50px] w-[200px] bg-white backdrop-blur-[50px] bg-opacity-10  z-1 rounded
        flex items-center justify-center shadow-inner	
        shadow-[#6b6b6b] border border-gray-500 border-opacity-20"
            >
              <h6>Hire Me</h6>
            </button>
          </div>
        </div>
      </section>
    </Waypoint>
  );
};

export default Hero;
