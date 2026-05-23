'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Code2, Globe, Search, Rocket } from 'lucide-react';

const AboutSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  const services = [
    { icon: Code2, title: "Full Stack Dev", desc: "Next.js & React expert" },
    { icon: Globe, title: "Web Solutions", desc: "Custom web apps" },
    { icon: Search, title: "SEO Optimized", desc: "Better ranking" },
    { icon: Rocket, title: "High Performance", desc: "Optimized speed" }
  ];

  return (
    <section id="about" className="relative py-24 px-4 bg-[#030712] text-white">
      {/* Decorative background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808005_1px,transparent_1px),linear-gradient(to_bottom,#80808005_1px,transparent_1px)] bg-[size:40px_40px]" />
      
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="container mx-auto max-w-6xl relative z-10"
      >
        <div className="flex flex-col lg:flex-row items-start gap-16">
          
          {/* Left - Image Column */}
          <motion.div variants={itemVariants} className="w-full lg:w-2/5 flex flex-col gap-6">
            <div className="relative group rounded-3xl overflow-hidden aspect-[4/5] shadow-2xl border border-white/10">
              <Image
                src="/Img/Wasim.png"
                alt="Wasim"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
              <div className="absolute bottom-8 left-8">
                <h3 className="text-2xl font-bold">Muhammad Wasim Uddin</h3>
                <p className="text-green-400 font-mono">Full Stack Developer</p>
              </div>
            </div>
          </motion.div>

          {/* Right - Content Column */}
          <motion.div variants={itemVariants} className="flex-1 space-y-8">
            <div>
              <h2 className="text-4xl font-extrabold mb-4">
                Driving innovation through <br />
                <span className="text-green-500">clean code & strategy</span>
              </h2>
              <p className="text-gray-400 text-lg leading-relaxed">
                I am a passionate full stack developer from Bangladesh, focused on building dynamic, scalable, and user-centric web applications. My expertise lies in blending cutting-edge technology with thoughtful UX/UI to solve real-world problems.
              </p>
            </div>

            {/* Grid Services */}
            <div className="grid grid-cols-2 gap-4">
              {services.map((s, i) => (
                <div key={i} className="p-4 rounded-2xl bg-white/5 border border-white/5 hover:border-green-500/20 transition-colors">
                  <s.icon className="w-8 h-8 text-green-500 mb-3" />
                  <h4 className="font-bold text-white mb-1">{s.title}</h4>
                  <p className="text-sm text-gray-400">{s.desc}</p>
                </div>
              ))}
            </div>

            <motion.div 
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <a
                href="#contact"
                className="inline-flex items-center gap-2 bg-white text-gray-950 px-8 py-4 rounded-2xl font-bold hover:bg-green-500 hover:text-white transition-all shadow-[0_0_20px_rgba(255,255,255,0.1)]"
              >
                Let's Collaborate
              </a>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default AboutSection;
