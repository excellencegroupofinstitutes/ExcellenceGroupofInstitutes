import React from 'react'
import TuitionHero from '../components/tuition/TuitionHero'
import TuitionCourses from '../components/tuition/TuitionCourses'
import OurResults from '../components/tuition/OurResults'
import QuoteSection from '../components/tuition/QuoteSection'
import TuitionAmenities from '../components/tuition/TuitionAmenities'

const Tuition = () => {
  return (
    <div className='mt-32 md:mt-49'>
        <TuitionHero/>
        <TuitionCourses/>  
        <TuitionAmenities/>    
        <OurResults/>
        <QuoteSection/>
    </div>
  )
}

export default Tuition