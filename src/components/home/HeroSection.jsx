import React from "react";
import { useNavigate } from "react-router-dom";
import {ReactTyped} from "react-typed";

const HeroSection = ({onExploreClick}) => {
    const contactUsClick = () => {

      navigate("/about");
      setTimeout(() => {
        document.getElementById("contact-form")?.scrollIntoView({ behavior: "smooth" });
      }, 300);
  };
  const navigate = useNavigate();
  return (
    <section className="bg-gradient-to-r from-secondary via-secondary-light to-secondary text-primary py-20">
      <div className="max-w-5xl mx-auto px-6">
        {/* Headline */}
        <h1 className="text-4xl md:text-6xl text-center font-extrabold mb-6 leading-tight">
          Shaping Excellence,  
          <br /> Empowering Your Future
        </h1>

        {/* Typed text */}
        <h2 className="text-2xl md:text-4xl font-semibold mb-4 text-center md:text-left lg:ml-28">
          We Specialize In{" "}
          <span className="bg-black/70 text-yellow-400 px-2 py-1 rounded-md">
            <ReactTyped
              strings={[
                "Excellence Tuitions",
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
        <p className="text-lg md:text-lg mb-8 text-gray-700 max-w-3xl mx-auto text-center">
          Since 2020, <span className="font-bold text-yellow-800">Excellence Group of Institutes</span> has been 
          redefining learning and technology in Ludhiana. With integrity, innovation, 
          and a passion for quality, we prepare you to lead in academics, IT, and the digital world.
        </p>

        {/* CTA Buttons */}
        <div className="flex justify-center gap-4">
          <button onClick={onExploreClick} className="bg-yellow-400 text-black px-6 py-3 rounded-lg font-medium hover:cursor-pointer hover:bg-yellow-500 transition shadow-md">
            Explore Our Services
          </button>
          <button onClick={contactUsClick} className="border hover:cursor-pointer border-black px-6 py-3 rounded-lg font-medium hover:bg-secondary-hover hover:text-white transition shadow-md">
            Get in Touch
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
