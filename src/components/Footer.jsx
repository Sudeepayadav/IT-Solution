import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";

function Footer() {
  return (
    <div className="app-container flex flex-col justify-between items-center min-h-screen text-center bg-[#141627] text-white p-2">
      <div className="content md:mt-32 mt-12 md:ml-0 ml-36">
        <h1 className="text-4xl mb-5">
          Need IT Solutions?
          <br />
          Let's{" "}
          <span className="bg-gradient-to-t from-sky-400 to-white text-transparent bg-clip-text italic">
            start now.
          </span>
        </h1>
        <button className="consultation-button bg-transparent text-white border-2 border-white px-5 py-2 text-lg cursor-pointer transition-all duration-300 hover:bg-[#7EBCD4] hover:text-[#141627] rounded-lg">
          Get Free Consultation
          <span className="ml-3 inline-block">
            <FaArrowRightLong />
          </span>
        </button>
      </div>

      <footer className=" w-full flex justify-around py-10">
        <div className=" hidden md:block text-center">
          <h2 className=" mb-2 mr-28 text-5xl font-bold bg-gradient-to-br from-sky-300 to-white text-transparent bg-clip-text">
            WAVE<span className="font-normal">NET</span>
          </h2>
          <div className=" flex justify-center my-5 space-x-10 mr-28">
            <FaInstagram className="text-2xl cursor-pointer transition-colors duration-300 hover:text-[#7EBCD4]" />
            <FaFacebookF className="text-2xl cursor-pointer transition-colors duration-300 hover:text-[#7EBCD4]" />
            <FaTwitter className="text-2xl cursor-pointer transition-colors duration-300 hover:text-[#7EBCD4]" />
          </div>
        </div>
        <div className=" mx-20 md:ml-16 text-left">
          <h3 className="font-medium text-xl">Explore</h3>
          <ul className="text-xs space-y-3 text-gray-400">
            <li>About Us</li>
            <li>Services</li>
            <li>Pricing</li>
            <li>Blog</li>
            <li>Contact</li>
          </ul>
        </div>
        <div className=" text-left">
          <h3 className="text-xl">Contact</h3>
          <ul className="text-xs space-y-3 text-gray-400">
            <li>Email</li>
            <li>Phone</li>
            <li>Address</li>
            <li>Social Media</li>
          </ul>
        </div>
        <div className=" ml-12 text-start">
          <h3 className="text-xl">Newsletter</h3>
          <p className="text-xs text-gray-400">
            Subscribe to our newsletter to stay informed about our latest
            products, services, and promotions.
            <br />
            Feel free to unsubscribe anytime!
          </p>
          <div className=" flex items-center mt-7 text-black">
            <input
              type="email"
              placeholder="Enter Your Email Address ..."
              className="p-2 outline-none rounded-lg mr-2"
            />
            <button className=" bg-[#7EBCD4] text-[#141627] px-4 py-2 rounded-lg transition-all duration-300 hover:bg-white hover:text-[#7EBCD4]">
              &rarr;
            </button>
          </div>
        </div>
      </footer>

      <div className=" md:hidden text-center ml-64">
        <h2 className=" mb-2 mr-28 text-5xl font-bold bg-gradient-to-br from-sky-300 to-white text-transparent bg-clip-text">
          WAVE<span className="font-normal">NET</span>
        </h2>
        <div className="flex justify-center space-x-5 my-5">
          <FaInstagram className="text-2xl cursor-pointer transition-colors duration-300 hover:text-[#7EBCD4]" />
          <FaFacebookF className="text-2xl cursor-pointer transition-colors duration-300 hover:text-[#7EBCD4]" />
          <FaTwitter className="text-2xl cursor-pointer transition-colors duration-300 hover:text-[#7EBCD4]" />
        </div>
      </div>

      <div className="footer-bottom w-full border-t border-white py-2 text-center text-sm text-gray-600 mt-5">
        <p className="md:float-left md:p-2 m-0">
          Copyright © 2023 for WaveNet. All rights reserved.
        </p>
        <p className="md:float-right md:p-2 m-0">
          Terms & Conditions | Privacy Policy
        </p>
      </div>
    </div>
  );
}

export default Footer;