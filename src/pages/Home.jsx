import React from 'react'
import HeroSection from '../components/home/HeroSection'

import MeetDirector from '../components/home/MeetDirector'
import ChooseUsCard from '../components/home/ChooseUsCard'
import InstituteAchievements from '../components/home/InstituteAchievements'

import CoreSection from '../components/home/CoreSection'
import Gallery from '../components/home/Gallery'
import Testimonials from '../components/home/Testimonials'
import BookDemoForm from '../components/home/BookDemoForm'
import OurVision from '../components/home/OurVision'


const Home = () => {
  return (
    <div className='mt-32 md:mt-39'>
        <HeroSection/>
        <CoreSection/>
        <OurVision/>
        <MeetDirector/>
        <ChooseUsCard/>
        <InstituteAchievements/>
        <Gallery/>
        <Testimonials/>   
        <BookDemoForm/>  

    </div>
)
}

export default Home