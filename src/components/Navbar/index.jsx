import React, { useState } from "react";
import { FaUserAlt } from "react-icons/fa";
import { HiLocationMarker } from "react-icons/hi";
import { IoMdArrowDropdown, IoMdArrowDropup } from "react-icons/io";
import { RiSearch2Line } from "react-icons/ri";

function LargeNav() {
  return (
    <>
      <div className="hidden lg:inline container  mx-auto bg-black">
        <div className="gap-4 w-full items-center justify-around flex">
          <div className="w-45">
            <img
              src="https://unicus.one/wp-content/uploads/2022/02/Unicus-logo.png"
              alt="Unicus"
              className="w-50 pr-10"
            ></img>
          </div>
         <div className=" text-white pl-40 w-5/4"><strong>
           About
           </strong> </div>
        </div>
      </div>
    </>
  );
}
function Navbar() {
  return (
    <nav className="p-4  flex bg-black shadow-md lg:shadow-none w-full items-center">
      <LargeNav />
    </nav>
  );
}

export default Navbar;
