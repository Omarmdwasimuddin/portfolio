'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, useAnimationFrame, useMotionValue } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

const PortfolioSection = ({ portfolio }) => {
  const baseX = useMotionValue(0);

  // Auto-scroll logic independent of drag
  useAnimationFrame((t, delta) => {
    let moveBy = delta * 0.05;
    baseX.set(baseX.get() - moveBy);
    
    // Reset loop
    if (baseX.get() <= -1000) {
      baseX.set(0);
    }
  });

  return (
    <section id="portfolio" className="relative py-24 px-4 bg-[#030712] text-white overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-green-500/10 rounded-full blur-[150px] -z-0" />

      <div className="container mx-auto max-w-6xl relative z-10 mb-16 text-center">
        <h2 className="text-sm font-mono text-green-500 tracking-widest uppercase mb-2">Showcase</h2>
        <h3 className="text-4xl sm:text-5xl font-extrabold text-white">Featured Projects & Craftsmanship</h3>
      </div>

      {/* Marquee Container */}
      <div className="relative overflow-hidden w-full cursor-grab active:cursor-grabbing">
        <motion.div 
          className="flex gap-8"
          style={{ x: baseX }}
          drag="x"
          dragConstraints={{ left: -2000, right: 0 }}
        >
          {Array.isArray(portfolio) && [...portfolio, ...portfolio, ...portfolio].map((item, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-[300px] md:w-[350px] bg-white/5 border border-white/10 rounded-3xl overflow-hidden backdrop-blur-md transition-all hover:border-green-500/30 hover:shadow-2xl hover:shadow-green-500/10"
            >
              <div className="relative w-full h-48 overflow-hidden">
                <Image src={item.image} alt={item.title} fill className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#030712] to-transparent opacity-80" />
              </div>
              <div className="p-6">
                <h4 className="text-lg font-bold mb-2 group-hover:text-green-400 transition-colors">{item.title}</h4>
                <p className="text-gray-400 text-xs mb-4 leading-relaxed line-clamp-2">{item.description}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {Array.isArray(item.techStack) ? item.techStack.slice(0, 3).map((tech, i) => (
                    <span key={i} className="text-[9px] font-mono uppercase bg-white/5 px-2 py-1 rounded border border-white/5 text-gray-400">
                      {tech}
                    </span>
                  )) : null}
                </div>
                <div className="flex items-center gap-3">
                  <Link href={item.liveUrl} target="_blank" className="flex-1 flex items-center justify-center gap-2 bg-green-500 text-gray-950 py-2 rounded-xl font-bold text-xs hover:bg-green-400 transition-colors">
                    Live <ExternalLink className="w-3 h-3" />
                  </Link>
                  <Link href={item.githubUrl} target="_blank" className="p-2.5 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 transition-colors">
                    <Github className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default PortfolioSection;
