import React, { useEffect } from "react";
import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";
import { useDispatch } from "react-redux";
import { toggle } from "../utils/toggleSlice";

const Body = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(toggle());
    //eslint
  }, [dispatch]);
  return (
    <div className="grid grid-flow-col h-full w-full">
      <Sidebar />
      <Outlet />{" "}
    </div>
  );
};

export default Body;
