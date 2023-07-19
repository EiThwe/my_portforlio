import React from "react";
import { Waypoint } from "react-waypoint";

const About = ({ setActiveTab }) => {
  return (
    <Waypoint onEnter={() => setActiveTab("About")}>
      <section
        id="about"
        className="w-full md:min-h-full md:py-10 py-20 flex  items-center"
      >
        <div className="w-full  text-white ">
          <h6 className="uppercase text-[9px] font-bold tracking-[1.4px] mb-5">
            About
          </h6>
          <h3 className="ml-2 sm:text-[37px] text-[26px] tracking-tighter mb-5 font-[400]">
            My approach to building the tech brands of tomorrow
          </h3>
          <hr className="w-8 mb-5" />
          <p className="sm:text-base text-sm text-[#7C7C7C]">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry’s standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting.
          </p>
        </div>
      </section>
    </Waypoint>
  );
};

export default About;
