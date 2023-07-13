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
          {otherKnowledgeData.map(({ Icon }, i) => (
            <Icon size={50} strokeWidth={1.2} key={i} />
          ))}
          <img
            height="80"
            width="80"
            className="-translate-y-[10px]"
            src="https://cdn.simpleicons.org/daisyui/white"
          />
        </div>
      </div>
    </section>
  );
};

export default OtherKnowledge;
