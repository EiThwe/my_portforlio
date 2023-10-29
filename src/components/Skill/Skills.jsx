import React from "react";
import Skillbar from "./Skillbar";
import { Waypoint } from "react-waypoint";

const Skills = ({ setActiveTab }) => {
  return (
    <Waypoint onEnter={() => setActiveTab("skills")}>
      {/* (visible ? "animate" : "") */}
      <div id="skills" className=" py-3 sm:py-20">
        {/*  text  */}
        <div className="text py-5">
          <p className="pb-5 ">
            <small className="text-white  text-xs font-medium pb-5 uppercase ">
              Skills
            </small>
          </p>
          <h3 className="sm:text-[37px] ml-2 text-[26px] tracking-tighter pb-5 text-white">
            Skills I have collected over one year and days
          </h3>
          <div className="w-10 h-[1px] bg-white"></div>
        </div>
        {/* progress bar  */}
        <div className="py-5">
          <Skillbar title="html" percentage="95%" item="html" />
          <Skillbar title="css" percentage="85%" item="css" />
          <Skillbar title="javascript" percentage="75%" item="javascript" />
          <Skillbar title="reactjs" percentage="80%" item="react" />
          <Skillbar title="php" percentage="60%" item="php" />
          <Skillbar title="laravel" percentage="80%" item="laravel" />
        </div>
      </div>
    </Waypoint>
  );
};

export default Skills;
