import React, { useState } from "react";

const ProjectCard = ({ image }) => {
  const [loading, setLoading] = useState(true);
  return (
    <>
      {loading ? (
        <div className=" project-card w-full h-[260px] bg-white backdrop-blur-[10px] bg-opacity-10 flex justify-center items-center shadow-[#6b6b6b] shadow-inner ">
          
        </div>
      ) : (
        <div className=" project-card w-full h-[260px] bg-white backdrop-blur-[10px] bg-opacity-10 flex justify-center items-center shadow-[#6b6b6b] shadow-inner ">
          <img
            onLoad={() => setLoading(false)}
            src={image}
            alt=""
            className="project-img w-[99%] h-[99%]"
          />
        </div>
      )}
    </>
  );
};

export default ProjectCard;
