import React from 'react'
import HeroSection from '../components/hero/HeroSection'
import CoreSection from '../components/hero/CoreSection'

const Home = () => {
  return (
    <div className='mt-32 md:mt-39'>
        <HeroSection/>
        <CoreSection/>
    </div>
)
}

export default Home