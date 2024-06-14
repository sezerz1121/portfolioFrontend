import React,{useState} from 'react'
import Navbar from './components/Navbar.jsx'
import Contactme from './components/Contactme.jsx';
function Contact() {
    const [currentPage, setCurrentPage] = useState("Contact me");
  return (
    
    <>
    <Navbar currentPage={currentPage} />
    <Contactme />
    </>
  )
}

export default Contact