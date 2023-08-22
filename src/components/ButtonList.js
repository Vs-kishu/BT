import React, { useEffect, useState } from "react";
import Button from "./Button";
import { SEARCH_API, VIDEO_CATEGORY } from "../utils/constants";
import { json } from "react-router-dom";
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
  const [videoCategories, setvideoCategories] = useState([]);
  useEffect(() => {
    getVideoCategory();
  }, []);
  const getVideoCategory = async () => {
    const data = await fetch(VIDEO_CATEGORY);
    const json = await data.json();
    setvideoCategories(json?.items);
  };

  if (!videoCategories) {
    return <div>Loading</div>;
  }
  return (
    <div className="flex items-center gap-2 mt-4 ml-3 w-full overflow-x-scroll overflow-y-clip hidescroll">
      {videoCategories.map((item, index) => (
        <Button key={index} btnName={item.snippet.title} />
      ))}
    </div>
  );
};

export default ButtonList;
