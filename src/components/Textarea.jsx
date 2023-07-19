import React from "react";

const Textarea = ({ withAsterisk, placeholder }) => {
  return (
    <div className="w-full border-b border-opacity-50 border-white">
      <textarea
        rows={3}
        placeholder={`${placeholder}${withAsterisk ? " *" : ""}`}
        className=" outline-none border-transparent bg-transparent contact text-lg w-full"
      />
    </div>
  );
};

export default Textarea;
