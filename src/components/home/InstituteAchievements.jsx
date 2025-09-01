import React from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

const InstituteAchievements = () => {
  const { ref: counterRef, inView } = useInView({ triggerOnce: true });

  return (
    <section className="relative bg-white max-w-[1280px] mx-auto py-10 px-4 md:py-16 md:px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 items-center gap-8 md:gap-12">
        {/* Left: Image */}
        <div className="relative z-10">
          <img
            src="images/achievements.avif"
            alt="Institute Achievements"
            className="rounded-lg shadow-xl w-full max-w-full sm:max-w-md mx-auto"
          />
        </div>

        {/* Right: Text */}
        <div className="relative z-10 space-y-4 text-center lg:text-left">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800">
            Our Achievements
          </h2>
          <p className="text-gray-600 font-medium tracking-wide text-sm sm:text-base">
            Empowering students with knowledge, skills, and success stories for years.
          </p>

          <div className="space-y-4">
            <div>
              <h4 className="font-semibold text-gray-800 text-base sm:text-lg">
                Certified Quality
              </h4>
              <p className="text-gray-600 text-sm sm:text-base">
                An IAF ISO 9001:2015 certified institute trusted by thousands of learners.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 text-base sm:text-lg">
                Diverse Learning
              </h4>
              <p className="text-gray-600 text-sm sm:text-base">
                From school tuitions to professional computer and web courses – we cover it all.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Box */}
      <div
        ref={counterRef}
        className="mx-auto mt-12 md:mt-20 w-full sm:w-[90%] md:w-[70%] bg-gradient-to-r from-primary to-primary/70 text-white rounded-xl shadow-xl py-6 px-4 sm:px-6 grid grid-cols-2 gap-6 sm:gap-0 md:grid-cols-4 text-center"
      >
        <div>
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold">
            {inView ? <CountUp end={200} duration={3} /> : 0}+
          </h3>
          <p className="font-medium text-sm sm:text-base">Students Trained</p>
        </div>
        <div>
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold">
            {inView ? <CountUp end={20} duration={3} /> : 0}+
          </h3>
          <p className="font-medium text-sm sm:text-base">Courses Offered</p>
        </div>
        <div>
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold">
            {inView ? <CountUp end={7} duration={3} /> : 0}+
          </h3>
          <p className="font-medium text-sm sm:text-base">Years of Excellence</p>
        </div>
        <div>
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold">
            {inView ? <CountUp end={100} duration={3} /> : 0}+
          </h3>
          <p className="font-medium text-sm sm:text-base">Success Stories</p>
        </div>
      </div>
    </section>
  );
};

export default InstituteAchievements;
