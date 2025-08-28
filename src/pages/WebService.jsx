import React from 'react'
import HeroWebService from '../components/webService/HeroWebService'
import OurServices from '../components/webService/OurServices'
import FAQ from '../components/FAQ'

const WebService = () => {
  return (
    <div className='mt-45 md:mt-65'>
        <HeroWebService />
        <OurServices />
        <FAQ/>
    </div>
  )
}

export default WebService