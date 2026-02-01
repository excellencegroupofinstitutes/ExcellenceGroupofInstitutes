const WebProjects = () => {
  const projects = [
    {
      id: "01",
      title: "Aashiyana Greens",
      subtext: "Real Estate Website",
      desc: "Aashiyana Greens brings the serenity of nature into modern living with sustainable homes surrounded by lush green landscapes.",
      img: "/images/project-2.png",
      hyperlink: "https://aashiyanagreens.com/",
    },
    {
      id: "02",
      title: "Capital Store",
      subtext: "E-Commerce Website",
      desc: "A modern and user-friendly e-commerce platform offering a seamless shopping experience with secure payments, intuitive navigation, and a wide range of premium-quality products tailored to customer needs.",
      img: "/images/project-3.png",
      hyperlink: "https://www.capitalstorecs.com/",
    },
    {
      id: "03",
      title: "Divya Agro Traders",
      subtext: "Agricultural Equipment Website",
      desc: "A dedicated platform for farmers and agricultural businesses, providing reliable farming tools and advanced machinery to enhance productivity and support modern agricultural practices.",
      img: "/images/project-4.png",
      hyperlink: "https://www.divyaagrotraders.com/",
    },
    {
      id: "04",
      title: "Wow Kids Worksheets",
      subtext: "Online Kids Worksheets Website",
      desc: "An engaging learning platform designed for young learners, offering interactive and curriculum-based worksheets that make education fun, creative, and easily accessible for parents and teachers.",
      img: "/images/project-5.png",
      hyperlink: "https://www.wowkidsworksheets.in/",
    },
  ];

  return (
    <section className="mt-20 relative">
      <div className="max-w-[1280px] mx-auto px-4">
        
        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold tracking-tight">
            <span className="text-black">Our </span>
            <span className="relative inline-block">
              <span className="bg-gradient-to-br from-[#f8cb21] to-[#edca4d] bg-clip-text text-transparent">
                Projects
              </span>
              <span className="absolute left-0 -bottom-1 w-full h-0.5 bg-[#f8cb21] rounded-sm"></span>
            </span>
          </h2>
        </div>

        {/* Projects */}
        <div className="space-y-20">
          {projects.map((project) => (
            <div key={project.id}>
              <div
                className="
                  flex flex-col-reverse lg:flex-row
                  p-8 lg:p-12
                  rounded-3xl
                  bg-white
                  border border-gray-100
                  shadow-[0_20px_60px_rgba(0,0,0,0.08)]
                  hover:shadow-[0_30px_80px_rgba(0,0,0,0.12)]
                  transition-all duration-300
                "
              >
                {/* Content */}
                <div className="py-6 lg:px-10 w-full lg:w-3/5">
                  <h3 className="text-3xl xl:text-4xl font-semibold mb-4">
                    <span className="text-green-500">{project.id}.</span>{" "}
                    <a
                      href={project.hyperlink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-green-600 transition-colors"
                    >
                      {project.title}
                    </a>
                  </h3>

                  <p className="text-sm text-gray-500 mb-6 tracking-wide">
                    {project.subtext}
                  </p>

                  <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                    {project.desc}
                  </p>
                </div>

                {/* Image */}
                <div
                  className="
                    w-full lg:w-2/5
                    mb-8 lg:mb-0
                    rounded-2xl
                    overflow-hidden
                  "
                >
                  <a
                    href={project.hyperlink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src={project.img}
                      alt={project.title}
                      className="
                        w-full h-full object-cover
                        transition-transform duration-500
                        hover:scale-105
                      "
                    />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default WebProjects;