import React from "react";

import { RiSearchLine } from "react-icons/ri";
import { FaRegCircleUser } from "react-icons/fa6";
import { RiShoppingCartLine } from "react-icons/ri";

const Header = () => {
  return (
    <>
      <div className="bg-red-400 h-20 w-full flex items-center justify-between p-2">
        <div className="flex gap-6">
          <div className="bg-yellow-400 h-16 w-16 flex justify-center items-center">
            <a href="/">Icon</a>
          </div>
          <div className="bg-yellow-400 h-16 w-30 flex justify-center items-center">
            <a href="/">Company name</a>
          </div>
        </div>

        <div className="bg-blue-400 h-16 w-200 ml-10 flex items-center">
          <div className="bg-white w-full h-12 rounded-4xl flex items-center pl-4">
            <div
              className="flex items-center justify-center w-6 h-6 bg-amber-400 cursor-pointer"
              onClick={() => console.log("search")}
            >
              <RiSearchLine className="size-4"/>
            </div>
            <input
              type="text"
              placeholder="Search for Products, Brands and More"
              className="w-full h-full p-1 outline-none"
            />
          </div>
        </div>

        <div className="bg-yellow-400 h-16 w-80 flex items-center p-6 gap-6">
          <div className="bg-sky-400 flex items-center justify-center p-1 rounded-full">
            <FaRegCircleUser className="size-7 text-sky-950" />
          </div>
          <div className="bg-sky-400 flex items-center justify-center p-1 rounded-full">
            <RiShoppingCartLine className="size-7 text-sky-950" />
          </div>
          <button
            className="bg-sky-600 flex items-center justify-center rounded-2xl px-4 py-1 hover:bg-sky-700 active:bg-sky-600 cursor-pointer"
            onClick={() => console.log("login")}
          >
            Login
          </button>
        </div>
      </div>
    </>
  );
};

export default Header;
