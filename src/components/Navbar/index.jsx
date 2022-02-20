import React, { useState } from "react";
import { FaUserAlt } from "react-icons/fa";
import { HiLocationMarker } from "react-icons/hi";
import { IoMdArrowDropdown, IoMdArrowDropup } from "react-icons/io";
import { RiSearch2Line } from "react-icons/ri";

function LargeNav() {
  return (
    <>
      <div className="hidden lg:inline container px-20  mx-auto bg-black">
        <div className="gap-4 w-full items-center justify-around flex">
          <div className="w-45">
            <img
              src="https://unicus.one/wp-content/uploads/2022/02/Unicus-logo.png"
              alt="Unicus"
            ></img>
          </div>
          <div className="w-64.3118px text-white shadow-md  flex items-center gap-3  ">
<ul>
  <li>About</li>
</ul>
          </div>
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
