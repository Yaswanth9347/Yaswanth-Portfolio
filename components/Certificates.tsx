import React from 'react';
import { motion, Variants } from 'framer-motion';
import { CERTIFICATES_DATA } from '../constants';
import type { Certificate } from '../types';

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

const ExternalLinkIcon: React.FC<{className?: string}> = ({className}) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
    </svg>
);

const CertificateCard: React.FC<{ certificate: Certificate }> = ({ certificate }) => {
  return (
    <motion.div
      variants={cardVariants}
      className="bg-slate-800/50 rounded-lg p-6 border border-slate-700/50 flex flex-col group transition-all duration-300 hover:border-cyan-400/50 hover:shadow-lg hover:shadow-cyan-500/10"
    >
        <div className="flex justify-between items-start">
            <h3 className="text-lg font-bold text-white mb-1">{certificate.title}</h3>
            <span className="text-sm font-mono text-slate-400 flex-shrink-0 ml-4">{certificate.year}</span>
        </div>
      <p className="text-slate-400 mb-4">{certificate.issuer}</p>
      <a 
        href="/Yaswanth Onsite Internship participation Certificate1.pdf"
        target="_blank" 
        rel="noopener noreferrer" 
        className="mt-auto flex items-center space-x-2 text-sm font-semibold text-cyan-400 group-hover:text-cyan-300 transition-colors duration-300"
      >
        <span>View Credential</span>
        <ExternalLinkIcon className="w-4 h-4" />
      </a>
    </motion.div>
  );
};

const Certificates: React.FC = () => {
  return (
    <section id="certificates" className="py-24">
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.5 }}
        className="text-3xl font-bold text-center text-white mb-12"
      >
        Certificates & Credentials
      </motion.h2>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto"
      >
        {CERTIFICATES_DATA.map(cert => (
          <CertificateCard key={cert.title} certificate={cert} />
        ))}
      </motion.div>
    </section>
  );
};

export default Certificates;
