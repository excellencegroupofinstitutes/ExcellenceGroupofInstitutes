const WebProjects = () => {
  const projects = [
    {
      id: "01",
      title: "Share tools quickly and confidently in minutes",
      desc: "This powerful tool eliminates the need to leave Salesforce...",
      img: "/images/feature-01.png",
    },
    {
      id: "02",
      title: "Automate dynamic proposals",
      desc: "Create proposals with dynamic pricing tables in seconds...",
      img: "/images/feature-01.png",
    },
    {
      id: "03",
      title: "Seamless integration",
      desc: "Works directly inside Salesforce without switching apps...",
      img: "/images/feature-01.png",
    },
    {
      id: "04",
      title: "Boost team productivity",
      desc: "Customize and share proposals faster than ever...",
      img: "/images/feature-01.png",
    },
  ];

  return (
    <section className="mt-20 relative">
      <div className="max-w-[1280px] mx-auto p-4">
        <h2 className="text-6xl font-bold mb-20">Our Projects</h2>

        <div className="relative">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="sticky top-10 lg:top-20 mb-20"
              style={{ zIndex: index + 1 }}
            >
              <div className="flex flex-col-reverse md:flex-row-reverse lg:flex-row p-6 lg:p-10 shadow-2xl rounded-2xl bg-white">
                <div className="py-8 pl-7 lg:px-10 w-4/5">
                  <h2 className="text-4xl xl:text-6xl font-[500] mb-8">
                    <span className="text-green-500">{project.id}.</span>{" "}
                    {project.title}
                  </h2>
                  <p>{project.desc}</p>
                </div>
                <div className="max-w-[350px] mx-auto lg:min-w-[500px] xl:max-w-[640px] rounded-3xl overflow-hidden">
                  <img src={project.img} alt="project" />
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