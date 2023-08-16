import React from "react";
import { CgProfile } from "react-icons/cg";

const Comment = ({ data }) => {
  return (
    <div className="p-3 bg-gray-200 mt-3 flex gap-3 items-start">
      <CgProfile />
      <div>
        <h3 className="font-semibold">{data.name}</h3>
        <h3>{data.text}</h3>
      </div>
    </div>
  );
};

export default Comment;
