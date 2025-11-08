import React from 'react'
import Hero from '../components/Hero'
import Navbar from '../components/Navbar'
import Projects from '../components/Projects'
import Skills from '../components/Skills' 
import Achievements from '../components/Achievements'
import Footer from '../components/Footer'
import { useTheme } from "../components/ThemeContext";

const HomePage = () => {
  const {dark}=useTheme()
  return (
   <div className={dark ? "bg-black text-white" : "bg-white text-black"}>
      <Navbar/>
      <Hero/>
      <Projects/>
      <Skills/>
      <Achievements/>
      <Footer/>
  </div>
  )
}

export default HomePage