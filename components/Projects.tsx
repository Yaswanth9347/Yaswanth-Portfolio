import React from 'react';
// FIX: Import Variants type from framer-motion to correctly type animation variants.
import { motion, Variants } from 'framer-motion';
import { PROJECTS_DATA } from '../constants';
import type { Project } from '../types';
import { GithubIcon } from './icons/SocialIcons';

// FIX: Add Variants type annotation.
const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

// FIX: Add Variants type annotation to fix typing issue with 'ease' property.
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

const ExternalLinkIcon: React.FC<{className?: string}> = ({className}) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
    </svg>
);

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => {
  return (
    <motion.div
      variants={cardVariants}
      whileHover={{ y: -8, scale: 1.02 }}
      className="bg-slate-800/50 rounded-lg overflow-hidden border border-slate-700/50 flex flex-col group transition-all duration-300 hover:border-cyan-400/50 hover:shadow-2xl hover:shadow-cyan-500/10"
    >
      <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
        <p className="text-slate-400 mb-4 flex-grow">{project.description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map(tag => (
            <span key={tag} className="text-xs font-semibold bg-cyan-900/50 text-cyan-300 px-2 py-1 rounded-full">{tag}</span>
          ))}
        </div>
        <div className="mt-auto flex items-center space-x-4">
          <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 text-slate-300 hover:text-cyan-400 transition-colors duration-300">
             <ExternalLinkIcon className="w-5 h-5" />
             <span>Live Demo</span>
          </a>
          <a href={project.repoUrl} target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 text-slate-300 hover:text-cyan-400 transition-colors duration-300">
             <GithubIcon className="w-5 h-5"/>
             <span>GitHub</span>
          </a>
        </div>
      </div>
    </motion.div>
  );
};

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-24">
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.5 }}
        className="text-3xl font-bold text-center text-white mb-12"
      >
        My Projects
      </motion.h2>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        className="grid md:grid-cols-2 gap-8"
      >
        {PROJECTS_DATA.map(project => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </motion.div>
    </section>
  );
};

export default Projects;