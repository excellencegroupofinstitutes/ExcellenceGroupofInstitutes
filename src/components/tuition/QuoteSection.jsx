import React from "react";
import { Quote } from "lucide-react"; // for nice quote icon

const QuoteSection = () => {
  return (
    <section className="relative bg-gray-50 py-20 px-6 max-w-[1560px] mx-auto">
      <div className="max-w-4xl mx-auto text-center text-gray-900">
        {/* Quote Icon */}
        <Quote className="mx-auto text-secondary opacity-70 w-12 h-12 mb-6" />

        {/* Quote Text */}
        <h2 className="text-3xl md:text-7xl font-[400] italic leading-snug text-secondary">
          <span className="text-gray-700">“Practical learning</span> is what makes us different.”
        </h2>

        {/* Divider */}
        <div className="mt-6 w-20 h-1 bg-secondary mx-auto rounded-full"></div>

        {/* Attribution / Subtitle */}
        <p className="mt-4 text-lg text-primary font-medium">
          — Our Institution Philosophy
        </p>
      </div>
    </section>
  );
};

export default QuoteSection;
