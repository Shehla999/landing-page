import React from "react";

function Feature() {
  return (
    <div className="items-center pt-10 bg-white ">
      <div className="flex justify-center items-center mb-6 ">
        <div className="bg-purple-100 text-purple-500 font-medium py-2 px-12 rounded-sm ">
          Feature
        </div>
        <img src="/Group.png" alt="Group" className="h-18 w-18" />
      </div>
      <h2 className="flex justify-center  text-3xl font-bold mb-6">
        Impressive Features
      </h2>
      <div className="flex justify-center items-center space-x-6">
        <div className=" grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg-grid-cols-4 gap-16  text-center">
          <div>
            <div className="flex justify-center p-4  mb-2">
              <img src="/Frame 268.png" />
            </div>
            <h3 className="font-bold text-sm">
              Pin a song to your profile page
            </h3>
            <p>
              Lorem ipsum dolor sit amet <br />
              consectetur.
            </p>
          </div>

          <div>
            <div className="flex justify-center p-4  mb-2">
              <img src="/Frame 269.png" />
            </div>
            <h3 className="font-bold text-sm">Play the game karaoke</h3>
            <p>
              Lorem ipsum dolor sit amet <br />
              consectetur.
            </p>
          </div>

          <div>
            <div className="flex justify-center p-4  mb-2">
              <img src="/Frame 266.png" />
            </div>
            <h3 className="font-bold text-sm">Make custom volume settings</h3>
            <p>
              Lorem ipsum dolor sit amet <br />
              consectetur.
            </p>
          </div>
        </div>
      </div>

      <div className="bg-white py-6 ">
        <div className="container mx-auto px-6 md:flex md:items-center ">
          <div className="md:w-1/2">
            <h1 className="text-3xl font-bold mb-6">Easy houseplant care</h1>
            <p className="text-textColor mb-6">
              Follow the professional planting advice of your gardening
              companion — detailed plant care tutorials with reminders, unique
              articles, and personalized assistance.
            </p>
            <button className="bg-buttonColor text-white rounded-full px-12 py-3  hover:bg-green-700 transition duration-300 ">
              Get Access
            </button>
          </div>
          <div className="md:w-1/2 mt- md:mt-0 md-flex md:justify-center">
            <img src="/mobile.png" alt="Mobile" className="w-2/3 md:w-full" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Feature;
