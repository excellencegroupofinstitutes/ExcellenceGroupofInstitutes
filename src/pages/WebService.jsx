import React from 'react'
import HeroWebService from '../components/webService/HeroWebService'
import OurServices from '../components/webService/OurServices'
import FAQ from '../components/FAQ'
import WebProjects from '../components/webService/WebProjects'
import AboutWebServices from '../components/webService/AboutWebServices'
import BookDemoForm from '../components/BookDemoForm'
import OurPromise from '../components/webService/OurPromise'


const WebService = () => {
  return (
    <div className='mt-20 md:mt-55'>
        <HeroWebService />
        <OurServices />
        <WebProjects />
        <OurPromise/>
        <AboutWebServices/>
        <FAQ/>
        <BookDemoForm demoReason="Web service"/>  
        
    </div>
  )
}

export default WebService