import React from "react";

const OurServices = () => {
  return (
    <section className="relative py-10 mt-20">
      <div className="max-w-[1360px] mx-auto ">
        <div>
        <svg viewBox="0 0 800 150" className="w-full">
          <defs>
            <pattern
              id="wave"
              x="0"
              y="0"
              width="200"
              height="40"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M-40 20 Q-20 0 0 20 T40 20 T80 20 T120 20 T160 20 T200 20 V40 H-40z"
                fill="var(--color-secondary)"
              />
            </pattern>
          </defs>

          <text x="50" y="100" fontSize="100" fontWeight="bold">
            <tspan className="letter" x="50">
              S
            </tspan>
            <tspan className="letter" x="100">
              E
            </tspan>
            <tspan className="letter" x="150">
              R
            </tspan>
            <tspan className="letter" x="210">
              V
            </tspan>
            <tspan className="letter" x="275">
              I
            </tspan>
            <tspan className="letter" x="301">
              C
            </tspan>
            <tspan className="letter" x="357">
              E
            </tspan>
            <tspan className="letter" x="407">
              S
            </tspan>
          </text>
        </svg>
        </div>

        <div className="">

        </div>

      </div>
    </section>
  );
};

export default OurServices;
