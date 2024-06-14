import React, { useState, useEffect,useRef} from 'react';
import { useNavigate } from 'react-router-dom';
import { motion,useAnimation,useInView} from 'framer-motion';
import axios from 'axios';

function Project(props) {
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
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  }
    return (
     <>
      <motion.div ref={ref} className='ProjectCard'  variants={container} initial="hidden" animate={mainControl} >
          <motion.div variants={item}>
            <img  className="ProjectCardImage" src={props.CoverImage}/>
          </motion.div>
          <motion.div className='ProjectCardTextDiv' variants={item}>
                <motion.div>
                  <p className='ProjectCardName'>{props.projectName}</p>
                </motion.div>
                <motion.div className='ProjectCardFeatureDiv'>
                {props.Features.map((feature, index) => (
                <p key={index} className="ProjectCardFeature">{feature.feature}<br></br></p>
                ))}
                </motion.div>
                <div className='ProjectCardFeatureDiv'>
                <motion.a href={props.Link} className="ProjectCardFeature" target="_blank" rel="noopener noreferrer">
                    🔗 Website
                </motion.a>
            </div>
          </motion.div>
      </motion.div>
     </>
    );
}

export default Project;
