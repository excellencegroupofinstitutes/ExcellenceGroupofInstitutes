import { FaArrowRight, FaPhone } from "react-icons/fa";
const HeroWebService = () => {
  return (
    <section className="relative">
      <div className="flex max-w-[1280px] mx-auto flex-col lg:flex-row">
        <div className="max-w-[640px] relative mx-auto">
          {/* left */}
          <img src="/images/webservice-image-1.png" alt="webservice" />
          <img src="/images/yellow-dots.png" alt="dots" className="absolute -top-10 -right-7 md:right-0 -z-1 float-x hidden md:block  " />
        </div>
        <div className="max-w-[550px] flex flex-col mt-10 md:mt-0 mx-auto px-7">
          {/* right */}
          <h2 className="text-4xl mx-auto md:text-5xl font-[600]">Choose the best <span className="text-secondary">Web Services</span> company</h2>
          <div className="flex items-start gap-5 mt-10">
            <div className="self-stretch w-[5px] bg-secondary"></div>
            <p className="text-lg text-gray-700">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Eius similique deserunt qui, optio suscipit soluta rerum?
            </p>
          </div>
          <div className="flex flex-col gap-2 mt-9">
            <hr className="text-gray-300 " />
            <div className="flex justify-around">
              <div className="flex gap-5 items-center">
                <img src="/images/yellow-support-icon.png" alt="support" className="w-[50px] md:w-[100px]" />
                <h3 className="text-[14px] md:text-[16px]">Support <br /> Feature </h3>
              </div>
              <div className="flex gap-5 items-center">
                <img src="/images/yellow-support-icon.png" alt="support" className="w-[50px] md:w-[100px]" />
                <h3 className="text-[14px] md:text-[16px]">Support <br /> Feature </h3>
              </div>
            </div>
            <hr className="text-gray-300 mt-2" />
          </div>
          <div className="flex mt-8 flex-col gap-5 md:gap-0 md:flex-row md:items-center">
            {/* CTA */}
            <button className="group w-fit rounded-4xl flex items-center gap-2.5 py-3 pl-6 pr-5 cursor-pointer active:scale-[0.95] font-bold bg-secondary text-white">
              Contact Us!
              <FaArrowRight
                className="w-8 h-8 p-2 bg-white rounded-full text-secondary transform rotate-90 transition-transform duration-300 group-hover:rotate-0"
              />
            </button>
            <div className="md:ml-15 flex items-center gap-3">
              <FaPhone className="text-secondary ring-animation border-2 rotate-90 border-gray-200 p-4 rounded-full w-15 h-15"/>
              <div className="flex flex-col">
                <span className="text-gray-700 ml-2">Call for Help</span>
                <p className="font-bold text-xl tracking-wide">+91 9876543210</p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroWebService