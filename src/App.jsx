import Navbar from './components/Navbar'
import {createBrowserRouter} from 'react-router-dom'
import WebService from './pages/WebService'
import Home from './pages/Home'
import Footer from './components/Footer'
// import MeetDirector from './components/hero/MeetDirector'



const App = () => {
  return (
    <>
    <Navbar/>
    {/* <Home/> */}
    <WebService/>
    <Footer/>
    </>
  )
}

export default App