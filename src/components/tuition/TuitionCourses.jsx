import { MdComputer } from "react-icons/md";
import { MdOutlineLibraryBooks } from "react-icons/md";
import { RiEnglishInput } from "react-icons/ri";
import { FaReact } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
const TuitionCourses = () => {
    const navigate = useNavigate()
      const handleBookDemoClick = () => {

      navigate("/");
      setTimeout(() => {
        document.getElementById("book-demo")?.scrollIntoView({ behavior: "smooth" });
      }, 300);
  };
    return (
        <section className='relative p-4 mt-15'>
            <div className='max-w-[1080px] grid place-items-center gap-9 md:gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mx-auto'>
                
                {/* card */}
                <div className='w-[250px] h-[280px] shadow-lg flex flex-col justify-between py-3 pb-7 px-5 transform transition-transform duration-300 hover:scale-105'>
                    <div>
                        <div className='w-[45px] h-[45px] rounded-full bg-secondary-light p-3 mb-4'>
                            <MdOutlineLibraryBooks className="text-secondary w-full h-full" />
                        </div>
                        <h3 className="text-[17px] font-[500] mb-2">Class 1st to 10th</h3>
                        <p className="text-gray-400 text-sm">All Subjects of Class 1st to 10th, PSEB and CBSE</p>
                    </div>
                    <div>
                        <hr className="text-gray-300 my-4" />
                        {/* <button onClick={handleBookDemoClick} className="text-white bg-secondary transform transition-all rounded-sm duration-300 font-[500] py-[5px] hover:translate-y-1 hover:cursor-pointer w-full">Book a Demo</button> */}
                    </div>
                </div>

                <div className='w-[250px] h-[280px] shadow-lg flex flex-col justify-between py-3 pb-7 px-5 transform transition-transform duration-300 hover:scale-105'>
                    <div>
                        <div className='w-[45px] h-[45px] rounded-full bg-secondary-light p-3 mb-4'>
                            <FaReact className="text-secondary w-full h-full" />
                        </div>
                        <h3 className="text-[17px] font-[500] mb-2">+1 & +2</h3>
                        <p className="text-gray-400 text-sm">All subjects of Medical, Non-Medical & Commerce</p>
                    </div>
                    <div>
                        <hr className="text-gray-300 my-4" />
                        {/* <button onClick={handleBookDemoClick} className="text-white bg-secondary transform transition-all rounded-sm duration-300 font-[500] py-[5px] hover:translate-y-1 hover:cursor-pointer w-full">Book a Demo</button> */}
                    </div>
                </div>

                <div className='w-[250px] h-[280px] shadow-lg flex flex-col justify-between py-3 pb-7 px-5 transform transition-transform duration-300 hover:scale-105'>
                    <div>
                        <div className='w-[45px] h-[45px] rounded-full bg-secondary-light p-3 mb-4'>
                            <RiEnglishInput  className="text-secondary w-full h-full" />
                        </div>
                        <h3 className="text-[17px] font-[500] mb-2">Spoken English Classes</h3>
                        <p className="text-gray-400 text-sm">Improve fluency, grammar, and communication skills for daily and professional use.</p>
                    </div>
                    <div>
                        <hr className="text-gray-300 my-4" />
                        {/* <button onClick={handleBookDemoClick} className="text-white bg-secondary transform transition-all rounded-sm duration-300 font-[500] py-[5px] hover:translate-y-1 hover:cursor-pointer w-full">Book a Demo</button> */}
                    </div>
                </div>

               <div className='w-[250px] h-[280px] shadow-lg flex flex-col justify-between py-3 pb-7 px-5 transform transition-transform duration-300 hover:scale-105'>
                    <div>
                        <div className='w-[45px] h-[45px] rounded-full bg-secondary-light p-3 mb-4'>
                            <RiEnglishInput  className="text-secondary w-full h-full" />
                        </div>
                        <h3 className="text-[17px] font-[500] mb-2">IELTS and PTE</h3>
                        <p className="text-gray-400 text-sm">Comprehensive training for IELTS & PTE exams with expert guidance and practice.</p>
                    </div>
                    <div>
                        <hr className="text-gray-300 my-4" />
                        {/* <button onClick={handleBookDemoClick} className="text-white bg-secondary transform transition-all rounded-sm duration-300 font-[500] py-[5px] hover:translate-y-1 hover:cursor-pointer w-full">Book a Demo</button> */}
                    </div>
                </div>

            </div>
        </section>
    )
}

export default TuitionCourses;
