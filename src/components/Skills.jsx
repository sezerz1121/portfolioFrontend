import React, { useState, useEffect,useRef} from 'react';
import { useNavigate } from 'react-router-dom';
import { motion,useAnimation,useInView} from 'framer-motion';

function Skills() {
  const constraintsRef = useRef(null);
  const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.15,
        staggerChildren: 0.19
      }
    }
  }

  const mainControl =useAnimation();
  const ref =useRef(null);
  const inView = useInView(ref,{once:true});
  useEffect(()=>{
    if(inView)
    {
      mainControl.start("visible");
    }
  },[inView])
    
  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  }
    const imageVariants = {
    hover: {
      scale: 1.25,
      transition: {
        type: 'spring',
        stiffness: 500,
        damping: 20
      }
    },
    initial: {
      scale: 1,
      transition: {
        type: 'spring',
        stiffness: 500,
        damping: 20
      }
    }
  };
  return (
    <>
    <div className='SkilsTitle'>Skills</div>
    <motion.div ref={ref} className="logo-container" variants={container} initial="hidden" animate={mainControl}>
      {/* First row of logos */}
      <div className="logo-row">
        <motion.div className="logo-item" variants={item} >
          <motion.div
            className='imageDiv'
            whileHover="hover"
            whileTap="tap"
            initial="initial"
            animate="initial"
            variants={imageVariants}
          >
            <img className="image" src="/Images/html.svg" alt="HTML Icon"/>
            <p>HTML</p>
          </motion.div>
        </motion.div>

        <motion.div className="logo-item" variants={item}>
          <motion.div
            className='imageDiv'
            whileHover="hover"
            whileTap="tap"
            initial="initial"
            animate="initial"
            variants={imageVariants}
          >
            <img className="image" src="/Images/css.svg" alt="CSS Icon"/>
            <p>CSS</p>
          </motion.div>
        </motion.div>

        <motion.div className="logo-item" variants={item}>
          <motion.div
            className='imageDiv'
            whileHover="hover"
            whileTap="tap"
            initial="initial"
            animate="initial"
            variants={imageVariants}
          >
            <img className="image" src="/Images/js.svg" alt="JavaScript Icon"/>
            <p>JavaScript</p>
          </motion.div>
        </motion.div>

        <motion.div className="logo-item" variants={item}>
          <motion.div
            className='imageDiv'
            whileHover="hover"
            whileTap="tap"
            initial="initial"
            animate="initial"
            variants={imageVariants}
          >
            <img className="image" src="/Images/node.svg" alt="Node.js Icon"/>
            <p>Node.js</p>
          </motion.div>
        </motion.div>
      </div>

      {/* Second row of logos */}
      <div className="logo-row">
        <motion.div className="logo-item" variants={item}>
          <motion.div
            className='imageDiv'
            whileHover="hover"
            whileTap="tap"
            initial="initial"
            animate="initial"
            variants={imageVariants}
          >
            <img className="image" src="/Images/expressjs-icon.svg" alt="Express.js Icon"/>
            <p>Express.js</p>
          </motion.div>
        </motion.div>

        <motion.div className="logo-item" variants={item}>
          <motion.div
            className='imageDiv'
            whileHover="hover"
            whileTap="tap"
            initial="initial"
            animate="initial"
            variants={imageVariants}
          >
            <img className="image" src="/Images/react.svg" alt="React.js Icon"/>
            <p>React.js</p>
          </motion.div>
        </motion.div>

        <motion.div className="logo-item" variants={item}>
          <motion.div
            className='imageDiv'
            whileHover="hover"
            whileTap="tap"
            initial="initial"
            animate="initial"
            variants={imageVariants}
          >
            <img className="image" src="/Images/mongodb-icon-1.svg" alt="MongoDB Icon"/>
            <p>MongoDB</p>
          </motion.div>
        </motion.div>

        <motion.div className="logo-item" variants={item}>
          <motion.div
            className='imageDiv'
            whileHover="hover"
            whileTap="tap"
            initial="initial"
            animate="initial"
            variants={imageVariants}
          >
            <img className="image" src="/Images/git.svg" alt="Git Icon"/>
            <p>Git</p>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
    </>
  );
  
}

export default Skills;
