import React from "react";

function Hero() {
  return (
    <div className="bg-blue-50 min-h-screen flex flex-col justify-center items-center text-center p-6">
      <h1 className="text-5xl font-extrabold text-blue-600 mb-4">
        Firstcall Med
      </h1>
      <p className="text-lg text-gray-700 max-w-2xl mb-6">
        "Your health, our priority."
      </p>
      <p className="text-lg text-gray-700 max-w-2xl mb-6">
        "Quick, reliable, and compassionate care when you need it most."
      </p>
      <p className="text-lg text-gray-700 max-w-2xl">
        "Transforming lives, one call at a time."
      </p>
      <div className="flex gap-4 mt-8">
        <button className="px-6 py-3 bg-blue-500 text-white text-lg font-semibold rounded hover:bg-blue-600">
          Learn More
        </button>
        <button className="px-6 py-3 bg-gray-200 text-gray-800 text-lg font-semibold rounded hover:bg-gray-300">
          Contact Us    
        </button>
      </div>
    </div>
  );
}

export default Hero;
