const WebProjects = () => {
  const projects = [
    {
      id: "01",
      title: "Mytuitionapp ",
      desc: "Experience the world’s first Personalized Chapter Model (PCM) for CBSE students in India",
      img: "/images/project-1.png",
      hyperlink: "https://mytuitionapp.com/",
    },
    {
      id: "02",
      title: "AcaBrain",
      desc: "Frontend template for Institutions",
      img: "/images/project-2.png",
      hyperlink: "https://kitpro.site/acabrain/?storefront=envato-elements",
    },
  ];

  return (
    <section className="mt-12 relative">
      <div className="max-w-[1280px] mx-auto p-4">
        <div className="text-center mb-12">
          <h2 className=" text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">
            <span className="text-black">Our </span>
            <span className="relative inline-block">
              <span
                className="bg-gradient-to-br from-[#f8cb21] to-[#edca4d] bg-clip-text text-transparent"
              >
                Projects
              </span>
              <span
                className="absolute left-0 -bottom-1 w-full h-0.5 bg-[#f8cb21] rounded-sm"
              ></span>
            </span>
          </h2>
        </div>


        <div className="relative">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="sticky top-10 lg:top-20 mb-20"
              style={{ zIndex: index + 1 }}
            >
              <div className="flex flex-col-reverse md:flex-row-reverse lg:flex-row p-6 lg:p-10 shadow-2xl rounded-2xl bg-white">
                <div className="py-8 pl-7 lg:px-10 w-full md:w-4/5">
                  <h2 className="text-3xl xl:text-4xl md:font-[400] font-[500] mb-8">
                    <span className="text-green-500">{project.id}.</span>{" "}
                    <a href={project.hyperlink} target="_blank">
                      {project.title}
                    </a>
                  </h2>
                  <p className="text-base md:text-lg" >{project.desc}</p>
                </div>
                <div className="max-w-[350px] mx-auto lg:min-w-[500px] xl:max-w-[600px] rounded-3xl overflow-hidden">
                  <a href={project.hyperlink} target="_blank">
                    <img src={project.img} alt="project" />
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