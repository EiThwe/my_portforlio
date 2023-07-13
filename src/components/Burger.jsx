import React from "react";

const Burger = ({ showSidebar, setShowSidebar }) => {
  return (
    <button
      onClick={() => setShowSidebar((prev) => !prev)}
      className="fixed z-[1000] top-[45px] right-[45px] group flex justify-center items-center flex-col gap-[4px]
        px-1 py-2"
    >
      <div
        className={`w-[18px] bg-white h-[1px] group-hover:bg-primary ${
          showSidebar
            ? "rotate-[45deg] translate-y-[1px]"
            : "rotate-0 translate-y-0"
        } transition-all duration-300 ease-in-out`}
      ></div>
      <div
        className={`w-[18px]  bg-white group-hover:bg-primary ${
          showSidebar
            ? "rotate-[-45deg] translate-y-[-4px] h-[1px]"
            : "rotate-0 h-[0.5px]"
        } transition-all duration-300 ease-in-out`}
      ></div>
    </button>
  );
};

export default Burger;
