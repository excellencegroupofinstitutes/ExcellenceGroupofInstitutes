import React from "react";

// Sample image arrays - replace with your actual images
const row1 = [
  "/images/comp.JPG",
  "/images/team.jpg",
  "/images/director_3.jpg",
  "/images/home-tuition.jpg",
  "images/team_2.jpg", 
  "/images/Computer_students.jpg",
  "/images/director_office.jpg",
];

const row2 = [
  "/images/group.jpg",
  "/images/director2.jpg",
  "images/computer.jpg",
  "/images/outside_students.jpg",
    "/images/compView.jpeg",
  "/images/banner.jpg",
  "/images/batch.jpg",
];

export default function GalleryMarquee({
  height = "auto",
  gap = 16,
  images1 = row1,
  images2 = row2,
}) {
  // Triple the arrays for truly seamless loop
  const r1 = [...images1, ...images1, ...images1];
  const r2 = [...images2, ...images2, ...images2];

  return (
    <section className="relative py-10 sm:py-14 bg-white">
      {/* Local styles for marquee animation + masks */}
      <style>{`
        @keyframes marquee-rtl {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-33.333%); }
        }

        @keyframes marquee-ltr {
          0% { transform: translateX(-33.333%); }
          100% { transform: translateX(0%); }
        }
        
        .marquee-track {
          display: flex;
          align-items: center;
          width: max-content;
          will-change: transform;
        }
        
        .marquee-rtl { 
          animation: marquee-rtl linear infinite; 
        }
        
        .marquee-ltr { 
          animation: marquee-ltr linear infinite; 
        }
        
        .marquee:hover .marquee-rtl,
        .marquee:hover .marquee-ltr { 
          animation-play-state: paused; 
        }
        
        @media (prefers-reduced-motion: reduce) {
          .marquee-rtl, .marquee-ltr { 
            animation: none !important; 
          }
        }
        
        .edge-fade {
          -webkit-mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
          mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
        }
      `}</style>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-6 sm:space-y-8">
        {/* Row 1 - Moving Right to Left */}
        <div
          className="marquee relative edge-fade overflow-hidden rounded-2xl sm:rounded-3xl bg-gray-50 shadow-sm"
          style={{ height }}
        >
          <div
            className="marquee-rtl marquee-track"
            style={{
              gap: `${gap}px`,
              animationDuration: "80s",
              animationDelay: "0s",
            }}
          >
            {r1.map((src, i) => (
              <img
                key={`r1-${i}`}
                src={src}
                alt={`Gallery image ${(i % images1.length) + 1}`}
                className="h-40 sm:h-48 md:h-56 lg:h-64 w-auto aspect-video object-cover rounded-xl sm:rounded-2xl shadow 
                  transition-transform duration-300 hover:scale-[1.03] flex-shrink-0"
                loading="lazy"
                draggable="false"
              />
            ))}
          </div>
        </div>

        {/* Row 2 - Moving Left to Right */}
        <div
          className="marquee relative edge-fade overflow-hidden rounded-2xl sm:rounded-3xl bg-gray-50 shadow-sm"
          style={{ height }}
        >
          <div
            className="marquee-ltr marquee-track"
            style={{
              gap: `${gap}px`,
              animationDuration: "70s",
              animationDelay: "0s",
            }}
          >
            {r2.map((src, i) => (
              <img
                key={`r2-${i}`}
                src={src}
                alt={`Gallery image ${(i % images2.length) + 1}`}
                className="h-40 sm:h-48 md:h-56 lg:h-64 w-auto aspect-video object-cover rounded-xl sm:rounded-2xl shadow 
                  transition-transform duration-300 hover:scale-[1.03] flex-shrink-0"
                loading="lazy"
                draggable="false"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}