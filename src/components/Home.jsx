import React from "react";

function Home() {
  return (
    <section className="bg-white pb-0 ">
      <div className="container mx-auto flex flex-col md:flex-row items-center md:justify-between py-24 ">
        <div className="flex flex-col w-full md:w-1/2 text-left md:items-start items-center justify-center px-10 ">
          <h1 className="text-4xl md:text-3xl font-bold text-textColor mb-0">
            Good health Starts <br />
            <span>with</span> What You{" "}
            <span className="text-buttonColor">Eat</span>
          </h1>
          <div className="underline bg-buttonColor mb-8 w-8 h-1 rounded-full "></div>
          <p className="text-textColor mb-6">
            Want to eat more mindfully? Track meals, learn about <br /> your
            habits, and reach your goals with FitFuel.
          </p>

          <div className=" flex gap-4 grid-cols-2  mb-6  ">
            <a
              href="#"
              className="flex items-center border border-gray-300 rounded-lg px-4 py-3 md:px-2 shadow-md"
            >
              <img src="/Apple.jfif" alt="Apple" className="h-6 mr-2" />
              <div>
                <p className="text-xs text-gray-500">Download on the</p>
                <p className="text-sm font-semibold text-gray-800">App Store</p>
              </div>
            </a>
            <a
              href="#"
              className="flex items-center border border-gray-300 rounded-lg p-2 px-4 py-3 md:px-2 shadow-md"
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
            className="w-[30rem] max-w-sm md:max-w-full "
          />
        </div>
      </div>
    </section>
  );
}

export default Home;
