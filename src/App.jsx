import Navbar from './components/Navbar'
import {createBrowserRouter} from 'react-router-dom'
import WebService from './pages/WebService'
import Home from './pages/Home'
import Footer from './components/Footer'
import ComputerService from './pages/ComputerService'
import Tuition from './pages/Tuition'
// import MeetDirector from './components/hero/MeetDirector'



const App = () => {
  return (
    <>
    <Navbar/>
    <Home/>
    {/* <WebService/>
    <ComputerService />
    <Tuition/> */}
    <Footer/>
    </>
  )
}

export default App