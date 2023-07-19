import React from "react";

const Input = ({ withAsterisk, placeholder }) => {
  return (
    <div className="w-full border-b border-opacity-50 border-white">
      <input
        type="text"
        placeholder={`${placeholder} ${withAsterisk ? "*" : ""}`}
        className="w-full py-3 outline-none border-transparent bg-transparent contact text-lg"
      />
    </div>
  );
};

export default Input;
