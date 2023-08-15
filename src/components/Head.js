import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaSearchengin } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { toggle } from "../utils/toggleSlice";
const Head = () => {
  const dispatch = useDispatch();
  return (
    <div className="grid grid-flow-col shadow-md p-4  shadow-black">
      <section className="flex items-center gap-3 col-span-2 ">
        <GiHamburgerMenu
          onClick={() => dispatch(toggle())}
          className="text-3xl"
        />
        <img className="h-8" src="/images/BT.png" alt="logo" />
      </section>

      <section className="col-span-8 flex">
        <input
          className="border-2 border-gray-500 w-3/5 rounded-l-full"
          type="text"
        />
        <button className=" border-2 w-24  border-gray-500 rounded-r-full">
          <FaSearchengin className="tetx-3xl mx-auto" />
        </button>
      </section>
      <section className="col-span-2">
        <img
          className="h-10"
          src="https://static.vecteezy.com/system/resources/previews/005/544/718/original/profile-icon-design-free-vector.jpg"
          alt="profile"
        />
      </section>
    </div>
  );
};

export default Head;
