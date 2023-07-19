import React, { useState, useEffect, useRef } from "react";
import "./Skillbar.css";
import { useOnScreen } from "../../utils/Observer";

const Skillbar = ({ title, percentage, item }) => {
  const [ref, visible] = useOnScreen({ threshold: 0.1 });

  return (
    <>
      <div className="skill-box pb-5" ref={ref}>
        <h3 className="title text-white uppercase ">{title}</h3>
        <div className="skill-bar ">
          <span className={`skill-per ${item} ` + (visible ? "animate" : "")}>
            <span className="tooltip text-white text-sm ">{percentage}</span>
          </span>
        </div>
      </div>
    </>
  );
};

export default Skillbar;
