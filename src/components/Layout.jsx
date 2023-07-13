import React, { useState } from "react";

import Cursor from "./Cursor";
import ChatShortcutButton from "./ChatShortcutButton";

const Layout = ({ children }) => {
  const [showSidebar, setShowSidebar] = useState(false);

  return (
    <div>
      <Cursor />
      <div className="w-full h-screen flex justify-center items-center">
        <div
          className="w-[95%] sm:h-[90%] h-[95%] bg-[#ebf6f7] backdrop-blur-[3px] bg-opacity-5 rounded-xl shadow-inner	
          shadow-[#6b6b6b] border border-gray-500 border-opacity-20 flex justify-center items-center overflow-hidden
           relative py-[10px] "
        >
          <div className="h-full w-[50%] "></div>
          <div className="h-full w-[50%] overflow-y-auto">
            <div className="w-[70%] h-full">{children}</div>
          </div>
        </div>
      </div>
      <ChatShortcutButton/>
    </div>
  );
};

export default Layout;
