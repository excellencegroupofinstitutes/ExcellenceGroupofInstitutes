import React from "react";

const Video = () => {
  return (
    <section className="bg-[#fef9f6] py-16 px-6">
      <div className="max-w-6xl mx-auto text-center">
        {/* Title */}
        <h2
          className="text-4xl md:text-5xl font-extrabold mb-8 text-primary"
          style={{ fontFamily: "Raleway, sans-serif" }}
        >
          Excellence Tuitions
        </h2>

        {/* CTA Button */}
        <a
          href="https://www.youtube.com/@excellencetuitions"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-secondary text-primary font-semibold px-8 py-3 rounded-full shadow-md hover:bg-secondary-hover transition duration-300 mb-10"
        >
          Visit Our YouTube Channel
        </a>

        {/* Video Section */}
        {/* <div className="relative pb-[56.25%] h-0 overflow-hidden rounded-2xl shadow-lg border border-secondary-light">
          <iframe
            className="absolute top-0 left-0 w-full h-full rounded-2xl"
            src="https://www.youtube.com/embed/M2102KrfCR0?autoplay=1&mute=1&rel=0"
            title="Excellence Tuitions Video"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div> */}
      </div>
    </section>
  );
};

export default Video;
