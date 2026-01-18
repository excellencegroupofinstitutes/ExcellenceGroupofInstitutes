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
import SplashScreen from './components/SplashScreen'
import PrivacyPolicy from './pages/PrivacyPolicy'
import { useEffect, useState } from 'react';
import TermsAndConditions from './pages/TermsandConditions'



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
    path: '/tuitions',
    element: <>
      <Navbar />
      <ScrollToTop />
      <Tuition />
      <Footer />
    </>
  },
  {
    path: '/computer-centre',
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
    path: '/privacy-policy',
    element: <>
    <Navbar />
      <ScrollToTop />
      <PrivacyPolicy />
      <Footer />
    </>
  },
  {
    path: '/terms-and-conditions',
    element: <>
    <Navbar />
      <ScrollToTop />
      <TermsAndConditions />
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

const SPLASH_KEY = 'splashShown' 

const App = () => {
  const [showSplash, setShowSplash] = useState(false)
  const splashDuration = 2000 

  useEffect(() => {
    try {
      const wasShown = sessionStorage.getItem(SPLASH_KEY)
      if (!wasShown) {
        setShowSplash(true)
        const t = setTimeout(() => {
          setShowSplash(false)
          try { sessionStorage.setItem(SPLASH_KEY, 'true') } catch(e) {}
        }, splashDuration)

        return () => clearTimeout(t)
      } else {
        setShowSplash(false)
      }
    } catch (err) {
      console.warn('sessionStorage not available, skipping splash persistence', err)
      setShowSplash(false)
    }
  }, [])

  if (showSplash) {
    return <SplashScreen />
  }

  return (
    <>
      <ToastContainer position="top-right" autoClose={3000} />
      <RouterProvider router={router} />
      <WhatsApp />
    </>
  )
}

export default App