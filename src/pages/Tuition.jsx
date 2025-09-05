import TuitionHero from '../components/tuition/TuitionHero'
import TuitionCourses from '../components/tuition/TuitionCourses'
import OurResults from '../components/tuition/OurResults'
import QuoteSection from '../components/tuition/QuoteSection'
import Locations from '../components/tuition/Locations'
import AboutTuitions from '../components/tuition/AboutTuitions'
import Vision from '../components/tuition/Vision'
import Amenities from '../components/Amenities'
import BookDemoForm from '../components/BookDemoForm'
import Video from '../components/tuition/Video'
import GalleryMarquee from '../components/tuition/TuitionMarquee'
import ExcellenceCoCurricularRace from '../components/tuition/CoCurriculars'


const Tuition = () => {
  return (
    <div className='mt-17 md:mt-49'>
        <TuitionHero/>
        <TuitionCourses/>  
        <Amenities/>    
        <OurResults/>
        <QuoteSection/>
        <Video/>
        <Locations/>
        <Vision/>
        <ExcellenceCoCurricularRace/>
        <GalleryMarquee/>
        <Locations/>
        <AboutTuitions/>
        <BookDemoForm demoReason="Tuition"/>  
    </div>
  )
}

export default Tuition