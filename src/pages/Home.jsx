import React from 'react'
import HeroSection from '../components/hero/HeroSection'

import MeetDirector from '../components/hero/MeetDirector'
import ChooseUsCard from '../components/hero/ChooseUsCard'
import InstituteAchievements from '../components/hero/InstituteAchievements'

import CoreSection from '../components/hero/CoreSection'
import Gallery from '../components/hero/Gallery'
import Testimonials from '../components/hero/Testimonials'


const Home = () => {
  return (
    <div className='mt-32 md:mt-39'>
        <HeroSection/>
        <CoreSection/>
        <MeetDirector/>
        <ChooseUsCard/>
        <InstituteAchievements/>
        <Gallery/>
        <Testimonials/>     

    </div>
)
}

export default Home