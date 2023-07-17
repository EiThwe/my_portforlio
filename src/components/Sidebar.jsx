import React from "react";
import { TfiLocationPin } from "react-icons/tfi";
import { sidebarData, socialData } from "../utils/data";
import { Link } from "react-router-dom";
import SidebarItemContainer from "./SidebarItemContainer";

const Sidebar = ({ showSidebar, setShowSidebar }) => {
  const itemShowAndHide = (delay) => {
    return `${!showSidebar && "translate-y-[20px] delay-0"} ${
      showSidebar ? `trasnlate-y-0 ${delay}` : "translate-y-[20px]"
    }  transition-all duration-500 ease `;
  };

  return (
    <div>
      <div
        className={`absolute top-0 left-0 w-full h-full bg-[#000] bg-opacity-50 z-[100]  ${
          showSidebar ? "block" : "hidden delay-1000"
        } `}
      ></div>

      <div
        className={`h-full md:w-[30%] sm:w-[50%] w-[80%] bg-[#ebf6f7] absolute top-0 right-0 z-[100] backdrop-blur-[7px] bg-opacity-5 ${
          showSidebar ? "translate-x-0" : "translate-x-[100%] delay-700 "
        } transition-all duration-500 ease-in-out flex justify-start items-center pl-[50px]`}
      >
        <div className="flex flex-col justify-start gap-[40px]">
          <div className="flex flex-col">
            <SidebarItemContainer>
              <h3
                className={`text-[17px] text-secondary font-[500] ${itemShowAndHide(
                  "delay-[400ms]"
                )} `}
              >
                Menu
              </h3>
            </SidebarItemContainer>

            <div className="flex flex-col justify-start gap-[18px] mt-[20px]">
              {sidebarData.map(({ Icon, name, delay }, index) => (
                <SidebarItemContainer key={index} index={index}>
                  <button
                    key={index}
                    className={`flex items-center gap-[10px] group ${itemShowAndHide(
                      delay
                    )}`}
                  >
                    <Icon
                      size={18}
                      className="text-secondary group-hover:text-primary transition-all duration-500 ease-in-out"
                    />
                    <h3 className="text-[15px] text-secondary group-hover:text-primary transition-all duration-500 ease-in-out ">
                      {name}
                    </h3>
                  </button>
                </SidebarItemContainer>
              ))}
            </div>
          </div>

          <div className="flex flex-col">
            <SidebarItemContainer>
              <h3
                className={`text-[17px] text-secondary font-[500] ${itemShowAndHide(
                  "delay-[1000ms]"
                )}`}
              >
                Social
              </h3>
            </SidebarItemContainer>

            <div className="flex items-center gap-[20px] mt-[20px]">
              {socialData.map(({ link, Icon }, index) => (
                <SidebarItemContainer index={index}>
                  <Link to={link} className="group">
                    <div className={`${itemShowAndHide("delay-[1100ms]")}`}>
                      <Icon
                        className={`text-secondary hover:text-primary transition-all duration-500 ease-in-out 
                      `}
                        size={16}
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
