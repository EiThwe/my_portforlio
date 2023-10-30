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
            How I approach to this web field
          </h3>
          <hr className="w-8 mb-5" />
          <p className="sm:text-base text-sm text-[#7C7C7C]">
            I'm constantly immersed in learning about web design, development,
            and digital marketing, keeping pace with the ever-changing online
            landscape. My dedication lies in crafting websites that are both
            user-friendly and visually engaging. By combining my technical
            skills with artistic ingenuity, I strive to enhance the digital
            world gradually. Staying updated with the latest trends and
            innovative approaches, I work diligently to ensure that websites are
            not only functional but also aesthetically pleasing. My goal is to
            contribute positively to the online experience, one step at a time,
            making the digital world more accessible and attractive for users.
          </p>
        </div>
      </section>
    </Waypoint>
  );
};

export default About;
