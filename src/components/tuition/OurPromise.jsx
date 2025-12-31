import React from "react";

const OurPromise = () => {
  return (
    <section className="mt-24 py-12 max-w-[1560px] mx-auto" aria-labelledby="our-promise-heading">
      <div className="max-w-[1160px] mx-auto flex flex-col lg:flex-row items-center lg:items-start gap-10 px-6 lg:px-0">

        {/* LEFT — Image */}
<div
  className="flex-shrink-0 w-[240px] sm:w-[360px] lg:w-[520px] mx-auto sm:mx-0 p-4 sm:p-6 rounded-full border-4"
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
      height: "240px",          // smaller height on phone
    }}
  >
    <img
      src="/images/Promise-hands.jpg"
      alt="Excellence Group of Institutes - Promise"
      className="w-full h-full object-cover"
    />
  </div>
</div>



        {/* RIGHT — Text */}
        <div className="flex-1">
          <h2
            id="our-promise-heading"
            className="text-4xl lg:text-5xl font-extrabold mb-4"
            style={{ color: "var(--color-secondary)", lineHeight: 1.05 }}
          >
            Our Promise to Students
          </h2>

          <p
            className="text-base lg:text-lg max-w-[780px] mb-6"
            style={{
              fontFamily: "var(--font-content)",
              color: "var(--color-primary)",
              opacity: 0.95,
              lineHeight: 1.7,
            }}
          >
            At <strong>Excellence Group of Institutes</strong>, our promise is simple —
            to help students learn better, build confidence, and achieve
            steady academic growth through structured teaching and caring mentorship.
          </p>

          {/* GRID — Text only (no icons) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-6 gap-x-10 max-w-[780px]">

            <div>
              <h4 className="font-semibold mb-1" style={{ color: "var(--color-primary)" }}>
                Result-Focused Teaching
              </h4>
              <p style={{ color: "var(--color-primary)", opacity: 0.85, fontSize: 14, lineHeight: 1.6 }}>
                Clear concepts, regular assessments, and focused revision for consistent grade improvement.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-1" style={{ color: "var(--color-primary)" }}>
                Personalized Guidance
              </h4>
              <p style={{ color: "var(--color-primary)", opacity: 0.85, fontSize: 14, lineHeight: 1.6 }}>
                Small batches, doubt-clearing support, and tailored study plans for every student.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-1" style={{ color: "var(--color-primary)" }}>
                Safe & Supportive Environment
              </h4>
              <p style={{ color: "var(--color-primary)", opacity: 0.85, fontSize: 14, lineHeight: 1.6 }}>
                A disciplined, motivating atmosphere with regular progress updates for parents.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-1" style={{ color: "var(--color-primary)" }}>
                Confidence & Character Building
              </h4>
              <p style={{ color: "var(--color-primary)", opacity: 0.85, fontSize: 14, lineHeight: 1.6 }}>
                Leadership, communication skills, and discipline are nurtured in every student.
              </p>
            </div>
          </div>

          {/* Fee Policy */}
          <p className="mt-6 text-sm" style={{ color: "var(--color-primary)", opacity: 0.9 }}>
            <strong>Fee policy:</strong> We take{" "}
            <span style={{ color: "var(--color-secondary)", fontWeight: "700" }}>
              20% of fees in advance
            </span>{" "}
            at the time of admission.
          </p>

          <p className="mt-3 text-sm max-w-[700px]" style={{ color: "var(--color-primary)", opacity: 0.8 }}>
            At Excellence, we combine expert teaching with a caring approach so every student
            can reach their highest potential.
          </p>
        </div>
      </div>
    </section>
  );
};

export default OurPromise;
