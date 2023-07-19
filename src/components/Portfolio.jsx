import React from "react";
import ProjectCard from "./ProjectCard";
import { projectCardData } from "../utils/projectCardData";

const Portfolio = () => {
  return (
    <section className="portfolio w-full min-h-full flex justify-center items-center py-24">
      <div className="w-full h-full text-white ">
        <h6 className="uppercase text-[9px] font-bold tracking-[1.4px] mb-5">
          Portfolio
        </h6>
        <h3 className="ml-2 sm:text-[37px] text-[26px] tracking-tighter mb-5">
          Selected Work
        </h3>
        <hr className="w-8 mb-5" />
        <p className="mb-10 text-[#7c7c7c] sm:text-base text-sm tracking-tighter">
          This is a collection of my recent projects.Project Title, preview link
          and the tools that have been used can be seen on hover.
        </p>
        <div className="w-full flex flex-col gap-10">
          {projectCardData.map((data, i) => (
            <ProjectCard {...data} key={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
