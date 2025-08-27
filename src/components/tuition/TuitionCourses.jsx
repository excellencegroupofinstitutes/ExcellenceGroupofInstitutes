import { MdComputer } from "react-icons/md";

const TuitionCourses = () => {
    return (
        <section className='relative p-4 mt-15'>
            <div className='max-w-[1080px] grid place-items-center gap-9 md:gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  mx-auto '>
                {/* card */}
                <div className='max-w-[250px] shadow-lg flex gap-4 flex-col py-3 pb-7 px-5'>
                    <div className='w-[45px] h-[45px] rounded-full bg-secondary-light p-3'>
                        <MdComputer className="text-secondary w-full h-full" />
                    </div>
                    <h3 className="text-[17px] font-[500]">Your Subject/ You Board</h3>
                    <p className="text-gray-400 text-sm">Highest personal attention, One teacher One student</p>
                    <hr className="text-gray-300 mt-7" />
                    <p className="mt-5"><span className="text-green-600 font-bold mr-1" >Starts At:</span>Rs. 1150</p>
                    <button className="text-white bg-secondary transform transition-all rounded-sm duration-300 font-[500] py-[5px] hover:translate-y-1 hover:cursor-pointer ">Call to Action</button>
                </div>


                <div className='max-w-[250px] shadow-lg flex gap-4 flex-col py-3 pb-7 px-5'>
                    <div className='w-[45px] h-[45px] rounded-full bg-secondary-light p-3'>
                        <MdComputer className="text-secondary w-full h-full" />
                    </div>
                    <h3 className="text-[17px] font-[500]">Your Subject/ You Board</h3>
                    <p className="text-gray-400 text-sm">Highest personal attention, One teacher One student</p>
                    <hr className="text-gray-300 mt-7" />
                    <p className="mt-5"><span className="text-green-600 font-bold mr-1" >Starts At:</span>Rs. 1150</p>
                    <button className="text-white bg-secondary transform transition-all rounded-sm duration-300 font-[500] py-[5px] hover:translate-y-1 hover:cursor-pointer ">Call to Action</button>
                </div>



                <div className='max-w-[250px] shadow-lg flex gap-4 flex-col py-3 pb-7 px-5'>
                    <div className='w-[45px] h-[45px] rounded-full bg-secondary-light p-3'>
                        <MdComputer className="text-secondary w-full h-full" />
                    </div>
                    <h3 className="text-[17px] font-[500]">Your Subject/ You Board</h3>
                    <p className="text-gray-400 text-sm">Highest personal attention, One teacher One student</p>
                    <hr className="text-gray-300 mt-7" />
                    <p className="mt-5"><span className="text-green-600 font-bold mr-1" >Starts At:</span>Rs. 1150</p>
                    <button className="text-white bg-secondary transform transition-all rounded-sm duration-300 font-[500] py-[5px] hover:translate-y-1 hover:cursor-pointer ">Call to Action</button>
                </div>



                <div className='max-w-[250px] shadow-lg flex gap-4 flex-col py-3 pb-7 px-5'>
                    <div className='w-[45px] h-[45px] rounded-full bg-secondary-light p-3'>
                        <MdComputer className="text-secondary w-full h-full" />
                    </div>
                    <h3 className="text-[17px] font-[500]">Your Subject/ You Board</h3>
                    <p className="text-gray-400 text-sm">Highest personal attention, One teacher One student</p>
                    <hr className="text-gray-300 mt-7" />
                    <p className="mt-5"><span className="text-green-600 font-bold mr-1" >Starts At:</span>Rs. 1150</p>
                    <button className="text-white bg-secondary transform transition-all rounded-sm duration-300 font-[500] py-[5px] hover:translate-y-1 hover:cursor-pointer ">Call to Action</button>
                </div>


            </div>
        </section>
    )
}

export default TuitionCourses