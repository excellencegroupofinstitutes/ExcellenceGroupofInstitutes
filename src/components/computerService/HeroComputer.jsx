import React from 'react'

const HeroComputer = () => {
  return (
    <section className='bg-secondary relative pb-10'>
        <div className='max-w-[1560px] text-black mx-auto p-4 md:p-10 flex flex-col-reverse md:flex-row justify-evenly items-center'>
            <div className='mt-10 md:mt-0'>
                {/* text */}
                <h2 className='text-5xl font-bold' >Master tomorrow's skills today</h2>
                <p className='text-xl mt-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                <div className='mt-9 flex gap-10'>
                    <button className='bg-black hover:cursor-pointer text-secondary font-[600] text-xl px-4 py-3 rounded-sm' >Call to Action-1</button>
                    <button className='text-black border-2 hover:cursor-pointer border-black font-[600] text-xl px-4 py-3 rounded-sm' >Call to Action-2</button>
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