import React from "react";

const Input = ({ withAsterisk, placeholder }) => {
  return (
    <div className="w-full border-b border-white">
      <input
        type="text"
        placeholder={`${withAsterisk ? "* " : ""}${placeholder}`}
        className="w-full py-3 outline-none border-transparent bg-transparent contact text-lg"
      />
    </div>
  );
};

export default Input;
