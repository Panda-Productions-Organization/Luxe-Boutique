import React from "react";

import { RiSearchLine } from "react-icons/ri";
import { FaRegCircleUser } from "react-icons/fa6";
import { RiShoppingCartLine } from "react-icons/ri";

const Header = () => {
  return (
    <>
      <div className=" h-14 md:h-20 w-full flex items-center justify-between p-2 shadow-xl">
        <div className="flex gap-6 items-center">
          <div className=" size-10 md:size-16 flex justify-center items-center border-1 border-purple-700 rounded-full">
            <a href="/">
              <img
                src="../../public/images/logo.png"
                alt="logo"
                className="rounded-full"
              />
            </a>
          </div>
          <div className=" h-14 w-30 hidden md:flex justify-center items-center">
            <a href="/" className="flex flex-col items-center h-full">
              <img
                src="../../public/images/name.jpg"
                alt="name"
                className="overflow-hidden"
              />
            </a>
          </div>
        </div>

        <div className=" md:h-16 md:w-200 h-10 w-30 ml-10 flex items-center">
          <div className=" w-full h-full md:h-12 md:rounded-4xl rounded-full flex items-center justify-center md:pl-3 border-1 border-purple-400 active:shadow-xl hover:shadow-xl">
            <div
              className="hidden md:flex items-center justify-center h-8 w-8 bg-purple-500 cursor-pointer rounded-full"
              onClick={() => console.log("search")}
            >
              <RiSearchLine className="size-4 text-white" />
            </div>
            <input
              type="text"
              placeholder="Search here..."
              className="w-full h-full md:p-1 pl-2 outline-none text-purple-600"
            />
          </div>
        </div>

        <div className=" h-10 md:h-16 md:w-80 flex items-center p-2 md:p-6 gap-5 md:gap-6 ">
          <div className=" flex items-center justify-center p-0.5 md:p-1 rounded-full">
            <FaRegCircleUser className="size-6 md:size-7 text-sky-950 rounded-full" />
          </div>
          <div className=" flex items-center justify-center p-0.5 md:p-1 rounded-full relative">
            <div className="absolute md:bottom-4 bottom-3 md:right-8 right-7 text-mx font-bold text-purple-700">
              0
            </div>
            <RiShoppingCartLine className="size-6 md:size-7 text-sky-950" />
          </div>

          <button
            className="bg-purple-600 flex items-center justify-center rounded-2xl px-4 py-1 hover:bg-purple-700 active:bg-purple-600 cursor-pointer"
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
