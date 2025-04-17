import React from 'react'
import Hero from './sections/Hero'
import ShowCase from './sections/ShowCase'
import Navbar from './sections/Navbar'
import LogoSection from './sections/LogoSection'
import FeatureCards from './sections/FeatureCards'
import ExprienceSection from './sections/ExprienceSection'

const App = () => {
  return (
    <>
    <Navbar/>
    <Hero/>
    <ShowCase/>
    <LogoSection/>
    <FeatureCards/>
    <ExprienceSection/>
    </>
  )
}

export default App