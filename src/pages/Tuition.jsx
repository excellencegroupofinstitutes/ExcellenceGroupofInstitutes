import React from 'react'
import TuitionHero from '../components/tuition/TuitionHero'
import OurResults from '../components/tuition/OurResults'
import QuoteSection from '../components/tuition/QuoteSection'

const Tuition = () => {
  return (
    <div className='mt-32 md:mt-49'>
        <TuitionHero/>

        
        <OurResults/>
        <QuoteSection/>
    </div>
  )
}

export default Tuition