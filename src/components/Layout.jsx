import React, { useState } from "react";

import Cursor from "./Cursor";
import Sidebar from "./Sidebar";
import Burger from "./Burger";

const Layout = ({ children, activeTab }) => {
  const [showSidebar, setShowSidebar] = useState(true);

  return (
    <div>
      <Cursor />
      <div className="h-screen flex justify-center items-center overflow-x-hidden relative">
        <div
          className="w-[95%] sm:h-[90%] h-[95%] bg-[#ebf6f7] backdrop-blur-[3px] bg-opacity-5 rounded-xl shadow-inner	
          shadow-[#6b6b6b] border border-gray-500 border-opacity-20 flex justify-center items-center overflow-hidden
           relative py-[10px] "
        >
          <div className="h-full w-[50%] "></div>
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
    </div>
  );
};

export default Layout;
