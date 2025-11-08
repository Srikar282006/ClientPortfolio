import React from 'react'
import { ThemeProvider } from '../components/ThemeContext' 
import Navbar from '../components/Navbar'
import ProjectDetails from '../components/ProjectDetails'
import Footer from '../components/Footer'
import { useTheme } from "../components/ThemeContext";

const ProjectDetailsPage = () => {
   const dark=useTheme()
  return (
  <>

<div className={dark ? "bg-black text-white" : "bg-white text-black"}>
    <Navbar/>
    <div className={`pt-20 ${dark?"bg-black":"bg-white"}`}>
    <ProjectDetails/>
    <Footer/>
    </div>
    </div>
  </>
  )
}

export default ProjectDetailsPage