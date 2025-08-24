import React from 'react'
import HeroSection from '../components/hero/HeroSection'
import MeetDirector from '../components/hero/MeetDirector'
import ChooseUsCard from '../components/hero/ChooseUsCard'
import InstituteAchievements from '../components/hero/InstituteAchievements'

const Home = () => {
  return (
    <div className='mt-32 md:mt-39'>
        <HeroSection/>
        <MeetDirector/>
        <ChooseUsCard/>
        <InstituteAchievements/>
    </div>
)
}

export default Home