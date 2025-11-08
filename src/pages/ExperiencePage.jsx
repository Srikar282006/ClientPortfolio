import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Experience from '../components/Experience'
import { useTheme } from "../components/ThemeContext";
const ExperiencePage = () => {
   const {dark}=useTheme()
  return (
   <>
   <div className={dark ? "bg-black text-white" : "bg-white text-black"}>
   <Navbar/>
 <div className={`pt-20 ${dark?"bg-black":"bg-white"}`}>
    <Experience/>
    <Footer/>
   </div>
   
   </div>
   </>
  )
}

export default ExperiencePage
