import React from "react";
// import directorImg from "/public/images/director.png"; 

const MeetDirector = () => {
  return (
    <section className="bg-white text-primary py-16 px-6 max-w-[1200px] mx-auto">
      <div className="container mx-auto grid md:grid-cols-2 gap-10 items-center ">
        {/* Left Content */}
        <div className="text-center md:text-left justify-center">
          <h2 className="text-4xl md:text-5xl font-extrabold leading-tight">
            Meet Our Director
          </h2>
          <p className="mt-6 text-lg text-gray-700">
            Our director has over 7 years of experience in driving innovation,
            building scalable businesses, and leading teams to success. With a
            strong vision and commitment to excellence, they continue to guide
            our organization towards a bright and sustainable future.
          </p>
        </div>

        {/* Right Image */}
        <div className="relative flex justify-center items-center">
          {/* Yellow Diamond Background */}
          <div className="absolute w-64 h-60 bg-secondary transform rotate-45 rounded-lg "></div>

          {/* Director Image */}
          <img
            src="/images/director.png"
            alt="Director"
            className="relative w-68 h-98 object-cover rounded-lg grayscale"
          />
        </div>
      </div>
    </section>
  );
};

export default MeetDirector;
