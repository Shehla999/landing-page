import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [show, setShow] = useState(false);

  return (
    <header className="bg-white shadow-md fixed w-full">
      <div className="container mx-auto p-4 flex justify-between items-center ">
        <div className="flex items-center space-x-4">
          <img src="/Vector.png" alt="ASL" className="h-8" />
          <span className="text-lg font-bold">FitFuel</span>
        </div>
        <nav className="hidden md:flex space-x-6">
          <ul className="flex space-x-6">
            <li className="text-textColor hover:text-gray-800 cursor-pointer">
              <a href="#about">About Us</a>
            </li>

            <li className="text-textColor hover:text-gray-800 cursor-pointer">
              <a href="#features">Features</a>
            </li>

            <li className="text-textColor hover:text-gray-800 cursor-pointer">
              <a href="#pricing">Pricing</a>
            </li>

            <li className="text-textColor hover:text-gray-800 cursor-pointer">
              <a href="#faq">FAQ</a>
            </li>
          </ul>
        </nav>
        <div className="hidden md:block">
          <button className="bg-buttonColor text-white px-4 py-2 rounded-lg">
            Get the App
          </button>
        </div>
      </div>
      <div className="md:hidden z-50">
        <button
          className="fixed right-7 top-2  border-2 text-black p-2 focus:outline-none "
          onClick={() => setShow(!show)}
        >
          <FontAwesomeIcon icon={faBars} />
        </button>
      </div>
      {show && (
        <div className="md:hidden bg-white text-buttonColor p-4 absolute top-16 left-0 border-2 border-buttonColor shadow-lg w-full ">
          <ul>
            <li className=" block py-2 px-4 hover:text-gray-800 cursor-pointer">
              <a href="#about" onClick={() => setShow(false)}>
                About Us
              </a>
            </li>

            <li className="block py-2 px-4 hover:text-gray-800 cursor-pointer">
              <a href="#features" onClick={() => setShow(false)}>
                Features
              </a>
            </li>

            <li className="block py-2 px-4 hover:text-gray-200 cursor-pointer">
              <a href="#pricing" onClick={() => setShow(false)}>
                Pricing
              </a>
            </li>

            <li className="block py-2 px-4  hover:text-gray-200 cursor-pointer">
              <a href="#faq" onClick={() => setShow(false)}>
                FAQ
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
