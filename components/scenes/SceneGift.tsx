import React from 'react';
import { motion } from 'framer-motion';
import { SceneProps, Page } from '../../types';
import { Mail } from 'lucide-react';

const SceneGift: React.FC<SceneProps> = ({ setPage }) => {
  return (
    <div className="flex flex-col items-center justify-center h-full bg-pink-50">
      <motion.h1 
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }}
        className="text-3xl md:text-4xl font-bold text-pink-800 mb-12 tracking-widest"
      >
        A GIFT FOR YOU
      </motion.h1>

      <motion.div
        whileHover={{ scale: 1.05, rotate: 2 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setPage(Page.LETTER)}
        className="cursor-pointer group relative"
      >
        {/* Envelope Body */}
        <div className="w-64 h-48 bg-pink-200 rounded-lg shadow-2xl flex items-center justify-center relative overflow-hidden border-2 border-pink-300">
          <div className="absolute top-0 left-0 w-0 h-0 border-l-[128px] border-l-transparent border-t-[100px] border-t-pink-300 border-r-[128px] border-r-transparent transform origin-top transition-transform duration-500 group-hover:scale-y-0 z-20"></div>
          
          <div className="absolute -bottom-20 rotate-45 w-48 h-48 bg-pink-100 z-10"></div>
          
          <motion.div 
            animate={{ y: [0, -10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
          >
             <Mail size={64} className="text-pink-500 z-30 relative" />
          </motion.div>
        </div>
        
        {/* Label */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white px-4 py-2 rotate-[-5deg] shadow-md border border-gray-200 z-40">
           <span className="font-handwriting text-xl text-red-500 font-bold">With Love</span>
        </div>

        <motion.p
             initial={{ opacity: 0 }}
             animate={{ opacity: 1 }}
             transition={{ delay: 1 }}
             className="text-center mt-8 text-gray-500 font-semibold"
        >
            CLICK TO OPEN
        </motion.p>
      </motion.div>
    </div>
  );
};

export default SceneGift;
