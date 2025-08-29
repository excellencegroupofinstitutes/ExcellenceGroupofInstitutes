import React, { useRef, useState, useEffect } from "react";
import { FaCheckCircle } from "react-icons/fa";

const services = [
  {
    title: "Website Designing",
    description:
      "We craft modern, responsive, and visually appealing designs that perfectly align with your brand identity.",
    img: "/images/sample-service.png",
  },
  {
    title: "Web Development",
    description:
      "Our development team builds secure, scalable, and high-performance websites using the latest technologies.",
    img: "/images/sample-service.png",
  },
  {
    title: "IT Services",
    description:
      "From troubleshooting to complete IT management, we provide reliable services that keep your systems running.",
    img: "/images/sample-service.png",
  },
  {
    title: "Digital Marketing",
    description:
      "Boost your brand visibility with tailored digital marketing strategies that reach the right audience.",
    img: "/images/sample-service.png",
  },
  {
    title: "SEO Services",
    description:
      "We optimize your website with proven SEO techniques that improve rankings, traffic, and credibility.",
    img: "/images/sample-service.png",
  },
  {
    title: "Google Listing",
    description:
      "Ensure your business gets noticed with a verified Google listing that improves local visibility.",
    img: "/images/sample-service.png",
  },
  {
    title: "Social Media Marketing",
    description:
      "Grow your brand with engaging campaigns on popular platforms that build trust and loyalty.",
    img: "/images/sample-service.png",
  },
  {
    title: "Facebook & Instagram Ads",
    description:
      "Maximize reach and conversions with data-driven ad campaigns tailored to your business objectives.",
    img: "/images/sample-service.png",
  },
  {
    title: "YouTube Ads & Monetisation",
    description:
"Unlock the power of YouTube with targeted ads to grow your audience and drive revenue.",
    img: "/images/sample-service.png",
  }
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
    <section className="relative py-16">
      <div className="max-w-[1360px] mx-auto px-6">
        {/* Heading */}
        <h2 className="text-4xl font-bold text-center mb-12">Our Services</h2>

        {/* Desktop Grid */}
        <div className="hidden md:grid grid-cols-1 md:grid-cols-3 gap-10">
          {services.map((service, index) => (
            <div key={index} className="flex flex-col p-3">
              <div className="shadow-lg">
                <img src={service.img} alt={service.title} />
              </div>
              <h3 className="text-2xl mt-6">{service.title}</h3>
              <p className="mt-5 text-gray-700">{service.description}</p>
            </div>
          ))}
        </div>

        {/* Mobile PointCards */}
        <div className="block md:hidden grid gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              ref={(el) => (cardRefs.current[index] = el)}
              className={`group transition-all duration-700 ease-in-out transform rounded-xl p-5 border-l-4 shadow-md hover:shadow-lg hover:scale-[1.02] bg-white 
                ${
                  readCards.includes(index)
                    ? "border-secondary bg-gradient-to-r from-yellow-100 to-white"
                    : "border-gray-300"
                }`}
            >
              <div className="flex items-start gap-4">
                <FaCheckCircle
                  className={`text-2xl mt-1 transition-colors duration-300 ${
                    readCards.includes(index)
                      ? "text-secondary"
                      : "text-gray-400"
                  }`}
                />
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">
                    {service.title}
                  </h3>
                  {/* <p className="text-gray-700 mt-1">{service.description}</p> */}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurServices;
