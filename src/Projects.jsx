import React,{useState} from 'react'
import Navbar from './components/Navbar.jsx'
function Projects() {
    const [currentPage, setCurrentPage] = useState("Projects");
  return (
    
    <>
    <Navbar currentPage={currentPage} />
        <div>Projects</div>
    </>
  )
}

export default Projects