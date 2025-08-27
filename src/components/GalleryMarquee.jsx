import React from "react";

// Sample image arrays - replace with your actual images
const row1 = [
  "https://picsum.photos/400/225?random=1",
  "https://picsum.photos/400/225?random=2",
  "https://picsum.photos/400/225?random=3",
  "https://picsum.photos/400/225?random=4",
  "https://picsum.photos/400/225?random=5",
  "https://picsum.photos/400/225?random=6",
  "https://picsum.photos/400/225?random=7",
  "https://picsum.photos/400/225?random=8",
];

const row2 = [
  "https://picsum.photos/400/225?random=9",
  "https://picsum.photos/400/225?random=10",
  "https://picsum.photos/400/225?random=11",
  "https://picsum.photos/400/225?random=12",
  "https://picsum.photos/400/225?random=13",
  "https://picsum.photos/400/225?random=14",
  "https://picsum.photos/400/225?random=15",
  "https://picsum.photos/400/225?random=16",
];

export default function GalleryMarquee({
  height = "12rem", // Changed to rem for better responsiveness
  gap = 16,
  images1 = row1,
  images2 = row2,
}) {
  // Duplicate arrays to create seamless loop
  const r1 = [...images1, ...images1];
  const r2 = [...images2, ...images2];

  return (
    <section className="relative py-12 bg-white">
      {/* Local styles for marquee animation + masks */}
      <style>{`
        @keyframes marquee-ltr {
          0%   { transform: translateX(-50%); }
          100% { transform: translateX(0%); }
        }
        @keyframes marquee-rtl {
          0%   { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
        .marquee-track {
          display: flex;
          align-items: center;
          width: 200%;
          will-change: transform;
        }
        .marquee-rtl { 
          animation: marquee-rtl linear infinite; 
        }
        .marquee-ltr { 
          animation: marquee-ltr linear infinite; 
        }

        /* Pause on hover */
        .marquee:hover .marquee-rtl,
        .marquee:hover .marquee-ltr { 
          animation-play-state: paused; 
        }

        /* Respect reduced motion */
        @media (prefers-reduced-motion: reduce) {
          .marquee-rtl, .marquee-ltr { 
            animation: none !important; 
          }
        }

        /* Edge fade using mask */
        .edge-fade {
          -webkit-mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
          mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
        }
      `}</style>

      <div className="max-w-7xl mx-auto px-6 space-y-8">
        {/* Row 1 - Moving Right to Left */}
        <div
          className="marquee relative edge-fade overflow-hidden rounded-3xl bg-gray-50 shadow-sm"
          style={{ height }}
        >
          <div
            className="marquee-rtl marquee-track"
            style={{ 
              gap: `${gap}px`, 
              animationDuration: "28s", 
              animationDelay: "-2.2s" 
            }}
          >
            {r1.map((src, i) => (
              <img
                key={`r1-${i}`}
                src={src}
                alt={`Gallery image ${i + 1}`}
                className="h-full w-auto aspect-video object-cover rounded-2xl shadow transition-transform duration-300 hover:scale-[1.03] flex-shrink-0"
                loading="lazy"
                draggable="false"
              />
            ))}
          </div>
        </div>

        {/* Row 2 - Moving Left to Right */}
        <div
          className="marquee relative edge-fade overflow-hidden rounded-3xl bg-gray-50 shadow-sm"
          style={{ height }}
        >
          <div
            className="marquee-ltr marquee-track"
            style={{ 
              gap: `${gap}px`, 
              animationDuration: "22s", 
              animationDelay: "-6.1s" 
            }}
          >
            {r2.map((src, i) => (
              <img
                key={`r2-${i}`}
                src={src}
                alt={`Gallery image ${i + 1}`}
                className="h-full w-auto aspect-video object-cover rounded-2xl shadow transition-transform duration-300 hover:scale-[1.03] flex-shrink-0"
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