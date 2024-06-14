import React from 'react';
import { motion } from 'framer-motion';


const containerVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, when: "beforeChildren", staggerChildren: 0.3 } }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

const TargetNiches = () => {
  return (
    <motion.div className="TargetNiches" initial="hidden" animate="visible" variants={containerVariants}>
      <motion.h2 variants={itemVariants}>Tailored Solutions for Your Industry</motion.h2>
      <motion.h3 variants={itemVariants}>Boost Your Business with a Professional Online Presence</motion.h3>
      <motion.div className="NicheContainer">
        <motion.div className="Niche" variants={itemVariants}>
          <h4>Pressure Washing Contractors</h4>
          <p>Showcase your services and attract more customers with a sleek, informative website.</p>
        </motion.div>
        <motion.div className="Niche" variants={itemVariants}>
          <h4>Plumbers</h4>
          <p>Highlight your expertise and reliability with a website designed to convert visitors into clients.</p>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default TargetNiches;
