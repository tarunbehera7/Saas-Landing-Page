import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Terminal } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative pt-32 pb-16 lg:pt-48 lg:pb-32 px-6">
      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-96 bg-blue-500/20 blur-[120px] rounded-full pointer-events-none" />
      
      <div className="container mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-slate-800 bg-slate-900/50 text-xs text-slate-400 mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
          <span>New: Enterprise-ready scalability</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-5xl lg:text-7xl font-bold tracking-tight mb-8 text-gradient"
        >
          Ship Faster with <br /> 
          <span className="text-white">Intelligent Infrastructure</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="max-w-2xl mx-auto text-lg text-slate-400 mb-10 leading-relaxed"
        >
          Automate your development workflow with our AI-powered platform. 
          Deployment, scaling, and monitoring handled in a single click.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <button className="px-8 py-3 rounded-lg bg-white text-black font-semibold hover:bg-slate-200 transition-all flex items-center gap-2 group">
            Get Started 
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </button>
          <button className="px-8 py-3 rounded-lg border border-slate-800 bg-slate-900/50 hover:bg-slate-800 transition-all flex items-center gap-2">
            <Terminal size={18} />
            View Documentation
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
