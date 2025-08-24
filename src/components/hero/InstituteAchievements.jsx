import React from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
// import achievementImage from "../assets/achievements.avif"; // replace with your own image

const InstituteAchievements = () => {
  const { ref: counterRef, inView } = useInView({ triggerOnce: true });

  return (
    <section className="relative bg-white pt-16 pb-36 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 items-center gap-10">
        {/* Left: Image */}
        <div className="relative z-10">
          <img
            src="images/achievements.avif"
            alt="Institute Achievements"
            className="rounded-lg shadow-xl w-full max-w-md mx-auto"
          />
        </div>

        {/* Right: Text */}
        <div className="relative z-10 space-y-6 text-center lg:text-left">
          <h2 className="text-4xl font-bold text-gray-800">Our Achievements</h2>
          <p className="text-gray-600 font-medium tracking-wide">
            Empowering students with knowledge, skills, and success stories for years.
          </p>

          <div className="space-y-4">
            <div>
              <h4 className="font-semibold text-gray-800">Certified Quality</h4>
              <p className="text-gray-600">
                An IAF ISO 9001:2015 certified institute trusted by thousands of learners.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800">Diverse Learning</h4>
              <p className="text-gray-600">
                From school tuitions to professional computer and web courses – we cover it all.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Box */}
      <div
        ref={counterRef}
        className="absolute bottom-[10px] left-1/2 transform -translate-x-1/2 w-[90%] md:w-[70%] bg-gradient-to-r from-yellow-500 to-orange-500 text-white rounded-xl shadow-xl py-6 px-6 grid grid-cols-2 md:grid-cols-4 justify-between text-center z-20"
      >
        <div>
          <h3 className="text-4xl font-extrabold">
            {inView ? <CountUp end={200} duration={3} /> : 0}+
          </h3>
          <p className="font-medium">Students Trained</p>
        </div>
        <div>
          <h3 className="text-4xl font-extrabold">
            {inView ? <CountUp end={20} duration={3} /> : 0}+
          </h3>
          <p className="font-medium">Courses Offered</p>
        </div>
        <div>
          <h3 className="text-4xl font-extrabold">
            {inView ? <CountUp end={7} duration={3} /> : 0}+
          </h3>
          <p className="font-medium">Years of Excellence</p>
        </div>
        <div>
          <h3 className="text-4xl font-extrabold">
            {inView ? <CountUp end={100} duration={3} /> : 0}+
          </h3>
          <p className="font-medium">Success Stories</p>
        </div>
      </div>
    </section>
  );
};

export default InstituteAchievements;
