import Navbar from './components/Navbar'
import {createBrowserRouter} from 'react-router-dom'
import WebSerive from './pages/WebService'
import Home from './pages/Home'



const App = () => {
  return (
    <>
    <Navbar/>
    <Home/>
    {/* <WebSerive/> */}
    </>
  )
}

export default App