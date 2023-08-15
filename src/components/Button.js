import React from "react";

const Button = ({ btnName }) => {
  return (
    <div>
      <button className="px-5 py-1  bg-gray-200 rounded-lg font-semibold ">
        {btnName}
      </button>
    </div>
  );
};

export default Button;
