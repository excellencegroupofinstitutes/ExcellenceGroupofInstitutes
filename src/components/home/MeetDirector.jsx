import React from "react";

const MeetDirector = () => {
  return (
    <section className="bg-white text-primary py-10 px-4 sm:py-16 sm:px-6 max-w-[1200px] mx-auto">
      <div className="grid md:grid-cols-2 gap-8 sm:gap-10 items-center">
        {/* Left Content */}
        <div className="text-center md:text-left">
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold leading-snug sm:leading-tight">
            Meet Our Director
          </h2>
          <p className="text-gray-500 text-xs sm:text-sm mt-1">
            Suryansh Wadhwa, Director – Excellence Group of Institutes
          </p>
          <p className="mt-4 sm:mt-6 text-sm sm:text-lg text-gray-700 leading-relaxed">
            Our director has over 5 years of experience in driving innovation,
            building scalable businesses, and leading teams to success. With a
            strong vision and commitment to excellence, they continue to guide
            our organization towards a bright and sustainable future.
          </p>
        </div>

        {/* Right Image */}
        <div className="relative flex justify-center items-center">
          {/* Yellow Diamond Background */}
          <div className="absolute w-36 h-36 sm:w-72 sm:h-72 bg-secondary transform rotate-45 rounded-lg"></div>

          {/* Director Image */}
          <img
            src="/images/director.png"
            alt="Director"
            className="relative w-40 h-52 sm:w-68 sm:h-102 object-cover rounded-lg grayscale"
          />
        </div>
      </div>
    </section>
  );
};

export default MeetDirector;
