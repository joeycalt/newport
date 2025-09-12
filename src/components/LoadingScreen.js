import React from 'react';
import { motion } from 'framer-motion';
import marioGif from '../assets/mario.gif'

const LoadingScreen = () => {
  return (
    <motion.div 
      className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-white z-50"
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1, delay: 4 }}
    >
       <motion.img 
        src={marioGif}
        alt="Mario Loading Animation"
        className="max-w-[200px] max-h-[200px]" // or specify dimensions as needed
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: 'spring', stiffness: 260, damping: 20 }}
      />
    </motion.div>
  );
};

export default LoadingScreen;