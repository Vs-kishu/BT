import React from "react";
import { search } from "../utils/searchSlice";
import { useDispatch } from "react-redux";

const Button = ({ btnName }) => {
  const dispatch = useDispatch();
  const searchWord = (e) => {
    dispatch(search(e.target.value));
  };
  return (
    <button
      value={btnName}
      onClick={searchWord}
      className="px-5 py-1  bg-gray-200 rounded-lg font-semibold whitespace-nowrap "
    >
      {btnName}
    </button>
  );
};

export default Button;
