import { Badge } from "@mantine/core";
import React, { useEffect, useRef, useState } from "react";
import { BsBoxArrowUpRight } from "react-icons/bs";
import { Link } from "react-router-dom";
const ProjectCard = ({ image, title, link, tools }) => {
  const ref = useRef();

  const [loading, setLoading] = useState(true);
  const [hover, setHover] = useState(false);

  // useEffect(() => {
  //   setHeight(`translate-y-[${ref.current.clientHeight}px]`);
  //   console.log(height);
  // }, [height]);
  return (
    <div>
      <div
        onMouseOver={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        className=" project-card w-full h-[250px] bg-[#ebf6f7] backdrop-blur-[3px] bg-opacity-5 rounded-xl shadow-inner	
        shadow-[#6b6b6b] border border-gray-500 border-opacity-20 flex justify-center items-center overflow-hidden z-[100]"
      >
        {/* loading section */}
        {loading && (
          <div>
            <div className="w-full h-full bg-gray-400"></div>
          </div>
        )}
        {/* img section */}
        <div className="img-container">
          <img
            onLoad={() => setLoading(false)}
            src={image}
            alt="project"
            className="project-img w-full h-full rounded-xl"
          />
        </div>

        {/* cover layer */}
        <div className="w-full h-full absolute bg-black bg-opacity-50"></div>

        {/* content */}
        <div
          className={`hidden-container absolute bottom-0 w-full px-2 transition-all ease-linear duration-300`}
          style={{
            transform: hover
              ? "translateY(0px)"
              : `translateY(${ref.current?.clientHeight}px)`,
          }}
        >
          {/* text */}
          <div className="w-full">
            <h3 className="text-[20px] mb-2 tracking-tight">{title}</h3>
            <hr className={`${hover ? "w-16" : "w-8"} mb-3 `} />
          </div>

          {/* tools */}
          <div className={`flex justify-between w-full`} ref={ref}>
            <div className=" flex flex-wrap w-[70%] gap-1 mb-2">
              {tools.map(({ title }, i) => (
                // <Icon size={20} strokeWidth={1.2} />
                <Badge
                  size="xs"
                  key={i}
                  classNames={{ inner: "text-[#E64980]" }}
                  // variant="gradient"
                  // gradient={{ from: "red", to: "pink" }}
                >
                  {title}
                </Badge>
              ))}
            </div>
            {/* preview link */}
            <Link
              to={link}
              target="_blank"
              className={`${
                hover ? "opacity-100" : "opacity-0"
              } transition-all ease-in-out duration-300 text-xs flex justify-between items-center gap-2`}
            >
              <span>Live Preview</span> <BsBoxArrowUpRight className="" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
