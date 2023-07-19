import React from "react";
import { TfiLocationPin } from "react-icons/tfi";
import { sidebarData, socialData } from "../utils/data";
import { Link } from "react-router-dom";
import SidebarItemContainer from "./SidebarItemContainer";

const Sidebar = ({ showSidebar, setShowSidebar, activeTab }) => {
  const itemShowAndHide = (delay) => {
    return `${!showSidebar && "translate-y-[20px] delay-0"} ${
      showSidebar ? `translate-y-[2px] ${delay}` : "translate-y-[-22px]"
    }  transition-all duration-500 ease `;
  };

  return (
    <div>
      <div
        className={`absolute top-0 left-0 w-full h-full bg-[#000] bg-opacity-60 z-[100]  ${
          showSidebar ? "block" : "hidden delay-1000"
        } `}
      ></div>

      <div
        className={`h-full md:w-[30%] sm:w-[50%] w-[80%] bg-[#ebf6f7] absolute top-0 right-0 z-[100] 
        backdrop-blur-[12px] bg-opacity-5 ${
          showSidebar ? "translate-x-0" : "translate-x-[100%] delay-700 "
        } transition-all duration-500 ease-in-out flex justify-start items-center md:pl-[140px] pl-[80px]`}
      >
        <div className="flex flex-col justify-start gap-[40px] ">
          <div className="flex flex-col">
            <SidebarItemContainer>
              <h3
                className={`text-[20px] tracking-tight text-secondary font-[500] ${itemShowAndHide(
                  "delay-[400ms]"
                )} `}
              >
                Menu
              </h3>
            </SidebarItemContainer>

            <div className="flex flex-col justify-start gap-[20px] mt-[30px]">
              {sidebarData.map(({ Icon, name, delay }, index) => (
                <SidebarItemContainer key={index} index={index}>
                  <a
                    onClick={() => setShowSidebar(false)}
                    href={`#${name.toLowerCase()}`}
                    key={index}
                    className={`flex items-center gap-[16px] group ${itemShowAndHide(
                      delay
                    )}`}
                  >
                    <Icon
                      size={18}
                      className={` group-hover:text-primary transition-all duration-500 ease-in-out ${
                        activeTab.toLowerCase() == name.toLowerCase()
                          ? "text-primary"
                          : "text-secondary"
                      }`}
                    />
                    <h3
                      className={`text-[15px] group-hover:text-primary transition-all duration-500 
                    ease-in-out ${
                      activeTab.toLowerCase() == name.toLowerCase()
                        ? "text-primary"
                        : "text-secondary"
                    }`}
                    >
                      {name}
                    </h3>
                  </a>
                </SidebarItemContainer>
              ))}
            </div>
          </div>

          <div className="flex flex-col">
            <SidebarItemContainer>
              <h3
                className={`text-[20px] tracking-tight text-secondary font-[500] ${itemShowAndHide(
                  "delay-[1000ms]"
                )}`}
              >
                Social
              </h3>
            </SidebarItemContainer>

            <div className="flex items-center gap-[20px] mt-[30px]">
              {socialData.map(({ link, Icon }, index) => (
                <SidebarItemContainer index={index}>
                  <Link to={link} className="group">
                    <div className={`${itemShowAndHide("delay-[1100ms]")}`}>
                      <Icon
                        strokeWidth={1}
                        className={`text-secondary hover:text-primary transition-all duration-500 ease-in-out 
                      `}
                        size={24}
                      />
                    </div>
                  </Link>
                </SidebarItemContainer>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
