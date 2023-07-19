import React from "react";
import kk from "../assets/img/Young pretty young woman thinks of ideas concentrated above stands thoughtful and keeps hand on face stands in thoughtful pose wears round glasses yellow sweater.png";

const Profile = () => {
  return (
    <div
      className="md:h-full min-h-full  w-full justify-center mx-auto items-center 
           relative md:hidden flex"
    >
      <div className="shape w-[300px] h-[300px] top-[202px] right-[215px] z-20 "></div>
      <div className=" absolute z-50 translate-x-22 -translate-y-10 ">
        <img src={kk} className="w-full h-[80%]" alt="" />
      </div>
    </div>
  );
};

export default Profile;
