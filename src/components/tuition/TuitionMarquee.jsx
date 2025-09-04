import React from "react";

// Sample image arrays - replace with your actual images
const row1 = [
    "/images/tuition1.jpg",
    "/images/tuition2.jpg",
    "/images/tuition3.jpg",
    "/images/tuition4.jpeg",
    "/images/tuition5.jpg",
    "/images/banner.jpg",
];



export default function TuitionMarquee({
  height = "auto",
  gap = 16,
  images1 = row1,
}) {
  // Triple the arrays for truly seamless loop
  const r1 = [...images1, ...images1, ...images1];

  return (
    <section className="relative py-10 sm:py-14 bg-white">

      {/* Local styles for marquee animation + masks */}
      <style>{`
        @keyframes marquee-rtl {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-33.333%); }
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
        
    
        
        .marquee:hover .marquee-rtl { 
          animation-play-state: paused; 
        }
        
        @media (prefers-reduced-motion: reduce) {
          .marquee-rtl{ 
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

      </div>
    </section>
  );
}