import React from "react";

const ScrollIndicator = () => {
  return (
    <div className="flex items-center absolute bottom-[300px] sm:right-[0px] right-[-20px] gap-2 rotate-90">
      <div className="w-[50px] h-[2px] bg-white bg-opacity-20 overflow-hidden">
        <div className="w-full h-full bg-white scrollIndicator" />
      </div>
      <p className="text-white text-[10px] font-[700] uppercase tracking-wider">Scroll</p>
    </div>
  );
};

export default ScrollIndicator;
