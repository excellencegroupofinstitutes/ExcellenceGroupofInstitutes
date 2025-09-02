import { useNavigate } from 'react-router-dom';

const HeroComputer = () => {
  const navigate = useNavigate()
  const contactUsClick = () => {

    navigate("/about");
    setTimeout(() => {
      document.getElementById("contact-form")?.scrollIntoView({ behavior: "smooth" });
    }, 300);
  };

  const handleCoursesClick = () => {
    document.getElementById("computer-courses")?.scrollIntoView({ behavior: "smooth" });
  }
  return (
    <section className='bg-secondary max-w-[1560px] mx-auto relative pt-4 md:pt-12 pb-12'>
      <div className="flex md:hidden justify-center px-4 gap-1 relative">
        <img
          src="/images/undraw_fun-star.svg"
          alt="arrow"
          className="opacity-50 size-7"
        />
        <h2 className="text-center text-xl pb-4 w-fit ">
          Welcome to Excellence Computer Centres
        </h2>
        <img
          src="/images/undraw_fun-star.svg"
          alt="arrow"
          className="opacity-50 size-7 transform scale-x-[-1]"
        />
      </div>
      <div className='max-w-[1560px] text-black mx-auto p-4 md:p-10 flex flex-col-reverse md:flex-row justify-evenly items-center'>
        <div className='mt-10 md:mt-0'>
          {/* text */}
          <div className="md:flex hidden gap-1 relative">
            <img
              src="/images/undraw_fun-star.svg"
              alt="arrow"
              className="opacity-50 size-7"
            />
            <h2 className="text-xl pb-4 w-fit ">
              Welcome to Excellence Computer Centres
            </h2>
            <img
              src="/images/undraw_fun-star.svg"
              alt="arrow"
              className="opacity-50 size-7 transform scale-x-[-1]"
            />
          </div>
          <h2 className='text-3xl md:text-4xl font-bold' >Master tomorrow's skills today</h2>
          <p className='text-base md:text-lg mt-3 max-w-[650px]'>Our courses go far beyond simple theory. We immerse you in real-world, industry-demanding projects.</p>
          <div className='mt-9 flex  gap-6 md:gap-10'>
            <button className='bg-black hover:cursor-pointer w-[120px] md:w-[150px] text-secondary font-[600] md:text-xl px-4 py-3 rounded-sm' onClick={handleCoursesClick}  >Courses</button>
            <button className='text-black border-2 hover:cursor-pointer w-[120px] md:w-[150px] border-black font-[600] md:text-xl px-4 py-3 rounded-sm' onClick={contactUsClick} >Contact Us</button>
          </div>
        </div>
        <div>
          {/* img */}
          <div className='max-w-[450px] max-h-[450px] rounded-full relative bg-black'>
            <img src="/images/computer_center.webp" alt="student" className='h-full overflow-clip object-contain ' />
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroComputer