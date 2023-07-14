import React from "react";

import TimelineEdu from "./TimelineEdu";


const Education = () => {
  return (
    <>
      <div className=" my-20">
        {/*  text  */}
        <div className="text p-5">
          <p className="pb-5">
            <small className="text-white  text-xs font-medium pb-5 uppercase ">
              Education
            </small>
          </p>
          <h3 className="text-2xl pb-5 font-light text-white">
           My Educational Pathway
          </h3>
          <div className="w-10 h-[1px] bg-white"></div>
        </div>
        {/* timeline  */}
        <div className="">
     <TimelineEdu/>
        </div>
      </div>
    </>
  );
};

export default Education;
