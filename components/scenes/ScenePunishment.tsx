import React from 'react';
import { motion } from 'framer-motion';
import { SceneProps, Page } from '../../types';

const ScenePunishment: React.FC<SceneProps> = ({ setPage }) => {
  return (
    <div className="flex flex-col items-center justify-center h-full text-center px-4 bg-red-50">
      <motion.h1
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="text-5xl md:text-7xl font-extrabold text-red-600 mb-8"
      >
        HOW DARE YOU!
      </motion.h1>

      <motion.div
        initial={{ y: -50 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 300 }}
        className="mb-8"
      >
         <img 
            src="https://c.tenor.com/_WfoxV3ecmIAAAAd/tenor.gif$0" 
            alt="Angry Cat with Knife" 
            className="rounded-lg shadow-2xl w-72 border-4 border-red-500"
        />
      </motion.div>

      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setPage(Page.INTRO)}
        className="px-8 py-4 bg-gray-800 text-white text-xl font-bold rounded-lg shadow-xl hover:bg-black transition-colors"
      >
        TRY AGAIN 😤
      </motion.button>
    </div>
  );
};

export default ScenePunishment;