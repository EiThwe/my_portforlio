import React, { useState } from "react";
import kk from "../assets/img/Young pretty young woman thinks of ideas concentrated above stands thoughtful and keeps hand on face stands in thoughtful pose wears round glasses yellow sweater.png"

import Cursor from "./Cursor";
import ChatShortcutButton from "./ChatShortcutButton";
import Sidebar from "./Sidebar";
import Burger from "./Burger";

import "./Layout.css"

const Layout = ({ children, activeTab }) => {
  const [showSidebar, setShowSidebar] = useState(true);

  return (
    <div>
      <Cursor />
      <div className="h-screen flex justify-center items-center overflow-x-hidden relative">
        <div
          className="w-[95%] sm:h-[90%] h-[95%] bg-[#ebf6f7] backdrop-blur-[3px] bg-opacity-5 rounded-xl shadow-inner	
          shadow-[#6b6b6b] border border-gray-500 border-opacity-20 flex justify-center items-center overflow-hidden
            py-[10px] "
        >
          <div className="h-full w-[50%] flex justify-center mx-auto items-center  relative ">
         
           <div className="shape   w-[300px] h-[300px] top-[202px] right-[215px] z-20 ">
         
           </div>
           <div className=" absolute z-50 translate-x-22 -translate-y-10">
              <img src={kk} className="w-full h-[80%]" alt="" />
            </div>
          
          
          </div>
          <div className="h-full w-[50%]  overflow-y-auto">
            <div className="w-[80%] h-full">{children}</div>
          </div>
        </div>

        <Burger showSidebar={showSidebar} setShowSidebar={setShowSidebar} />

        <Sidebar
          activeTab={activeTab}
          showSidebar={showSidebar}
          setShowSidebar={setShowSidebar}
        />
      </div>
      <ChatShortcutButton/>
    </div>
  );
};

export default Layout;
