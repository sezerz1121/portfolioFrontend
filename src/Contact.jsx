import React,{useState} from 'react'
import Navbar from './components/Navbar.jsx'
import Contactme from './components/Contactme.jsx';
import Socials from './components/Socials.jsx';
function Contact() {
    const [currentPage, setCurrentPage] = useState("Contact me");
  return (
    
    <>
    <Navbar currentPage={currentPage} />
    <Contactme />
    <Socials />
    </>
  )
}

export default Contact