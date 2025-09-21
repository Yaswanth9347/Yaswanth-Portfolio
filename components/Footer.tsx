import React from 'react';
import { PROFILE_DATA } from '../constants';
import { GithubIcon, LinkedInIcon } from './icons/SocialIcons';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900/50 border-t border-slate-800">
      <div className="container mx-auto max-w-7xl py-6 px-6 sm:px-8 lg:px-12 text-center text-slate-500">
        <div className="flex justify-center items-center space-x-6 mb-4">
            <a href={PROFILE_DATA.githubUrl} target="_blank" rel="noopener noreferrer" aria-label="GitHub Profile" className="text-slate-500 hover:text-cyan-400 transition-colors duration-300">
                <GithubIcon className="w-6 h-6"/>
            </a>
            <a href={PROFILE_DATA.linkedinUrl} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn Profile" className="text-slate-500 hover:text-cyan-400 transition-colors duration-300">
                <LinkedInIcon className="w-6 h-6"/>
            </a>
        </div>
        <p>&copy; {new Date().getFullYear()} Yaswanth Yerra. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;