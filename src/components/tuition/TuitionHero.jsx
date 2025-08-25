// import { MdOutlineScience } from "react-icons/md";

// const TuitionHero = () => {
//   return (
//     <section className='bg-gradient-to-b max-w-[1560px] mx-auto from-white to-secondary-hover h-[500px]'>
//         <div className='mb-8'>
//             <h2 className='text-7xl p-10 text-center font-[200]'>Strive for excellence <br />success will follow</h2>
//             <p className='text-center text-2xl text-gray-700 font-[200]'>Primary Text Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat, ex.</p>
//         </div>
//         <div className='max-w-[960px] mx-auto bg-white/70 rounded-[40px]'>
//             {/* subjects */}
//             <div className='hover bg-white transition-colors duration-200 flex flex-col'>
//                 <MdOutlineScience />
//                 <p>Subject Name</p>
//             </div>
//         </div>
//     </section>
//   )
// }

// export default TuitionHero


import { MdOutlineScience } from "react-icons/md";
import { FaCalculator, FaBook, FaGlobe, FaLaptopCode } from "react-icons/fa";

const TuitionHero = () => {
    return (
        <section className="bg-gradient-to-b max-w-[1560px] mx-auto from-white to-secondary-hover h-[500px]">
            <div className="mb-8">
                <h2 className="text-7xl p-10 text-center font-[200]">
                    Strive for excellence <br /> success will follow
                </h2>
                <p className="text-center text-2xl text-gray-700 font-[200]">
                    Primary Text Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat, ex.
                </p>
            </div>

            {/* Subjects container */}
            <div className="max-w-[960px] mx-auto bg-white/70 rounded-[100px] p-3">
                <div className="grid grid-cols-7 items-center justify-items-center gap-6">

                    <div className="flex w-fit flex-col items-center justify-center rounded-4xl px-5 py-3
                          hover:bg-white cursor-pointer transition-colors duration-300 ">
                        <MdOutlineScience size={30} className="mb-2" />
                        <p className="text-lg font-medium">Science</p>
                    </div>
                    <div className="flex w-fit flex-col items-center justify-center rounded-4xl px-5 py-3
                          hover:bg-white cursor-pointer transition-colors duration-300 ">
                        <MdOutlineScience size={30} className="mb-2" />
                        <p className="text-lg font-medium">Science</p>
                    </div>
                    <div className="flex w-fit flex-col items-center justify-center rounded-4xl px-5 py-3
                          hover:bg-white cursor-pointer transition-colors duration-300 ">
                        <MdOutlineScience size={30} className="mb-2" />
                        <p className="text-lg font-medium">Science</p>
                    </div>
                    <div className="flex w-fit flex-col items-center justify-center rounded-4xl px-5 py-3
                          hover:bg-white cursor-pointer transition-colors duration-300 ">
                        <MdOutlineScience size={30} className="mb-2" />
                        <p className="text-lg font-medium">Science</p>
                    </div>
                    <div className="flex w-fit flex-col items-center justify-center rounded-4xl px-5 py-3
                          hover:bg-white cursor-pointer transition-colors duration-300 ">
                        <MdOutlineScience size={30} className="mb-2" />
                        <p className="text-lg font-medium">Science</p>
                    </div>
                    <div className="flex w-fit flex-col items-center justify-center rounded-4xl px-5 py-3
                          hover:bg-white cursor-pointer transition-colors duration-300 ">
                        <MdOutlineScience size={30} className="mb-2" />
                        <p className="text-lg font-medium">Science</p>
                    </div>
                    <div className="flex w-fit flex-col items-center justify-center rounded-4xl px-5 py-3
                          hover:bg-white cursor-pointer transition-colors duration-300 ">
                        <MdOutlineScience size={30} className="mb-2" />
                        <p className="text-lg font-medium">Science</p>
                    </div>
                    
                </div>
            </div>
        </section>
    );
};

export default TuitionHero;
