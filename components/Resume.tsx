import React from 'react';
import { motion, Variants } from 'framer-motion';
import { PROFILE_DATA } from '../constants';

const sectionVariants: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: 'easeOut',
    },
  },
};

const Resume: React.FC = () => {
  return (
    <motion.section
      id="resume"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      className="py-24 text-center"
    >
      <motion.h2 variants={sectionVariants} className="text-3xl font-bold text-white mb-4">
        My Resume
      </motion.h2>
      <motion.p variants={sectionVariants} className="text-slate-400 mb-8 max-w-xl mx-auto">
        Interested in my professional background? You can view or download my full resume to see my experience, education, and more.
      </motion.p>
      <motion.div variants={sectionVariants}>
        <a
          href="/Yaswanth Resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-cyan-500 text-white font-bold py-3 px-8 rounded-full hover:bg-cyan-600 transition-all duration-300 shadow-lg hover:shadow-cyan-500/50 transform hover:scale-105"
        >
          View Resume
        </a>
      </motion.div>
    </motion.section>
  );
};

export default Resume;