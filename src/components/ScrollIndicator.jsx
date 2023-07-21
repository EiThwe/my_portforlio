import React from "react";

const ScrollIndicator = ({ showScrollBtn }) => {
  return (
    <div
      className={`flex items-center absolute md:bottom-[50px] bottom-[90px] sm:right-[0px] right-[5px] gap-2 rotate-90
    ${
      showScrollBtn ? "opacity-100" : "opacity-0"
    } transition-all duration-300 ease-in-out`}
    >
      <div className="md:w-[50px] md:h-[2px] w-[30px] h-[1px] bg-white bg-opacity-20 overflow-hidden">
        <div className="w-full h-full bg-white bg-opacity-100 scrollIndicator" />
      </div>
      <p className="text-white md:text-[10px] text-[8px]  font-[500]  uppercase tracking-wider">
        Scroll
      </p>
    </div>
  );
};

export default ScrollIndicator;
