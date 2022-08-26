import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from "framer-motion";

const svgVariants = {
  hidden: { y: "1000px" },
  show: {
    y: "350px",
    transition: {
      delay: 1,
      duration: 5,
      ease: "easeInOut",
    },
  },
};


function ButtonLand() {
  return (
    <motion.div  
    className='btn-land'
    variants={svgVariants}
    initial="hidden"
    animate="show">
        <Link to="/Portfolio/home">
        <button>
            Go to interactive CV
        </button>
        </Link>
    </motion.div>
  )
}

export default ButtonLand