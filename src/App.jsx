import Navbar from './components/Navbar'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import WebService from './pages/WebService'
import Home from './pages/Home'
import Footer from './components/Footer'
import ComputerService from './pages/ComputerService'
import Tuition from './pages/Tuition'
import ScrollToTop from './components/ScrollToTop'
import { ToastContainer } from "react-toastify";
import About from './pages/About'
import WhatsApp from './components/WhatsApp'
import PageNotFound from './pages/PageNotFound'


const router = createBrowserRouter([
  {
    path: '/',
    element: <>
      <Navbar />
      <ScrollToTop />
      <Home />
      <Footer />
    </>
  },
  {
    path: '/tuition',
    element: <>
      <Navbar />
      <ScrollToTop />
      <Tuition />
      <Footer />
    </>
  },
  {
    path: '/computer-services',
    element: <>
      <Navbar />
      <ScrollToTop />
      <ComputerService />
      <Footer />
    </>
  },
  {
    path: '/web-services',
    element: <>
      <Navbar />
      <ScrollToTop />
      <WebService />
      <Footer />
    </>
  },
  {
    path: '/about',
    element: <>
      <Navbar />
      <ScrollToTop />
      <About />
      <Footer />
    </>
  },
  {
    path: '/*',
    element: <>
      <Navbar />
      <ScrollToTop />
      <PageNotFound />
      <Footer />
    </>
  },
])

const App = () => {
  return (
    <>
      <ToastContainer position="top-right" autoClose={3000} />
      <RouterProvider router={router} />
      <WhatsApp />
    </>
  )
}

export default App