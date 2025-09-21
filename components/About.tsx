import React from 'react';
// FIX: Import Variants type from framer-motion to correctly type animation variants.
import { motion, Variants } from 'framer-motion';
import { PROFILE_DATA, SKILLS_DATA } from '../constants';
import type { Skill } from '../types';

// FIX: Add Variants type annotation to fix typing issue with 'ease' property.
const sectionVariants: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: 'easeOut',
      staggerChildren: 0.1,
    },
  },
};

// FIX: Add Variants type annotation to fix typing issue with 'type' property.
const skillItemVariants: Variants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      type: 'spring',
      stiffness: 300,
      damping: 20,
    },
  },
};

const SkillCard: React.FC<{ skill: Skill }> = ({ skill }) => {
    const Icon = skill.icon;
    return (
        <motion.div
            variants={skillItemVariants}
            whileHover={{ y: -5, scale: 1.05 }}
            className="group flex flex-col items-center justify-center p-4 bg-slate-800/50 rounded-lg border border-slate-700/50 hover:bg-slate-800 hover:border-cyan-400/50 transition-all duration-300"
        >
            <Icon className="w-12 h-12 text-slate-400 group-hover:text-cyan-400 transition-colors duration-300" />
            <p className="mt-4 text-sm font-medium text-slate-300 group-hover:text-white transition-colors duration-300">{skill.name}</p>
        </motion.div>
    );
};

const About: React.FC = () => {
  return (
    <motion.section
      id="about"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      className="py-24"
    >
        <motion.h2 variants={sectionVariants} className="text-3xl font-bold text-center text-white mb-12">
            About Me
        </motion.h2>

        <div className="grid md:grid-cols-5 gap-12 items-center">
            <motion.div variants={sectionVariants} className="md:col-span-3 text-lg text-slate-400 space-y-4">
                <p>{PROFILE_DATA.bio}</p>
            </motion.div>
            <motion.div variants={sectionVariants} className="md:col-span-2">
                <div className="grid grid-cols-4 gap-4">
                    {SKILLS_DATA.map((skill) => (
                        <SkillCard key={skill.name} skill={skill} />
                    ))}
                </div>
            </motion.div>
        </div>

        <div className="mt-20">
            <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
                <motion.div variants={sectionVariants}>
                <h3 className="text-xl font-bold text-cyan-400 mb-4">Education</h3>
                <div className="p-6 bg-slate-800/50 rounded-lg border border-slate-700/50 h-full">
                    <p className="font-bold text-white">B.Tech in Information Technology</p>
                    <p className="text-slate-400">M.V.G.R. College Of Engineering, Vizianagaram</p>
                    <p className="text-slate-500 italic mt-1">Expected Graduation: 2026</p>
                </div>
                </motion.div>
                <motion.div variants={sectionVariants}>
                <h3 className="text-xl font-bold text-cyan-400 mb-4">Interests</h3>
                <div className="p-6 bg-slate-800/50 rounded-lg border border-slate-700/50 h-full space-y-2">
                    <p className="text-slate-300">👨‍💻 Coding & Web</p>
                    <p className="text-slate-300">🐳 Docker/DevOps</p>
                    <p className="text-slate-300">🤖 AI/ML</p>
                </div>
                </motion.div>
            </div>
        </div>
    </motion.section>
  );
};

export default About;