import React from 'react';
import { motion } from 'framer-motion';
import { SceneProps, Page } from '../../types';

const SceneIntro: React.FC<SceneProps> = ({ setPage }) => {
  return (
    <div className="flex flex-col items-center justify-center h-full text-center px-4">
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", stiffness: 260, damping: 20 }}
        className="mb-8"
      >
        <img 
            src="https://media1.tenor.com/m/BKE-LHkuHHoAAAAC/i-love-you-iloveyou.gif$0" 
            alt="Milk and Mocha Cheek Pull" 
            className="rounded-2xl shadow-xl w-64 border-4 border-white transform -rotate-3"
        />
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="text-3xl md:text-5xl font-bold text-gray-800 mb-12"
      >
        hey! i made something for you<br/>do you wanna see??
      </motion.h1>

      <div className="flex gap-8">
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => setPage(Page.AFFIRMATION)}
          className="px-8 py-3 bg-green-500 text-white text-xl font-bold rounded-full shadow-lg hover:bg-green-600 transition-colors"
        >
          YES
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => setPage(Page.PUNISHMENT)}
          className="px-8 py-3 bg-red-500 text-white text-xl font-bold rounded-full shadow-lg hover:bg-red-600 transition-colors"
        >
          NO
        </motion.button>
      </div>
    </div>
  );
};

export default SceneIntro;