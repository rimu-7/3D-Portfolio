import React from 'react'
import Hero from './sections/Hero'
import ShowCase from './sections/ShowCase'
import Navbar from './sections/Navbar'
import LogoSection from './sections/LogoSection'
import FeatureCards from './sections/FeatureCards'
import ExprienceSection from './sections/ExprienceSection'
import TitleHeader from './Components/HeroModels/TitleHeader'
import TechStack from './sections/TechStack'
import Contact from './sections/Contact'
import { ToastContainer } from 'react-toastify'
import Footer from './sections/Footer'
import ScrollToTopButton from './Components/ScrollTopButton'

const App = () => {
  return (
    <>
    <Navbar/>
    <Hero/>
    <ShowCase/>
    <LogoSection/>
    <FeatureCards/>
    <ExprienceSection/>
    <TechStack/>
    <Contact/>
    <ToastContainer />
    <Footer/>
    <ScrollToTopButton/>
    </>
  )
}

export default App