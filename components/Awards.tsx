import React from 'react';
import { motion, Variants } from 'framer-motion';
import { AWARDS_DATA } from '../constants';
import type { Award } from '../types';

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: 'easeOut',
    },
  },
};

const AwardCard: React.FC<{ award: Award }> = ({ award }) => {
  return (
    <motion.div
      variants={cardVariants}
      className="bg-slate-800/50 rounded-lg p-6 border border-slate-700/50 flex flex-col group transition-all duration-300 hover:border-cyan-400/50 hover:shadow-lg hover:shadow-cyan-500/10"
    >
      <div className="flex justify-between items-start mb-2">
        <h3 className="text-lg font-bold text-white">{award.title}</h3>
        <span className="text-sm font-mono text-slate-400 flex-shrink-0 ml-4">{award.year}</span>
      </div>
      <p className="text-slate-400 mb-4 font-semibold">{award.issuer}</p>
      <p className="text-slate-400 text-sm mb-2">{award.description}</p>
      {award.link && (
        <a
          href={award.link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-2 bg-cyan-500 text-white font-bold py-2 px-4 rounded-full hover:bg-cyan-600 transition-all duration-300 shadow hover:shadow-cyan-500/50"
        >
          View Certificate
        </a>
      )}
    </motion.div>
  );
};

const Awards: React.FC = () => {
  return (
    <section id="awards" className="py-24">
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.5 }}
        className="text-3xl font-bold text-center text-white mb-12"
      >
        Awards & Achievements
      </motion.h2>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        className="grid md:grid-cols-1 gap-6 max-w-4xl mx-auto"
      >
        {AWARDS_DATA.map(award => (
          <AwardCard key={award.title} award={award} />
        ))}
      </motion.div>
    </section>
  );
};

export default Awards;