import React from "react";
import Button from "./Button";
const btnList = [
  "All",
  "Music",
  "Video",
  "Javascript",
  "Gaming",
  "Bollywood Music",
  "Indian Pop Music",
  "Comedy",
  "Smartphones",
  "Cars",
];
const ButtonList = () => {
  return (
    <div className="flex gap-2 mt-4 ml-3">
      {btnList.map((item, index) => (
        <Button key={index} btnName={item} />
      ))}
    </div>
  );
};

export default ButtonList;
