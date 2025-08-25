import React from "react";
import FancyButton from "../FancyButton";

const CoreSection = () => {
  return (
    <section className="text-black py-16">
      <div className="max-w-[1280px] mx-auto px-6 space-y-16">
        
        {/* Tuition Section */}
        <div className="flex flex-col md:flex-row items-center gap-8">
          <img
            src="/images/tuition-blob.png"
            alt="tuition"
            className="w-full max-w-[600px] h-auto max-h-[600px] object-cover"
          />
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold mb-4">Tuition</h2>
            <p className="text-lg mt-2 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
              pretium suscipit ligula, id placerat eros euismod vel. Integer
              bibendum mauris in sem blandit, nec luctus lacus luctus.
            </p>
            <div className="mt-5">
              <FancyButton>Read More</FancyButton>
            </div>
          </div>
        </div>

        {/* Web Service Section */}
        <div className="flex flex-col-reverse md:flex-row items-center gap-8">
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold mb-4">Web Services</h2>
            <p className="text-lg mt-2 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
              pretium suscipit ligula, id placerat eros euismod vel. Integer
              bibendum mauris in sem blandit, nec luctus lacus luctus.
            </p>
            <div className="mt-5">
              <FancyButton>Read More</FancyButton>
            </div>
          </div>
          <img
            src="/images/tuition-blob.png"
            alt="web services"
            className="w-full max-w-[600px] h-auto max-h-[600px] object-cover"
          />
        </div>

        {/* Computer Center Section */}
        <div className="flex flex-col md:flex-row items-center gap-8">
          <img
            src="/images/tuition-blob.png"
            alt="computer center"
            className="w-full max-w-[600px] h-auto max-h-[600px] object-cover"
          />
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold mb-4">Computer Center</h2>
            <p className="text-lg mt-2 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
              pretium suscipit ligula, id placerat eros euismod vel. Integer
              bibendum mauris in sem blandit, nec luctus lacus luctus.
            </p>
            <div className="mt-5">
              <FancyButton>Read More</FancyButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoreSection;
