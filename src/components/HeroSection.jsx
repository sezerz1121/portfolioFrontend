import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const introVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 1, staggerChildren: 1 } }
  };
  
  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 1 } }
  };
  
  const buttonVariants = {
    hover: { scale: 1.1 },
    tap: { scale: 0.95 }
  };

const HeroSection = () => {
  const navigate =useNavigate();
  const handleContactMe=()=>
  {
    navigate("/contact me")
  }
  return (
    <motion.div 
    className='HomePageIntro'
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    animate="visible"
    variants={introVariants}
    
  >
    <motion.div className='HomePageIntroTextDiv'>
      <motion.div className='HomePageIntroTextTop' variants={textVariants}>
        Hello World! I'm <span className='highlight'>Tatsam Vasava</span>
      </motion.div>
      <motion.div className='HomePageIntroTextBottom' variants={textVariants}>
        Expert Full Stack Developer
      </motion.div>

      <motion.div
        className='CTAButtonDiv'
        variants={textVariants}
      >
        <motion.button
          className='CTAButton'
          variants={buttonVariants}
          whileHover="hover"
          whileTap="tap"
          onClick={handleContactMe}
        >
          Contact Me
        </motion.button>
      </motion.div>
    </motion.div>
    <motion.div 
      className='HomePageIntroImageDiv'
      variants={textVariants}
    >
      <img src="./Images/Developer activity-amico (1).png" alt="Profile" />
    </motion.div>
  </motion.div>
  );
};

export default HeroSection;
