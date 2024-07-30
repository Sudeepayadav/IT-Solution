import React, { useState } from "react";
import { FaTimes, FaBars, FaBookOpen } from "react-icons/fa";

function Navbar() {
  let Links = [
    { name: "HOME", link: "/" },
    { name: "SERVICE", link: "/" },
    { name: "ABOUT", link: "/" },
    { name: "CONTACT", link: "/" },
  ];
  let [open, setOpen] = useState(false);
  return (
    <div>
      {" "}
      <div className="md:flex items-center justify-around py-4 md:px-10 px-7 md:pt-12 ">
        {/* logo section */}
        <div className="font-bold text-2xl cursor-pointer flex items-center gap-1">
          <FaBookOpen className="w-7 h-7 text-blue-600" />
          <span>IT Solution</span>
        </div>
        {/* Menu icon */}
        <div
          onClick={() => setOpen(!open)}
          className="absolute right-8 top-6 cursor-pointer md:hidden w-7 h-7 "
        >
          {open ? <FaTimes /> : <FaBars />}
        </div>
        {/* linke items */}
        <div>
          <ul
            className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static   md:z-auto z-[1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
              open
                ? "top-20 opacity-100 bg-gray-300"
                : "top-[-490px] md:opacity-100 opacity-0"
            }`}
          >
            {Links.map((uselink, index) => (
              <li key={index} className="md:ml-8 md:my-0 my-7 font-semibold">
                <a
                  href={uselink.link}
                  className="text-gray-800 hover:text-blue-400 duration-500"
                >
                  {uselink.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="md:block hidden">
          <button className="btn bg-blue-600 text-white md:ml-8 font-semibold px-3 py-1 rounded duration-500 md:static">
            Login
          </button>
        </div>
        {/* button */}
      </div>
    </div>
  );
}

export default Navbar;
