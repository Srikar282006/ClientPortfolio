import React from 'react'
import Navbar from '../components/Navbar'
import AboutHero from '../components/AboutHero'
import Footer from '../components/Footer'
import { useTheme } from "../components/ThemeContext";

const AboutPage = () => {
  const {dark}=useTheme()
  return (
   <>
  <div className={dark ? "bg-black text-white" : "bg-white text-black"}>
   <Navbar/>
   <div className={`pt-20 ${dark?"bg-black":"bg-white"}`}>
     <AboutHero />
     <Footer/>
   </div>
  
   
</div>
   </>
  )
}

export default AboutPage