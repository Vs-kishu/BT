import React from "react";
import { useSelector } from "react-redux";

const Sidebar = () => {
  const { isOpen } = useSelector((store) => store.toggle);

  return (
    isOpen && (
      <div className="shadow-black shadow-md col-span-1 p-5">
        <section>
          <ul>
            <li>home</li>
            <li>shorts</li>
            <li>subscriptions</li>
          </ul>
        </section>
        <hr className="h-1" />
        <section>
          <ul>
            <li>History</li>
            <li>your videos</li>

            <li>watch later</li>

            <li>Downloads</li>

            <li>Liked videos</li>
          </ul>
        </section>
        <hr className="h-1" />
        <section>
          <h3 className="font-semibold">Subscriptions</h3>
          <ul>
            <li>scribers</li>
          </ul>
        </section>
        <hr className="h-1" />

        <section>
          <h3 className="font-semibold">Explorer</h3>
          <ul>
            <li>trending</li>
            <li>shopping</li>

            <li>Movies</li>

            <li>Live</li>

            <li>Gaming</li>
            <li>news</li>
          </ul>
        </section>
      </div>
    )
  );
};

export default Sidebar;
