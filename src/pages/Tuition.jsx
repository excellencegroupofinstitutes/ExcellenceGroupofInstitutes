import React from 'react'
import TuitionHero from '../components/tuition/TuitionHero'
import TuitionCourses from '../components/tuition/TuitionCourses'

const Tuition = () => {
  return (
    <div className='mt-32 md:mt-49'>
        <TuitionHero/>
        <TuitionCourses/>
    </div>
  )
}

export default Tuition