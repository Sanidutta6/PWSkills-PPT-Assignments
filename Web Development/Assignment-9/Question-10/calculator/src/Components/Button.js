import React from "react";

const Button = ({ value, type, handleClick, extraStyle = "" }) => {
  return (
    <div
      className={`text-center text-xl text-black ${
        type === "operator" ? "bg-[#EE9815]" : "bg-[#F0F0F0]"
      } px-16 py-4 rounded-lg cursor-pointer ${extraStyle}`}
      onClick={() => {
        handleClick(type, value);
      }}
    >
      {value}
    </div>
  );
};

export default Button;
