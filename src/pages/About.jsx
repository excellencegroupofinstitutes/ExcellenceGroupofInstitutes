const About = () => {
  return (
    <section className="mt-42 md:mt-55 max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-12">
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(0,0,0,0.3) 1px, transparent 0)`,
          backgroundSize: '20px 20px'
        }}
      />
      
      {/* Organic texture overlay */}
      <div 
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}
      />
      <h2
        style={{ fontSize: "clamp(65px,10vw,100px)" }}
        className="text-center font-[600] text-secondary mb-12"
      >
        ABOUT US
      </h2>

      <div className="flex flex-col-reverse md:flex-row items-center md:items-start gap-10">
        {/* Text Section */}
        <div className="md:w-1/2 pt-10 text-gray-700 text-lg leading-relaxed text-justify space-y-4">
          <p className="max-w-[600px] mx-auto">
            <b>Excellence Group of Institutes</b> is a premier educational and technical enterprise
            with its headquarters in Ludhiana, Punjab. We are dedicated to providing high-quality
            services through our three distinct verticals:{" "}
            <b>Excellence Tuitions, Excellence Computer Centre</b> and{" "}
            <b>Excellence Web Services</b>. With offices in Basant City, Ludhiana and Rajguru Nagar
            Market, Ludhiana, we cater to the diverse needs of our clients with a commitment to
            excellence.
          </p>
          <p>
            Our group is built on a foundation of integrity and a passion for providing the
            highest-quality services. <b>Estd. 2020</b>
          </p>
        </div>

        {/* Image Section */}
        <div className="md:w-1/2 w-full flex justify-center">
          <img
            src="/images/about-us.jpg"
            alt="About Excellence Group"
            className="w-full max-w-[600px] h-[400px] object-cover  shadow-lg"
          />
        </div>
      </div>
    </section>
  )
}

export default About
