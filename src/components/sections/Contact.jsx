import React from 'react';
import { motion } from 'framer-motion';
import { Send, Mail, MapPin, Phone, CheckCircle2, AlertCircle } from 'lucide-react';
import { portfolioData } from '../../data/portfolioData';
import GlowCard from '../ui/GlowCard';
import SectionHeading from '../ui/SectionHeading';
import { useEmailForm } from '../../hooks/useEmailForm';
import { fadeInLeft, fadeInRight } from '../../utils/animationVariants';

// Custom Github and Linkedin Icons again to prevent build errors
const GithubIcon = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/>
    <path d="M9 18c-4.51 2-5-2-7-2"/>
  </svg>
);

const LinkedinIcon = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
    <rect width="4" height="12" x="2" y="9"/>
    <circle cx="4" cy="4" r="2"/>
  </svg>
);

const Contact = () => {
  const { contact } = portfolioData.personalInfo;
  const { formRef, isSubmitting, isSuccess, errorMessage, sendEmail } = useEmailForm();

  return (
    <section id="contact" className="py-24 bg-slate-50 dark:bg-slate-800/30 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <SectionHeading title="Get In" highlight="Touch" />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Left Column: Contact Info */}
          <motion.div 
            variants={fadeInLeft()}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex h-full w-full"
          >
            <GlowCard className="shadow-xl">
              <div className="p-8 flex flex-col gap-8 h-full w-full">
                <div>
                  <h3 className="text-2xl font-bold text-slate-800 dark:text-slate-200 mb-4">Let's talk about your next project</h3>
                  <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                    Whether you have a question, want to collaborate on a project, or simply want to say hi, feel free to drop a message!
                  </p>
                </div>

                <div className="space-y-6">
                  <div className="flex items-center gap-4 group">
                    <div className="p-4 bg-primary/10 text-primary dark:bg-primary/20 rounded-xl group-hover:scale-110 transition-transform">
                      <Mail className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="text-slate-500 dark:text-slate-400 text-sm font-medium">Email Me</h4>
                      <a href={`mailto:dipakodhavani@gmail.com`} className="text-slate-900 dark:text-white font-semibold hover:text-primary transition-colors">
                        dipakodhavani@gmail.com
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4 group">
                    <div className="p-4 bg-primary/10 text-primary dark:bg-primary/20 rounded-xl group-hover:scale-110 transition-transform">
                      <MapPin className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="text-slate-500 dark:text-slate-400 text-sm font-medium">Location</h4>
                      <p className="text-slate-900 dark:text-white font-semibold">
                        India
                      </p>
                    </div>
                  </div>
                </div>

                {/* Social Links */}
                <div className="mt-4 pt-8 border-t border-slate-200 dark:border-slate-700/50">
                  <h4 className="text-slate-800 dark:text-slate-200 font-semibold mb-4">Follow My Work</h4>
                  <div className="flex gap-4">
                    <a 
                      href={contact.linkedin} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="p-3 bg-slate-200 dark:bg-slate-800 text-slate-600 dark:text-slate-300 rounded-lg hover:bg-primary hover:text-white dark:hover:bg-primary transition-all duration-300 shadow-sm"
                      aria-label="LinkedIn"
                    >
                      <LinkedinIcon className="w-5 h-5" />
                    </a>
                    <a 
                      href={contact.github} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="p-3 bg-slate-200 dark:bg-slate-800 text-slate-600 dark:text-slate-300 rounded-lg hover:bg-slate-900 hover:text-white dark:hover:bg-slate-900 transition-all duration-300 shadow-sm"
                      aria-label="GitHub"
                    >
                      <GithubIcon className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              </div>
            </GlowCard>
          </motion.div>

          {/* Right Column: Contact Form */}
          <motion.div 
            variants={fadeInRight()}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex h-full w-full"
          >
            <GlowCard className="shadow-xl">
              <form ref={formRef} onSubmit={sendEmail} className="p-8 flex flex-col h-full w-full">
                
                {isSuccess && (
                  <div className="mb-6 p-4 rounded-lg text-sm font-medium bg-emerald-50 text-emerald-600 dark:bg-emerald-900/30 dark:text-emerald-400 flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 shrink-0" />
                    Message sent successfully! I will get back to you soon.
                  </div>
                )}

                {errorMessage && (
                  <div className="mb-6 p-4 rounded-lg text-sm font-medium bg-red-50 text-red-600 dark:bg-red-900/30 dark:text-red-400 flex items-center gap-2">
                    <AlertCircle className="w-5 h-5 shrink-0" />
                    {errorMessage}
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Your Name</label>
                    <input 
                      type="text" 
                      name="user_name"
                      required
                      className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 text-slate-900 dark:text-white transition-shadow"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Your Email</label>
                    <input 
                      type="email" 
                      name="user_email"
                      required
                      className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 text-slate-900 dark:text-white transition-shadow"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div className="mb-6">
                  <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Subject</label>
                  <input 
                    type="text" 
                    name="subject"
                    required
                    className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 text-slate-900 dark:text-white transition-shadow"
                    placeholder="Internship Opportunity"
                  />
                </div>

                <div className="mb-6">
                  <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Message</label>
                  <textarea 
                    name="message"
                    required
                    rows="4"
                    className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 text-slate-900 dark:text-white resize-none transition-shadow"
                    placeholder="Hello Dipak, I'd like to discuss..."
                  ></textarea>
                </div>

                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full btn-primary flex justify-center items-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed group mt-auto"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                  {!isSubmitting && <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />}
                </button>
              </form>
            </GlowCard>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
