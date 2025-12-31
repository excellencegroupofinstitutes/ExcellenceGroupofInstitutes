import React, { useRef } from 'react'
import HeroSection from '../components/home/HeroSection'

import MeetDirector from '../components/home/MeetDirector'
import ChooseUsCard from '../components/home/ChooseUsCard'
import InstituteAchievements from '../components/home/InstituteAchievements'

import CoreSection from '../components/home/CoreSection'
import GalleryMarquee from '../components/GalleryMarquee'
import Testimonials from '../components/home/Testimonials'
import BookDemoForm from '../components/BookDemoForm'
import OurVision from '../components/home/OurVision'
import OurPromise from '../components/home/Our Promise'


const Home = () => {
   const coreSectionRef = useRef(null);

  const scrollToServices = () => {
    coreSectionRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div className='mt-8 md:mt-24 overflow-clip'>
        <HeroSection onExploreClick={scrollToServices} />
        <CoreSection ref={coreSectionRef} />
        <OurVision/>
        <OurPromise/>
        <MeetDirector/>
         
        <ChooseUsCard/>
        <InstituteAchievements/>
        <GalleryMarquee/>
        <Testimonials/>   
        <BookDemoForm demoReason="Demo Class"/>  

    </div>
)
}

export default Home