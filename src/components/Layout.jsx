import React, { useState } from "react";
import kk from "../assets/img/Young pretty young woman thinks of ideas concentrated above stands thoughtful and keeps hand on face stands in thoughtful pose wears round glasses yellow sweater.png";

import Cursor from "./Cursor";
import ChatShortcutButton from "./ChatShortcutButton";
import Sidebar from "./Sidebar";
import Burger from "./Burger";

import "./Layout.css";
import ScrollIndicator from "./ScrollIndicator";

const Layout = ({ children, activeTab }) => {
  const [showSidebar, setShowSidebar] = useState(false);

  return (
    <div>
      <Cursor />
      <div className="h-screen flex justify-center items-center overflow-x-hidden relative">
        <div
          className="w-[95%] md:h-[90%] h-[95%] bg-[#2d2d2d] backdrop-blur-[3px] bg-opacity-5 rounded-xl 
          shadow-inner	
          shadow-[#6b6b6b] border border-gray-500 border-opacity-20 flex md:flex-row flex-col justify-center
           items-center overflow-x-hidden
            py-[10px] sm:pt-0 pt-[40px]  relative"
        >
          <div
            className="md:h-full min-h-[500px] md:w-[50%] w-full  justify-center mx-auto items-center 
           relative md:flex hidden"
          >
            <div className="shape w-[300px] h-[300px] top-[202px] right-[215px] z-20 "></div>
            <div className=" absolute z-50 translate-x-22 -translate-y-10">
              <img src={kk} className="w-full h-[80%]" alt="" />
            </div>
          </div>
          <div className="h-full md:w-[50%] w-full flex md:justify-start justify-center overflow-y-auto relative">
            <div className="md:w-[80%] sm:w-[80%] w-full sm:px-0 px-3 h-full">
              {children}
            </div>

            <ScrollIndicator />
          </div>
        </div>

        <Burger showSidebar={showSidebar} setShowSidebar={setShowSidebar} />

        <Sidebar
          activeTab={activeTab}
          showSidebar={showSidebar}
          setShowSidebar={setShowSidebar}
        />
      </div>
      <ChatShortcutButton />
    </div>
  );
};

export default Layout;
