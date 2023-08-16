import React, { useEffect, useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaSearchengin } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { toggle } from "../utils/toggleSlice";
import { SEARCH_API } from "../utils/constants";
import { BsSearch } from "react-icons/bs";
import { cacheResults } from "../utils/searchCache";
const Head = () => {
  const dispatch = useDispatch();

  const [searchValue, setSearchValue] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggest, setShowSuggest] = useState(false);

  const searchCache = useSelector((state) => state.search);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (searchCache[searchValue]) {
        setSuggestions(searchCache[searchValue]);
      } else {
        getSuggestion();
      }
    }, 200);
    return () => {
      clearTimeout(timer);
    };
    // eslint-disable-next-line
  }, [searchValue]);

  const getSuggestion = async () => {
    const data = await fetch(SEARCH_API + searchValue);
    const json = await data.json();
    setSuggestions(json[1]);
    dispatch(
      cacheResults({
        [searchValue]: json[1],
      })
    );
  };
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
          className="border-2 relative px-8 border-gray-500 w-3/5 rounded-l-full"
          type="text"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          onFocus={() => setShowSuggest(true)}
          onBlur={() => setShowSuggest(false)}
        />
        <button className=" border-2 w-24  border-gray-500 rounded-r-full">
          <FaSearchengin className="tetx-3xl mx-auto" />
        </button>
        {showSuggest && suggestions.length > 0 && (
          <div className="absolute top-14  w-96 rounded-b-lg bg-white shadow-sm shadow-black p-5">
            <ul>
              {suggestions.map((suggest) => (
                <li className="py-1 flex items-center justify-between px-2 border-b-2 hover:bg-gray-200 rounded-lg">
                  {suggest}
                  <BsSearch />
                </li>
              ))}
            </ul>
          </div>
        )}
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
