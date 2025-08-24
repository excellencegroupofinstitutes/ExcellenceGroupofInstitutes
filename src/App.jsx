import HeroSection from './components/HeroSection'
import Navbar from './components/Navbar'
import {createBrowserRouter} from 'react-router-dom'



const App = () => {
  return (
    <>
    <Navbar/>

    <div className='h-[2000px]'></div>
    <HeroSection/>
    </>
  )
}

export default App