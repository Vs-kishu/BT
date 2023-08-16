import React from "react";
import { CgProfile } from "react-icons/cg";

const ChatMessage = ({ name, message }) => {
  return (
    <div className="flex gap-2 items-center p-2 bg-gray-200 rounded-lg hover:bg-gray-300">
      <CgProfile />
      <p className="font-semibold">{name}</p>
      <span>{message}</span>
    </div>
  );
};

export default ChatMessage;
