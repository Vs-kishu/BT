import React, { useEffect, useState } from "react";
import ChatMessage from "./ChatMessage";
import { addMessage } from "../utils/chatSlice";
import { useDispatch, useSelector } from "react-redux";
import { generateText, genrateRandomName } from "../utils/helper";

const LiveChat = () => {
  const dispatch = useDispatch();
  const [message, setMessage] = useState("");
  const { messages } = useSelector((state) => state.chat);
  useEffect(() => {
    const time = setInterval(() => {
      dispatch(
        addMessage({
          name: genrateRandomName(),
          message: generateText(),
        })
      );
    }, 600);

    return () => {
      clearInterval(time);
    };
  }, []);
  return (
    <>
      <div className="bg-slate-200 border border-black shadow-md h-[500px] w-[450px] p-4 overflow-y-scroll flex flex-col-reverse">
        {messages.map((item, index) => (
          <ChatMessage key={index} name={item.name} message={item.message} />
        ))}
      </div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          dispatch(
            addMessage({
              name: "unknown",
              message,
            })
          );
          setMessage("");
        }}
        className="w-full shadow-md flex items-center p-3"
      >
        <input
          className="w-full rounded-xl hover:bg-blue-100 border-2 p-2 border-gray-500"
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button className="w-full ml-2 p-2 text-xl bg-blue-50  rounded-xl hover:bg-blue-200">
          send
        </button>
      </form>
    </>
  );
};

export default LiveChat;
