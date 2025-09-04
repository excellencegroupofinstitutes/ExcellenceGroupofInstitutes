import React, { useRef, useState, useEffect } from "react";
import {
  Layout,
  Code,
  Monitor,
  Megaphone,
  Search,
  MapPin,
  Share2,
  ThumbsUp,
} from "lucide-react";
import { FaYoutube } from "react-icons/fa";

const services = [
  {
    title: "Website Designing",
    description:
      "We craft modern, responsive, and visually appealing designs that perfectly align with your brand identity.",
    img: "/images/website-design.png",
    icon: Layout,
  },
  {
    title: "Web Development",
    description:
      "Our development team builds secure, scalable, and high-performance websites using the latest technologies.",
    img: "/images/sample-service.png",
    icon: Code,
  },
  {
    title: "IT Services",
    description:
      "From troubleshooting to complete IT management, we provide reliable services that keep your systems running.",
    img: "/images/ItServices.jpeg",
    icon: Monitor,
  },
  {
    title: "Digital Marketing",
    description:
      "Boost your brand visibility with tailored digital marketing strategies that reach the right audience.",
    img: "/images/digital-marketing.png",
    icon: Megaphone,
  },
  {
    title: "SEO Services",
    description:
      "We optimize your website with proven SEO techniques that improve rankings, traffic, and credibility.",
    img: "/images/seo1.png",
    icon: Search,
  },
  {
    title: "Google Listing",
    description:
      "Ensure your business gets noticed with a verified Google listing that improves local visibility.",
    img: "/images/google-listing.jpeg",
    icon: MapPin,
  },
  {
    title: "Social Media Marketing",
    description:
      "Grow your brand with engaging campaigns on popular platforms that build trust and loyalty.",
    img: "/images/social-media.png",
    icon: Share2,
  },
  {
    title: "Facebook & Instagram Ads",
    description:
      "Maximize reach and conversions with data-driven ad campaigns tailored to your business objectives.",
    img: "/images/FI-ads.png",
    icon: ThumbsUp,
  },
  {
    title: "YouTube Ads & Monetisation",
    description:
      "Unlock the power of YouTube with targeted ads to grow your audience and drive revenue.",
    img: "/images/youTube-ads.png",
    icon: FaYoutube,
  },
];




const OurServices = () => {
  const cardRefs = useRef([]);
  const [readCards, setReadCards] = useState([]);

  useEffect(() => {
    const handleScroll = () => {
      cardRefs.current.forEach((el, index) => {
        if (el && !readCards.includes(index)) {
          const rect = el.getBoundingClientRect();
          const elementCenter = rect.top + rect.height / 2;
          const screenCenter = window.innerHeight / 1.2;

          if (elementCenter < screenCenter) {
            setReadCards((prev) => [...prev, index]);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [readCards]);

  return (
    <section className="relative pt-16">
      <div className="max-w-[1360px] mx-auto px-6">
        {/* Heading */}
        <div className="md:hidden text-center mb-12">
          <h2 className="text-4xl font-bold tracking-tight">
            <span className="text-black">Our </span>
            <span className="relative inline-block">
              <span
                className="bg-gradient-to-br from-[#f8cb21] to-[#edca4d] bg-clip-text text-transparent"
              >
                Services
              </span>
              <span
                className="absolute left-0 -bottom-1 w-full h-0.5 bg-[#f8cb21] rounded-sm"
              ></span>
            </span>
          </h2>
        </div>


        <div className="hidden md:block">
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

            <text
              x="50"
              y="100"
              fontSize="100"
              fontWeight="bold"
              fill="url(#wave)"
            >
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
        {/* Desktop Grid */}
        <div className="hidden md:grid grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service, index) => (
            <div key={index} className="flex flex-col p-3">
              <div className="shadow-lg h-[250px] ">
                <img src={service.img} alt={service.title} className=" w-full h-full object-cover" />
              </div>
              <h3 className="text-2xl mt-6">{service.title}</h3>
              <p className="mt-5 text-gray-700">{service.description}</p>
            </div>
          ))}
        </div>

        {/* Mobile PointCards */}
        <div className="block md:hidden">
          <div className=" grid gap-6">
            {services.map((service, index) => (
              <div
                key={index}
                ref={(el) => (cardRefs.current[index] = el)}
                className={`group transition-all duration-700 ease-in-out transform rounded-xl p-5 border-l-4 shadow-md hover:shadow-lg hover:scale-[1.02] bg-white 
                ${readCards.includes(index)
                    ? "border-secondary bg-gradient-to-r from-yellow-100 to-white"
                    : "border-gray-300"
                  }`}
              >
                <div className="flex items-start gap-4">
                  <service.icon
                    className={`text-2xl mt-1 transition-colors duration-300 ${readCards.includes(index)
                      ? "text-secondary"
                      : "text-gray-400"
                      }`}
                  />
                  <div>
                    <h3 className="text-md font-semibold text-gray-900">
                      {service.title}
                    </h3>
                    {/* <p className="text-gray-700 mt-1">{service.description}</p> */}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurServices;
