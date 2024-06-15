import React, { useState, useEffect,useRef} from 'react';
import { useNavigate } from 'react-router-dom';
import { motion,useAnimation,useInView} from 'framer-motion';

function Socials() {
    const container = {
        hidden: { opacity: 1, scale: 0 },
        visible: {
          opacity: 1,
          scale: 1,
          transition: {
            delayChildren: 0.3,
            staggerChildren: 0.2
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
        hidden: { y: 30, opacity: 0 },
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
        tap: {
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
     <motion.div ref={ref} className='FooterDiv'  variants={container} initial="hidden" animate={mainControl}>
        <div className='FooterlogoparentDiv'>
        <motion.div className="FooterDivIcons"   
            whileHover="hover"
            whileTap="tap"
            initial="initial"
            animate="initial"
            variants={imageVariants}
        >
        <a  href="https://github.com/sezerz1121" target="blank"><img align="center" src="/Images/github-mark.svg" alt="https://www.instagram.com/tatsam.dev/" height="30" width="30" /></a>
        </motion.div>
        <motion.div className="FooterDivIcons" 
            whileHover="hover"
            whileTap="tap"
            initial="initial"
            animate="initial"
            variants={imageVariants}
        >
        <a  href="https://www.instagram.com/tatsam.dev/" target="blank"><img align="center" src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/instagram.svg" alt="https://www.instagram.com/tatsam.dev/" height="30" width="40" /></a>
        </motion.div>
        </div>
        <motion.div variants={item}>
        <p>Copyright ©2024 All rights reserved </p>
        </motion.div>
        

     </motion.div>
    </>
  )
}

export default Socials
