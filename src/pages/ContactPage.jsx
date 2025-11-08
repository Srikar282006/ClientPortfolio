import React from 'react' 
import Navbar from '../components/Navbar'
import ContactForm from '../components/ContactForm'
import Footer from '../components/Footer'
import { useTheme } from "../components/ThemeContext";

const ContactPage = () => {
   const {dark}=useTheme()
  return (
  <>
 <div className={dark ? "bg-black text-white" : "bg-white text-black"}>

    <Navbar/>
     <div className={`pt-20 ${dark?"bg-black":"bg-white"}`}>
    <ContactForm/>
    <Footer/>
    </div>
  </div>
  </>
  )
}

export default ContactPage