import React from "react";
import Layout from "./Layout";
import { otherKnowledgeData } from "../utils/otherKnowledgeData";

const OtherKnowledge = () => {
  return (
    <section className="w-full h-full flex  items-center">
      <div className="w-full  text-white ">
        <h6 className="uppercase text-[9px] font-bold tracking-[1.4px] mb-5">
          Other Knowledge
        </h6>
        <h3 className="ml-2 text-[37px] tracking-tighter mb-5">
          Software Development Tools
        </h3>
        <hr className="w-8 mb-10" />
        <div className="grid grid-cols-3 gap-10">
          {otherKnowledgeData.map(({ Icon, title }, i) => (
            <div className="flex flex-col justify-center items-center" key={i}>
              <Icon size={50}  className="" strokeWidth={0.8} />
              <p className="text-sm text-[#7c7c7c]">{title}</p>
            </div>
          ))}
          <div className="flex flex-col justify-center items-center tracking-tight">
            <img
              height="80"
              width="80"
              className="-translate-y-[10px]"
              src="https://cdn.simpleicons.org/daisyui/white"
            />
            <p className="-translate-y-4 text-sm text-[#7c7c7c] tracking-tight">
              Daisy Ui
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OtherKnowledge;
