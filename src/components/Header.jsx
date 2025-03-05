import React from "react";

const Header = () => {
  return (
    <>
      <div className="bg-red-400 h-20 w-full flex items-center p-2">
        <div className="bg-yellow-400 h-16 w-16 flex justify-center items-center">
          <a href="/">Icon</a>
        </div>

        <div className="bg-blue-400 h-16 w-100 ml-10 flex items-center">
          <div className="bg-white w-full h-12 rounded-4xl">
            <input type="text" placeholder="Search" className="w-full h-full p-4 outline-none" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
