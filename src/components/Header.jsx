import React, { useState } from "react";
import { FaTimes, FaBars, FaBookOpen } from "react-icons/fa";
import { LiaLongArrowAltRightSolid } from "react-icons/lia";
import Navbar from "./Navbar";

const Header = () => {
  let Links = [
    { name: "HOME", link: "/" },
    { name: "SERVICE", link: "/" },
    { name: "ABOUT", link: "/" },
    { name: "CONTACT", link: "/" },
  ];
  let [open, setOpen] = useState(false);

  return (
    <div
      className="shadow-sm w-full top-0 left-0 bg-cover bg-center"
      style={{
        backgroundImage: `url('https://img.freepik.com/premium-photo/white-background-with-subtle-linear-gradients-background-ar-23-v-52-job-id-868d5196134b4ce8aa7c046294f3647d_941600-206410.jpg?ga=GA1.1.1341278248.1705148826&semt=ais_user')`,
      }}
    >
    <div>
    <Navbar/>
    </div>
      <div className="text-center p-10 md:mt-5 mt-10">
        <div className=" mb-4 ">
          <h2 className="text-6xl md:text-9xl font-bold leading-tight md:leading-none">
            Your{" "}
            <span className="font-thin bg-gradient-to-br from-[#ff61d2] to-purple-600 text-transparent bg-clip-text">
              {" "}
              Best
            </span>
            <br />
            IT{" "}
            <span className="font-medium bg-gradient-to-br from-[#ff61d2] to-purple-600 text-transparent bg-clip-text">
              Partners.{" "}
            </span>
          </h2>
        </div>
        <p className=" mb-8 md:w-1/2 flex mx-auto md:text-xl text-lg font-semibold">
          That's why we're committed to delivering innovative IT solutions to
          businesses of all sizes.
        </p>
        <div className="flex justify-center items-center md:mb-5">
          <button className="flex items-center px-12 py-3 rounded-lg shadow-lg border border-black text-lg font-medium">
            Explore Now <LiaLongArrowAltRightSolid className="ml-2" />
          </button>
        </div>
      </div>
      <div className="w-10/12 m-auto md:mt-24 mt-16">
        <h2 className="md:text-7xl text-4xl font-bold md:mb-10">
          Why <br /> Choose us?
        </h2>
        <div className="md:flex py-14 justify-center items-center text-center m-auto">
          <div className="md:w-1/4 items-center">
            <img
              src="https://www.svgrepo.com/show/483078/person-combination.svg"
              alt=""
              className="w-5/12 opacity-50 ml-24"
            />
            <br />
            <h2 className="text-3xl font-bold mb-5">Expertise</h2>
            <p>
              Web development is a broad field that involves creating and
              maintaining websites and web applications.
            </p>
          </div>
          <div className="md:w-1/4 items-center">
            <img
              src="https://www.svgrepo.com/show/471890/shield-tick.svg"
              alt=""
              className="w-5/12 opacity-50 ml-24 justify-center items-center mx-auto"
            />
            <br />
            <h2 className="text-3xl font-bold mb-5">Technology</h2>
            <p>
              Web development is a broad field that involves creating and
              maintaining websites and web applications.
            </p>
          </div>
          <div className="md:w-1/4 items-center">
            <img
              src="https://www.svgrepo.com/show/523027/shield-network.svg"
              alt=""
              className="w-5/12 opacity-50  ml-24"
            />
            <br />
            <h2 className="text-3xl font-bold mb-5">Solution</h2>
            <p>
              Web development is a broad field that involves creating and
              maintaining websites and web applications.
            </p>
          </div>
          <div className="md:w-1/4 items-center">
            <img
              src="https://www.svgrepo.com/show/415354/test-result-science.svg"
              alt=""
              className="w-5/12 opacity-50  ml-24"
            />
            <br />
            <h2 className="text-3xl font-bold mb-5">Results</h2>
            <p>
              Web development is a broad field that involves creating and
              maintaining websites and web applications.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
