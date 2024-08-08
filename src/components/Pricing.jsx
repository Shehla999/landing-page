import React from "react";
import Group from "../assets/images/Group 1.png";
import Group1 from "../assets/images/US.jfif";
import Group2 from "../assets/images/GB.png";
import Group3 from "../assets/images/au.png";
import Group4 from "../assets/images/it.png";
import illustration from "../assets/images/transistor.png";
const pricing = [
  {
    title: "perfect",
    text: "I love this app, it's helped me finally get a lot of the habits in place that I've been trying to get down for years!",
    user: "Beth L. Brown",
    country: Group1,
    rating: Group,
  },
  {
    title: "Incredibly elegant",
    text: "This is by far the best designed app for habit tracking. Most importantly it's super easy to use and will really help you with your habits.",
    user: "Jacobean Era",
    country: Group2,
    rating: Group,
  },
  {
    title: "Incredibly elegant",
    text: "This is by far the best designed app for habit tracking. Most importantly it's super easy to use and will really help you with your habits.",
    user: "Nicolò Borghi",
    country: Group3,
    rating: Group,
  },
  {
    title: "A new favorite",
    text: "I love this app! Love the feeling of checking things off a list & this app gives me that same satisfaction in helping me create healthy habits.",
    user: "Bam Burn",
    country: Group4,
    rating: Group,
  },
];

const Pricing = () => {
  return (
    <div className="bg-white py-10">
      <h1 className="text-3xl font-bold mb-8">
        What Our Users Say <br /> About Us?
      </h1>
      <div className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8 px-5 py-5 md:px-20 bg-black text-white  ">
        {pricing.map((pricing, index) => (
          <div key={index} className=" p-6 rounded-lg border-2 border-gray-200">
            <div className="flex items-center justify-between">
              <h3 className="font-bold underline text-xl mb-2">
                {pricing.title}
              </h3>
              <img src={pricing.rating} alt="rating" className=" w-20 h-4" />
            </div>
            <p className="mb-4">{pricing.text}</p>
            <div className="flex items-center justify-end">
              <img src={pricing.country} alt="flag" className="w-6 h-4 mr-2" />
              <span>{pricing.user}</span>
              <div></div>
            </div>
          </div>
        ))}
      </div>
      <div className="flex flex-col md:flex-row items-center justify-between  bg-white">
        <div className="md:w-1/2 flex justify-center">
          <img
            src={illustration}
            alt="illustration"
            className="w-64 h-64 md:w-auto md:h-auto"
          />
        </div>
        <div className=" md:w-1/2 text-center md:text-left grid md:grid-cols-2 grid-cols-1   ">
          <div>
            <h2 className="text-4xl font-bold mb-4">It's called value</h2>
            <p className="text-textColor mb-4">
              Get the latest articles and business updates that you need to
              know, you’ll even get special recommendations weekly.
            </p>
            <div className="flex  justify-center md:justify-start items-center bg-gray-100 border-non rounded-2xl">
              <input
                type="email"
                placeholder="Your Email"
                className="p-3 rounded-l-full border-none bg-gray-100 flex-1 focus-outline-none"
              />
              <button className="p-3 bg-blue-600 text-white rounded-r-2xl rounded-bl-2xl  ">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Pricing;
