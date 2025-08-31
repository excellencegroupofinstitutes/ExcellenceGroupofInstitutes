import React from 'react'
import TuitionHero from '../components/tuition/TuitionHero'
import TuitionCourses from '../components/tuition/TuitionCourses'
import OurResults from '../components/tuition/OurResults'
import QuoteSection from '../components/tuition/QuoteSection'
import TuitionAmenities from '../components/tuition/TuitionAmenities'
import Locations from '../components/tuition/Locations'
import AboutTuitions from '../components/tuition/AboutTuitions'


const Tuition = () => {
  return (
    <div className='mt-17 md:mt-49'>
        <TuitionHero/>
        <TuitionCourses/>  
        <TuitionAmenities/>    
        <OurResults/>
        <QuoteSection/>
        <Locations/>
        <AboutTuitions/>
    </div>
  )
}

export default Tuition