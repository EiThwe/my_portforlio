import React from "react";
import Cursor from "./Cursor";

const Layout = ({ children }) => {
  return (
    <div>
      <Cursor />
      <div className="w-full h-screen flex justify-center items-center">
        <div
          className="w-[95%] sm:h-[90%] h-[95%] bg-[#ebf6f7] backdrop-blur-[3px] bg-opacity-5 rounded-xl shadow-inner	
          shadow-[#6b6b6b] border border-gray-500 border-opacity-20 flex justify-center items-center overflow-hidden
           relative"
        >
          <div className="h-full w-[40%] "></div>
          <div className="min-h-full w-[60%] ">{children}</div>
        </div>

        <div className="absolute top-0 left-0 w-full h-full flex justify-end bg-[#000] bg-opacity-30">
          <div className="h-full w-[30%] bg-[#ebf6f7] backdrop-blur-[7px] bg-opacity-5"></div>
        </div>
      </div>
    </div>
  );
};

export default Layout;
