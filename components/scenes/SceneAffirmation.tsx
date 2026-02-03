import React from 'react';
import { motion } from 'framer-motion';
import { SceneProps, Page } from '../../types';

const SceneAffirmation: React.FC<SceneProps> = ({ setPage }) => {
  return (
    <div className="flex flex-col items-center justify-center h-full text-center px-4">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="mb-8"
      >
        <img 
            src="https://media.tenor.com/Uzq_p29FUDgAAAAi/love-hugs.gif$0" 
            alt="Giggling Calico Cat" 
            className="rounded-2xl shadow-xl w-64 border-4 border-pink-200"
        />
      </motion.div>

      <motion.h1
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="text-4xl md:text-6xl font-bold text-pink-600 mb-12 font-handwriting"
      >
        That's a goodgirl 💖
      </motion.h1>

      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setPage(Page.PROPOSAL)}
        className="px-10 py-3 bg-pink-500 text-white text-2xl font-bold rounded-full shadow-lg hover:bg-pink-600 transition-colors"
      >
        NEXT &rarr;
      </motion.button>
    </div>
  );
};

export default SceneAffirmation;