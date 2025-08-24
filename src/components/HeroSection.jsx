import React from "react";

const HeroSection = () => {
  return (
    <section className="bg-black text-white min-h-screen flex items-center justify-center px-6">
      <div className="container mx-auto grid md:grid-cols-2 gap-10 items-center">
        {/* Left Content */}
        <div>
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
            Altering The Future <br /> Of Web Hosting
          </h1>
          <p className="mt-6 text-lg text-gray-300">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
            commodo ligula eget dolor. Aenean massa. Cum sociis natoque
            penatibus et magnis dis parturient montes, nascetur ridiculus mus.
          </p>
          <button className="mt-8 px-6 py-3 bg-yellow-500 text-black font-semibold rounded-lg shadow-md hover:bg-yellow-400 transition">
            Get Started
          </button>
        </div>

        {/* Right Illustration */}
        <div className="flex justify-center">
          <div className="relative w-80 h-80">
            {/* Background Grid Glow */}
            <div className="absolute inset-0 bg-yellow-500 opacity-10 rounded-xl blur-3xl"></div>
            
            {/* Hosting Blocks */}
            <div className="absolute top-0 left-10 w-28 h-28 bg-white border-4 border-yellow-500 rounded-xl shadow-lg transform rotate-3"></div>
            <div className="absolute top-10 right-10 w-28 h-28 bg-white border-4 border-yellow-500 rounded-xl shadow-lg transform -rotate-3"></div>
            <div className="absolute bottom-10 left-16 w-28 h-28 bg-white border-4 border-yellow-500 rounded-xl shadow-lg"></div>
            <div className="absolute bottom-0 right-10 w-28 h-28 bg-yellow-500 text-black flex items-center justify-center font-bold text-lg rounded-xl shadow-lg">
              ⚡
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
