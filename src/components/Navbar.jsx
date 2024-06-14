import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const navbarVariants = {
  
  hidden: { opacity: 0, y: -100 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, staggerChildren: 0.1 } }
};

const navItemVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

function Navbar({ currentPage }) {
  const navigate = useNavigate();
  const getNavItemStyle = (page) => ({
    backgroundColor: currentPage === page ? "#444" : "transparent",
    color: currentPage === page ? "#fff" : "black",
    borderRadius: currentPage === page ? "10px" : "0px",
    transform: currentPage === page ? "scale(1.2)" : "scale(1)",
    padding: currentPage === page ? "12px 24px" : "10px 20px",
    transition: "all 0.3s ease"
  });

  const navigation = (page) => () => {
    navigate(`/${page.toLowerCase()}`);
  };

  return (
    <motion.div
      className='NavBarParentDiv'
      initial="hidden"
      animate="visible"
      variants={navbarVariants}
    >
      {["Home", "Contact me"].map(page => (
        <motion.div 
          key={page}
          className='NavBarPages' 
          whileHover={{ scale: 1.2, color: "#00A8CC" }}
          whileTap={{ scale: 0.9 }}
          variants={navItemVariants}
          style={getNavItemStyle(page)}
          onClick={navigation(page)}
        >
          {page}
        </motion.div>
      ))}
    </motion.div>
  );
}

export default Navbar;
