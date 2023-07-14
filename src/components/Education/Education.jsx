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
        {/* <div className="pt-7">
        <div className="flex flex-col gap-5">
        <div
          className="w-[95%] sm:h-[90%] h-[95%] bg-[#ebf6f7] backdrop-blur-[3px] bg-opacity-5 rounded-xl shadow-inner	
          shadow-[#6b6b6b] border border-gray-500 border-opacity-20 flex justify-center items-center overflow-hidden
           relative py-[10px] "
        >
         
          <div className="">
            <img src={image} alt="" />
          </div>
         
          </div>
          <div
          className="w-[95%] sm:h-[90%] h-[95%] bg-[#ebf6f7] backdrop-blur-[3px] bg-opacity-5 rounded-xl shadow-inner	
          shadow-[#6b6b6b] border border-gray-500 border-opacity-20 flex justify-center items-center overflow-hidden
           relative py-[10px] "
        >
         
          <div className="">
            <img src={image} alt="" />
          </div>
         
          </div>
          <div
          className="w-[95%] sm:h-[90%] h-[95%] bg-[#ebf6f7] backdrop-blur-[3px] bg-opacity-5 rounded-xl shadow-inner	
          shadow-[#6b6b6b] border border-gray-500 border-opacity-20 flex justify-center items-center overflow-hidden
           relative py-[10px] "
        >
         
          <div className="">
            <img src={image} alt="" />
          </div>
         
          </div>
        </div>
        </div> */}
      </div>
    </>
  );
};

export default Education;
