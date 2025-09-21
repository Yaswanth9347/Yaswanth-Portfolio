
import React, { useState } from 'react';
// FIX: Import Variants type from framer-motion to correctly type animation variants.
import { motion, Variants } from 'framer-motion';
import { PROFILE_DATA } from '../constants';

// FIX: Add Variants type annotation to fix typing issue with 'ease' property.
const formVariants: Variants = {
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

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionStatus, setSubmissionStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmissionStatus('idle');

    try {
      const response = await fetch('https://formspree.io/f/mkgvazpp', {
        method: 'POST',
        headers: {
          'Accept': 'application/json'
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmissionStatus('success');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setSubmissionStatus('error');
      }
    } catch (error) {
      setSubmissionStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <motion.section
      id="contact"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={formVariants}
      className="py-24"
    >
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-white mb-4">Get In Touch</h2>
        <p className="text-slate-400 mb-8">
          Have a project in mind or just want to say hi? Feel free to reach out. I'm always open to discussing new opportunities.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="max-w-xl mx-auto">
        <div className="space-y-6">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full bg-slate-800 border border-slate-700 rounded-md py-3 px-4 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-cyan-500"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full bg-slate-800 border border-slate-700 rounded-md py-3 px-4 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-cyan-500"
          />
          <textarea
            name="message"
            placeholder="Your Message"
            rows={5}
            value={formData.message}
            onChange={handleChange}
            required
            className="w-full bg-slate-800 border border-slate-700 rounded-md py-3 px-4 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-cyan-500"
          ></textarea>
        </div>
        <div className="text-center mt-6">
          <button
            type="submit"
            disabled={isSubmitting}
            className="inline-block bg-cyan-500 text-white font-bold py-3 px-8 rounded-full hover:bg-cyan-600 transition-all duration-300 shadow-lg hover:shadow-cyan-500/50 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </button>
        </div>
        {submissionStatus === 'success' && (
            <p className="mt-4 text-center text-green-400">Thank you for your message! I'll get back to you soon.</p>
        )}
        {submissionStatus === 'error' && (
            <p className="mt-4 text-center text-red-400">Something went wrong. Please try again later.</p>
        )}
      </form>
      <div className="mt-12 text-center text-slate-400">
          <p>Or you can reach me directly at:</p>
          <a href={`mailto:${PROFILE_DATA.email}`} className="font-semibold text-cyan-400 hover:text-cyan-300 transition-colors duration-300">
              {PROFILE_DATA.email}
          </a>
      </div>
    </motion.section>
  );
};

export default Contact;
