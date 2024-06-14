import React, { useState,useRef} from 'react';
import { motion } from 'framer-motion';
import Navbar from './components/Navbar.jsx';
import HeroSection from './components/HeroSection.jsx';
import Skills from './components/Skills.jsx';
import ProjectsRender from './components/ProjectsRender.jsx';
import Socials from './components/Socials.jsx';


function HomePage() {
  const [currentPage, setCurrentPage] = useState("Home");
 
  return (
    <>
      <Navbar currentPage={currentPage} />
      <HeroSection />
      <Skills />
      <ProjectsRender />
      <div className='divisonLineDiv'>
        <div className='divisonLine'></div>
      </div>
      <Socials />


    </>
  );
}

export default HomePage;
