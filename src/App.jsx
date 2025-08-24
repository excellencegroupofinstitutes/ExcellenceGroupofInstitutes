import Navbar from './components/Navbar'
import {createBrowserRouter} from 'react-router-dom'
import WebSerive from './pages/WebService'
import Home from './pages/Home'
import Footer from './components/Footer'
// import MeetDirector from './components/hero/MeetDirector'



const App = () => {
  return (
    <>
    <Navbar/>
    <Home/>
    {/* <MeetDirector/> */}
    {/* <WebServe/> */}
    <Footer/>
    </>
  )
}

export default App