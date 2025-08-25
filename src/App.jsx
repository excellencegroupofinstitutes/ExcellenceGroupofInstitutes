import Navbar from './components/Navbar'
import {createBrowserRouter} from 'react-router-dom'
import WebService from './pages/WebService'
import Home from './pages/Home'
import Footer from './components/Footer'
import ComputerService from './pages/ComputerService'
// import MeetDirector from './components/hero/MeetDirector'



const App = () => {
  return (
    <>
    <Navbar/>
    {/* <Home/> */}
    {/* <WebService/> */}
    <ComputerService />
    <Footer/>
    </>
  )
}

export default App