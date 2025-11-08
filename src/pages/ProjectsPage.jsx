import React,{useState} from 'react'
import { ThemeProvider } from '../components/ThemeContext' 
import Projects from '../components/Projects'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import ProjectHero from '../components/ProjectHero'
import { useTheme } from "../components/ThemeContext";

const ProjectsPage = () => {
  const [selectedTag, setSelectedTag] = useState("All");
   const {dark}=useTheme()
  return (

    <>
<div className={dark ? "bg-black text-white" : "bg-white text-black"}>
        <Navbar/>
      <div className={`pt-20`}>
        <ProjectHero onTagSelect={setSelectedTag}/>
        <Projects selectedTag={selectedTag}/>
        <Footer />
      </div>
    </div>
    </>
  )
}

export default ProjectsPage