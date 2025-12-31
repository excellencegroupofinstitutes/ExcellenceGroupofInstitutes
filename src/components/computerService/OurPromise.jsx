import React from "react";

const OurPromiseComputer = () => {
  return (
    <section className="mt-20 py-12 max-w-[1560px] mx-auto">
      <div className="max-w-[1160px] mx-auto flex flex-col lg:flex-row items-center lg:items-start gap-10 px-6 lg:px-0">

        {/* LEFT — Image */}
        <div
          className="flex-shrink-0 w-[220px] sm:w-[340px] lg:w-[480px] mx-auto sm:mx-0 p-4 sm:p-6 rounded-full border-4"
          style={{
            borderColor: "var(--color-secondary)",
            background: "white",
            boxShadow: "0 12px 34px rgba(0,0,0,0.06)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div
            className="rounded-full w-full"
            style={{
              overflow: "hidden",
              height: "220px",
            }}
          >
            <img
              src="/images/Promise-hands.jpg"
              alt="Computer Education Promise"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* RIGHT — Text */}
        <div className="flex-1">
          <h2
            className="text-4xl lg:text-5xl font-extrabold mb-4"
            style={{ color: "var(--color-secondary)", lineHeight: 1.05 }}
          >
            Our Promise
          </h2>

          <p
            className="text-base lg:text-lg max-w-[780px]"
            style={{
              fontFamily: "var(--font-content)",
              color: "var(--color-primary)",
              opacity: 0.95,
              lineHeight: 1.7,
            }}
          >
            We promise to take you beyond the classroom and into the industry.
            From day one, you won't just learn theory; you will work on live,
            industry-demanding projects. We ensure you leave us not just with a
            certificate, but with the confidence and experience of a professional.
          </p>
        </div>
      </div>
    </section>
  );
};

export default OurPromiseComputer;
