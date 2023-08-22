import React from "react";

const Shimmer = () => {
  const array = new Array(40).fill(null);
  return (
    <div className="flex flex-wrap gap-3 ">
      {array.map((item, index) => (
        <div
          key={index}
          className="w-80 h-60 bg-gradient-to-r from-slate-200 p-3 to bg-slate-100 rounded-xl mt-3 ml-3"
        >
          <div className="bg-gray-400 animate-pulse w-full h-32 rounded-lg "></div>
          <div className="bg-gray-400 animate-pulse w-1/2 h-5 mt-3 rounded-lg "></div>
          <div className="bg-gray-400 animate-pulse w-2/3 h-5 mt-3 rounded-lg "></div>
          <div className="bg-gray-400 animate-pulse w-full h-2 mt-3 rounded-lg "></div>
        </div>
      ))}
    </div>
  );
};

export default Shimmer;
