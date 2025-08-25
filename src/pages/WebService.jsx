import React from 'react'
import HeroWebService from '../components/webService/HeroWebService'
import OurServices from '../components/webService/OurServices'

const WebService = () => {
  return (
    <div className='mt-45 md:mt-65'>
        <HeroWebService />
        <OurServices />
    </div>
  )
}

export default WebService