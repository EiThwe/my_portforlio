import React, { useState } from "react";
import kk from "../assets/img/Group 5.png";
import gifimg from "../assets/img/86896be1-5c3a-4a80-bc09-407c753496c9.gif";
import Cursor from "./Cursor";
import ChatShortcutButton from "./ChatShortcutButton";
import Sidebar from "./Sidebar";
import Burger from "./Burger";
import "./Profile.css";
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
            <div className=" absolute  w-[50%]   mx-auto ">
              <img src={kk} className="w-full h-full" alt="" />
            </div>
            {/* <div className="cube-loader z-20 absolute left-5 top-5">
              <div className="cube-top"></div>
              <div className="cube-wrapper">
                <span style={{ "--i": "0" }} className="cube-span"></span>
                <span style={{ "--i": "1" }} className="cube-span"></span>
                <span style={{ "--i": "2" }} className="cube-span"></span>
                <span style={{ "--i": "3" }} className="cube-span"></span>
              </div>
            </div> */}
            <div class="bg z-20 absolute left-48 bottom-28">
  <div class="loader"></div>
</div>
            <div class="code-loader z-20 absolute right-48 top-28">
              <span>{"<"}</span>
              <span>{"/>"}</span>
            </div>
            {/* <div className="gif z-50">
              <img src={gifimg} alt="" />
            </div> */}
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
