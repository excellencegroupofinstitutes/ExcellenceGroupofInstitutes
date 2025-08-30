import React from 'react'

const PageNotFound = () => {
  return (
    <div className='h-[300px] flex flex-col justify-center items-center mt-32 md:mt-49 px-4 max-w-[1560px] mx-auto'>
        <img src="/images/404.jpg" alt="404" 
        className='w-full h-full object-contain mx-auto'
        />
        {/* <h1 className='text-3xl md:text-4xl font-bold text-secondary text-center mt-10'>Page Not Found</h1> */}
    </div>
  )
}

export default PageNotFound