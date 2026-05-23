'use client';

import React, { useRef } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';

const SkillSection = ({ skill }) => {
  const containerRef = useRef(null);

  const handleMouseEnter = (e) => {
    gsap.to(e.currentTarget, {
      scale: 1.05,
      rotate: 'random(-5, 5)',
      duration: 0.3,
      ease: "power2.out"
    });
  };

  const handleMouseLeave = (e) => {
    gsap.to(e.currentTarget, {
      scale: 1,
      rotate: 0,
      duration: 0.3,
      ease: "power2.out"
    });
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section id="skills" className="relative py-24 px-4 bg-[#030712] text-white overflow-hidden">
      {/* Background Decorative */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-green-900/10 via-[#030712] to-[#030712] -z-0" />

      <div className="container mx-auto max-w-6xl relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-sm font-mono text-green-500 tracking-widest uppercase mb-2">Technical Proficiency</h2>
          <h3 className="text-4xl sm:text-5xl font-extrabold text-white">My Tech Arsenal</h3>
        </motion.div>

        <motion.div
          ref={containerRef}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6"
        >
          {skill.map((item, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              className="group relative bg-white/5 backdrop-blur-sm border border-white/5 p-6 rounded-2xl flex flex-col items-center justify-center transition-all hover:bg-white/10 hover:border-green-500/30 shadow-lg"
            >
              <div className="relative w-12 h-12 mb-4">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  className="object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300"
                  quality={90}
                  sizes="48px"
                  onError={(e) => { e.target.src = '/fallback-tech-icon.svg'; }}
                />
              </div>
              <p className="text-xs font-semibold text-gray-400 group-hover:text-green-400 transition-colors uppercase tracking-wider">
                {item.name}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default SkillSection;
