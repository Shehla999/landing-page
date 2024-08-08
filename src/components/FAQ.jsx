import React from "react";
// import bgimage from "../assets/images/bg.jpg";
import "./Style.css";
import mobile from "../assets/images/3mobile.png";

const FAQ = () => {
  return (
    <div className="bg-cover bg-center bg-no-repeat text-white py-12 px-10 flex flex-col md:flex-row items-center justify-between promo-section ">
      <div className="md:w-1/2  text-center md:text-left mb-10 md:mb-0 ml-24">
        <h2 className="text-4xl font-bold mb-4">Ready To Get Started?</h2>
        <p className="text-white mb-6">
          Lorem Ipsum Dolor Sit Amet Consectetur. Morbi Quam Tortor Adipiscing
          Gravida In Acumsan Vulpulate.
        </p>
        <button className="bg-white text-black px-6 py-3 rounded-lg flex items-center">
          <span className="mr-2">Download App</span>
          <img src="/Apple.jfif" alt="Apple" className="w-5 h-5" />
        </button>
      </div>
      <div className="md:w-1/2 flex justify-center">
        <img src={mobile} alt="mobile" className="w-full h-auto" />
      </div>
    </div>
  );
};

export default FAQ;
