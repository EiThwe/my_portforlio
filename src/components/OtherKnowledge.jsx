import React from "react";
import Layout from "./Layout";
import { otherKnowledgeData } from "../utils/otherKnowledgeData";

const OtherKnowledge = () => {
  return (
    <section className="w-full h-full py-10 sm:py-20 flex  items-center">
      <div className="w-full  text-white ">
        <h6 className="uppercase text-[9px] font-bold tracking-[1.4px] mb-5">
          Other Knowledge
        </h6>
        <h3 className="ml-2 sm:text-[37px] text-[26px] tracking-tighter mb-5">
          Software Development Tools
        </h3>
        <hr className="w-8 mb-10" />
        <div className="grid grid-cols-3 gap-10">
          {otherKnowledgeData.map(({ Icon, title }, i) => (
            <div
              className="flex flex-col justify-center items-center gap-3"
              key={i}
            >
              <Icon size={50} className="" strokeWidth={1.5} />
              <div className="">
                <p className="text-xs sm:text-sm text-white whitespace-nowrap">{title}</p>
              </div>
            </div>
          ))}
          <div className="flex flex-col justify-center items-center tracking-tight">
            <img
              height="70"
              width="70"
              className="-translate-y-[0px]"
              src="https://cdn.simpleicons.org/daisyui/white"
            />
            <p className="-translate-y-1 px-3 text-xs sm:text-sm text-white tracking-tight ">
              Daisy Ui
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OtherKnowledge;
