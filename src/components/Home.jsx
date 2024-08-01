import React from "react";

function Home() {
  return (
    <section className="bg-white py-20">
      <div className="container mx-auto flex flex-col md:flex-row py-24 ">
        <div className="flex flex-col w-full md:w-1/2 px-4 justify-start">
          <h1 className="text-4xl md:text-5xl font-bold text-textColor mb-4">
            Good health Starts <br /> with What You{" "}
            <span className="text-buttonColor">Eat</span>
          </h1>

          <p className="text-textColor  mb-6">
            Want to eat more mindfully? Track meals, learn about your habits,
            and reach your goals with FitFuel.
          </p>

          <div className="flex space-x-4">
            <a
              href="#"
              className="flex items-center border border-gray-300 rounded-lg p-2 shadow-md"
            >
              <img src="/Apple.jfif" alt="Apple" className="h-6 mr-4" />
              <div>
                <p className="text-xs text-gray-500">Download on the</p>
                <p className="text-sm font-semibold text-gray-800">App Store</p>
              </div>
            </a>
            <a
              href="#"
              className="flex items-center border border-gray-300 rounded-lg p-2 shadow-md"
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
        </div>
        {/* <div className="flex-1 md:w-1/2 p-4 flex justify-center relative">
          <img src="home.png" alt="Home" className="absolute top-64 left-0 transform scale-75 -translate-x-10 z-0" />
          
        </div>

            <div>
              
            </div> */}
      </div>
    </section>
  );
}

export default Home;
