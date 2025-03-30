"use client";

import { motion, Variants } from "framer-motion";

function LoadingThreeDotsJumping() {
  const dotVariants: Variants = {
    jump: {
      y: -20, // Move the dots up by 20px
      transition: {
        duration: 0.2, // Duration of the jump
        repeat: Infinity, // Repeat the animation infinitely
        repeatType: "mirror", // Reverse the animation on repeat
        ease: "easeInOut", // Smooth easing
      },
    },
  };

  return (
    <motion.div
      className="container"
      initial="rest"
      animate="jump"
      transition={{ staggerChildren: 0.05 }} // Stagger the animation of the dots
    >
      <motion.div className="dot" variants={dotVariants} />
      <motion.div className="dot" variants={dotVariants} />
      <motion.div className="dot" variants={dotVariants} />
    </motion.div>
  );
}



export default LoadingThreeDotsJumping;