import React from "react";
import kk from "../assets/img/Group 6.png";
// import gifimg from "../assets/img/4d0858f0-50c6-4102-a8ff-95ad609328fe.gif";
import "./Profile.css";

const Profile = () => {
  return (
    <>
      <div className="min-h-full md:hidden block">
        <div className="absolute top-0 left-0 w-full h-full">
          <div
            className="md:h-full min-h-[75%]  w-full justify-center mx-auto my-auto items-center 
           relative  flex"
          >
            <div className=" absolute z-50  left-5 top-20 ">
              <img src={kk} className="w-full h-full" alt="" />
            </div>
            <div class="code-loader z-20 absolute right-10 top-10">
              <span>{"<"}</span>
              <span>{"/>"}</span>
            </div>
            <div class="bg z-20 absolute left-0 -bottom-10">
              <div class="loader"></div>
            </div>

            {/* <div className="cube-loader ">
          <div className="cube-top"></div>
          <div className="cube-wrapper">
            <span style={{ "--i": "0" }} className="cube-span"></span>
            <span style={{ "--i": "1" }} className="cube-span"></span>
            <span style={{ "--i": "2" }} className="cube-span"></span>
            <span style={{ "--i": "3" }} className="cube-span"></span>
          </div>
        </div> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
