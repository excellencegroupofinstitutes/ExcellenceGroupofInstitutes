import React from "react";
import { useNavigate } from "react-router-dom";
import { ReactTyped } from "react-typed";

const HeroSection = ({ onExploreClick }) => {
  const contactUsClick = () => {
    navigate("/about");
    setTimeout(() => {
      document
        .getElementById("contact-form")
        ?.scrollIntoView({ behavior: "smooth" });
    }, 300);
  };
  const navigate = useNavigate();
  return (
    <section className="text-primary max-w-[1560px] relative mx-auto py-13 md:py-25">
      <div
        className="absolute top-10 left-20 w-96 h-96 rounded-full 
                  bg-[radial-gradient(circle,rgba(248,203,33,0.5),transparent)] 
                  opacity-70 blur-3xl"
      ></div>

      <div
        className="absolute bottom-20 right-32 w-92 h-92 rounded-full 
                  bg-[radial-gradient(circle,rgba(248,203,33,0.4),transparent)] 
                  opacity-70 blur-3xl"
      ></div>

      <div className="max-w-5xl mx-auto px-6">
        <div className="flex justify-center gap-1 relative">

          <img
            src="/images/undraw_fun-star.svg"
            alt="arrow"
            className="opacity-50 size-7"
          />
          <h2 className="text-center text-xl pb-4 w-fit ">
            Welcome to Excellence Group
          </h2>
          <img
            src="/images/undraw_fun-star.svg"
            alt="arrow"
            className="opacity-50 size-7 transform scale-x-[-1]"
          />

        </div>
        {/* Headline */}
        <h1 className="text-3xl md:text-5xl text-center font-bold mb-6 leading-tight">
          We believe that Excellence should <br />

          reflect in every service we provide
        </h1>

        {/* Typed text */}
        <h2 className="text-xl h-[170px] [@media(min-width:375px)]:h-auto leading-12 md:text-3xl mt-10 font-[500] mb-8 text-center lg:text-centre mx-auto  ">
          We have three verticals <br />
          <span className="bg-secondary text-primary px-2 py-1 rounded-md">
            <ReactTyped
              strings={[
                "Excellence Educational Institute",
                "Excellence Computer Centre",
                "Excellence Web Services",
              ]}
              typeSpeed={50}
              backSpeed={40}
              loop
            />
          </span>
        </h2>

        {/* Description */}

        <p className="text-sm sm:text-base px-4 md:text-lg mb-8 text-gray-700 max-w-3xl mx-auto text-center">
          <span className="font-bold text-yellow-800">
            Excellence Group of Institutes
          </span>{" "}
          has been redefining learning and technology. <br /> Estd. 2020
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col items-center px-4 md:flex-row md:justify-center gap-4">
          {/* Primary Button */}
          <button
            onClick={onExploreClick}
            className="text-white w-full max-w-[200px] bg-secondary transform transition-all rounded-sm duration-300 font-[500] py-3 hover:translate-y-1 hover:cursor-pointer"
          >
            Explore Our Services
          </button>

          {/* Secondary Button */}
          <button
            onClick={contactUsClick}
            className="text-black bg-transparent border transform transition-all rounded-sm duration-300 font-[500] py-3 max-w-[200px] md:max-w-[150px] hover:translate-y-1 hover:cursor-pointer w-full"
          >
            Get in Touch
          </button>
        </div>

      </div>
    </section>
  );
};

export default HeroSection;
