import React from 'react'
import HeroWebService from '../components/webService/HeroWebService'
import OurServices from '../components/webService/OurServices'

import FAQ from '../components/FAQ'

import WebProjects from '../components/webService/WebProjects'


const WebService = () => {
  return (
    <div className='mt-45 md:mt-65'>
        <HeroWebService />
        <OurServices />
        <FAQ/>
        <WebProjects />

    </div>
  )
}

export default WebService