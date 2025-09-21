import React, { useState } from 'react';
// FIX: Import Variants type from framer-motion to correctly type animation variants.
import { motion, Variants, AnimatePresence, addPointerEvent } from 'framer-motion';
import { PROFILE_DATA } from '../constants';
import { GithubIcon, LinkedInIcon } from './icons/SocialIcons';

// FIX: Add Variants type annotation.
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

// FIX: Add Variants type annotation to fix typing issue with 'ease' property.
const itemVariants: Variants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: 'easeOut',
    },
  },
};

const Hero: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center py-20">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="text-center"
      >
        <motion.div variants={itemVariants} className="flex justify-center mb-8">
            <div 
              className="cursor-pointer relative flex items-center justify-center"
              style={{ width: 190, height: 260 }}
              onClick={() => setIsModalOpen(true)}
            >
              {/* Ellipse SVG as border */}
              <svg
                width={190}
                height={260}
                viewBox="0 0 190 260"
                className="absolute"
                style={{ left: 0, top: 0, zIndex: 1, addPointerEvent: "none" }}
                aria-hidden="true"
              >
                <ellipse
                  cx="94"
                  cy="130.5"
                  rx="90"
                  ry="115"
                  fill="none"
                  stroke="#334155"
                  strokeWidth="8"
                />
              </svg>
              <img
                src={PROFILE_DATA.photo}
                alt="Profile"
                className="object-cover shadow-lg transition-transform duration-300 hover:scale-105"
                style={{
                  width: 176,
                  height: 224,
                  borderRadius: "50%", // Makes the image a vertical ellipse
                  position: "relative",
                  zIndex: 2,
                  backgroundColor: "#222",
                }}
              />
            </div>
        </motion.div>

        <AnimatePresence>
          {isModalOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 p-4"
              onClick={() => setIsModalOpen(false)}
            >
              <motion.img
                src={PROFILE_DATA.photo}
                alt="Profile"
                className="max-w-[90vw] max-h-[90vh] object-contain rounded-lg"
                initial={{ scale: 0.5 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.5 }}
              />
            </motion.div>
          )}
        </AnimatePresence>
        
        <motion.h1 variants={itemVariants} className="text-4xl md:text-6xl font-black text-white mb-2">
            Hi, I'm <span className="text-cyan-400">{PROFILE_DATA.name}</span>
        </motion.h1>

        <motion.h2 variants={itemVariants} className="text-xl md:text-2xl font-semibold text-slate-300 mb-6 bg-clip-text text-transparent bg-gradient-to-r from-slate-400 to-slate-500 animate-subtle-shine bg-[200%_auto]">
            {PROFILE_DATA.title}
        </motion.h2>

        <motion.p variants={itemVariants} className="max-w-2xl mx-auto text-slate-400 mb-8">
            {PROFILE_DATA.introduction}
        </motion.p>
        
        <motion.div variants={itemVariants} className="mb-8">
            <a
                href="#contact"
                className="inline-block bg-cyan-500 text-white font-bold py-3 px-8 rounded-full hover:bg-cyan-600 transition-all duration-300 shadow-lg hover:shadow-cyan-500/50 transform hover:scale-105"
            >
                Get In Touch
            </a>
        </motion.div>

        <motion.div variants={itemVariants} className="flex justify-center items-center space-x-6">
            <a href={PROFILE_DATA.githubUrl} target="_blank" rel="noopener noreferrer" aria-label="GitHub Profile" className="text-slate-400 hover:text-cyan-400 transition-colors duration-300">
                <GithubIcon className="w-8 h-8"/>
            </a>
            <a href={PROFILE_DATA.linkedinUrl} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn Profile" className="text-slate-400 hover:text-cyan-400 transition-colors duration-300">
                <LinkedInIcon className="w-8 h-8"/>
            </a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;