import React from "react";

import { RiSearchLine } from "react-icons/ri";
import { FaRegCircleUser } from "react-icons/fa6";
import { RiShoppingCartLine } from "react-icons/ri";

const Header = () => {
  return (
    <>
      <div className="bg-red-400 h-14 md:h-20 w-full flex items-center justify-between p-2 shadow-xl hover:shadow-2xl">
        <div className="flex gap-6">
          <div className="bg-yellow-400 size-10 md:size-16 flex justify-center items-center">
            <a href="/">
                <img src="../../public/images/logo.png" alt="logo" className="rounded-full"/>
            </a>
          </div>
          <div className="bg-yellow-400 h-16 w-30 hidden md:flex justify-center items-center">
            <a href="/" className="flex flex-col items-center h-full">
              <img src="../../public/images/name.jpg" alt="name" className="overflow-hidden"/>
            </a>
          </div>
        </div>

        <div className="bg-blue-400 md:h-16 md:w-200 size-10 ml-10 flex items-center">
          <div className="bg-white w-full h-full md:h-12 md:rounded-4xl rounded-full flex items-center justify-center md:pl-4">
            <div
              className="flex items-center justify-center size-full md:w-6 md:h-6 bg-amber-400 cursor-pointer"
              onClick={() => console.log("search")}
            >
              <RiSearchLine className="size-6 md:size-4" />
            </div>
            <input
              type="text"
              placeholder="Search for Products, Brands and More"
              className="w-full h-full p-1 outline-none hidden md:block"
            />
          </div>
        </div>

        <div className="bg-yellow-400 h-10 md:h-16 md:w-80 flex items-center p-2 md:p-6 gap-5 md:gap-6 ">
          <div className="bg-sky-400 flex items-center justify-center p-0.5 md:p-1 rounded-full">
            <FaRegCircleUser className="size-6 md:size-7 text-sky-950" />
          </div>
          <div className="bg-sky-400 flex items-center justify-center p-0.5 md:p-1 rounded-full relative">
            <div className="absolute md:bottom-4 bottom-3 md:right-8 right-7 text-mx font-semibold">0</div>
            <RiShoppingCartLine className="size-6 md:size-7 text-sky-950" />
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
