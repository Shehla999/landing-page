import React from "react";

function Home() {
  return (
    <section className="bg-white py-20">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between py-24 ">
        <div className="flex flex-col w-full md:w-1/2 text-left ">
          <h1 className="text-4xl md:text-5xl font-bold text-textColor mb-4">
            Good health Starts with What You
            <span className="text-buttonColor">Eat</span>
          </h1>

          <p className="text-textColor mb-6">
            Want to eat more mindfully? Track meals, learn about your habits,
            and reach your goals with FitFuel.
          </p>

          <div className="flex space-x-4 mb-6 ">
            <a
              href="#"
              className="flex items-center border border-gray-300 rounded-lg p-2 px-4 py-3 shadow-md"
            >
              <img src="/Apple.jfif" alt="Apple" className="h-6 mr-4" />
              <div>
                <p className="text-xs text-gray-500">Download on the</p>
                <p className="text-sm font-semibold text-gray-800">App Store</p>
              </div>
            </a>
            <a
              href="#"
              className="flex items-center border border-gray-300 rounded-lg p-2 px-4 py-3  shadow-md"
            >
              <img src="/google.png" alt="Google Play" className="h-6 mr-2" />
              <div>
                <p className="text-xs text-gray-500">Download on the</p>
                <p className="text-sm font-semibold text-gray-800">
                  Google Play
                </p>
              </div>
            </a>
          </div>
          <div className="flex items-center space-x-2">
            <img src="/frame 244.png" alt="Frame" />
            <div className="flex flex-col items-center">
              <span>
                <img src="/Group 1.png" alt="Group" className="" />
              </span>
              <p ml-2 text-textColor>
                4.9 stars over 1.2k rated
              </p>
            </div>
          </div>
        </div>
        <div className="flex justify-center md:w-1/2 p-4 ">
          <img
            src="home.png"
            alt="Home"
            className="w-full max-w-sm md:max-w-full "
          />
        </div>
      </div>
    </section>
  );
}

export default Home;
