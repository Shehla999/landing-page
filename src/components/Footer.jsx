import React from "react";
import logo from "../assets/images/Vector.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <footer className="bg-pink-200 text-black py-12 px-10 md:px-28 ">
      <div className="container mx-auto  flex flex-wrap justify-between">
        <div className="w-full md:w-1/5 mb-6 md:mb-0">
          <div className="flex items-center space-x-4 mb-4">
            <img src={logo} alt="logo" />
            <span className="text-lg font-bold ">FitFuel</span>
          </div>
          <p className="mb-2">
            <FontAwesomeIcon
              icon={faEnvelope}
              className="mr-3 text-buttonColor"
            />
            Help@Uifry.Com
          </p>
          <p>
            <FontAwesomeIcon icon={faPhone} className="mr-3 text-buttonColor" />
            +1234 456 678 89
          </p>
        </div>

        <div className="w-full md:w-1/5 mb-6 md:mb-0">
          <h3 className="mb-4 font-bold">Links</h3>
          <ul>
            <li className="mb-2">
              <a href="#home" className="hover:underline">
                About Us
              </a>
            </li>

            <li className="mb-2">
              <a href="#feature" className="hover:underline">
                Feature
              </a>
            </li>
            <li className="mb-2">
              <a href="#pricing" className="hover:underline">
                Pricing
              </a>
            </li>
            <li className="mb-2">
              <a href="#faq" className="hover:underline">
                FAQ
              </a>
            </li>
          </ul>
        </div>

        <div className="w-full md:w-1/5 mb-6 md:mb-0">
          <h3 className="mb-4 font-bold">Legal</h3>
          <ul>
            <li className="mb-2">
              <a href="#terms" className="hover:underline">
                Terms of Condition
              </a>
            </li>

            <li className="mb-2">
              <a href="#peivacy" className="hover:underline">
                Privacy Policy
              </a>
            </li>
            <li className="mb-2">
              <a href="#cookies" className="hover:underline">
                Cookies Polocy
              </a>
            </li>
            <li className="mb-2">
              <a href="#faq" className="hover:underline">
                FAQ
              </a>
            </li>
          </ul>
        </div>

        <div className="w-full md:w-1/5 mb-6 md:mb-0">
          <h3 className="mb-4 font-bold">Products</h3>
          <ul>
            <li className="mb-2">
              <a href="#tour" className="hover:underline">
                Take Tour
              </a>
            </li>

            <li className="mb-2">
              <a href="#chat" className="hover:underline">
                Live Chat
              </a>
            </li>
            <li className="mb-2">
              <a href="#reviews" className="hover:underline">
                Reviews
              </a>
            </li>
            <li className="mb-2">
              <a href="#faq" className="hover:underline">
                FAQ
              </a>
            </li>
          </ul>
        </div>

        <div className="w-full md:w-1/5">
          <h3 className="font-bold mb-4">Newsletter</h3>
          <p className="mb-4">Stay Up To Date</p>
          <div className="flex ">
            <input
              type="email"
              placeholder="Your Email"
              className="px-4 py-2 rounded-l-full border border-gray-300  "
            />
            <button className="bg-red-500 text-white px-4 py-2 rounded-r-full">
              Subscribe
            </button>
          </div>
        </div>
      </div>
      <div className=" items-center mt-10">
        <p className="text-xs ">
          copyright 2024 ShehlaMalik.com All rights reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
