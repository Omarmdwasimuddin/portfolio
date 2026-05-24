'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, useAnimationFrame, useMotionValue } from 'framer-motion';
import { ArrowUpRight, Clock } from 'lucide-react';

const BlogSection = ({ blogpost }) => {
  const baseX = useMotionValue(0);

  // Auto-scroll logic independent of drag
  useAnimationFrame((t, delta) => {
    let moveBy = delta * 0.05;
    baseX.set(baseX.get() - moveBy);
    
    // Reset loop (adjusting value based on width of cards)
    if (baseX.get() <= -1000) {
      baseX.set(0);
    }
  });

  return (
    <section id="blog" className="relative py-24 px-4 bg-[#030712] text-white overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-green-500/5 rounded-full blur-[120px] -z-0" />

      <div className="container mx-auto max-w-6xl relative z-10 mb-16 text-center">
        <h2 className="text-sm font-mono text-green-500 tracking-widest uppercase mb-2">Insights</h2>
        <h3 className="text-4xl sm:text-5xl font-extrabold text-white">Latest Articles</h3>
      </div>

      {/* Marquee Container */}
      <div className="relative overflow-hidden w-full cursor-grab active:cursor-grabbing">
        <motion.div 
          className="flex gap-8"
          style={{ x: baseX }}
          drag="x"
          dragConstraints={{ left: -2000, right: 0 }}
        >
          {Array.isArray(blogpost) && [...blogpost, ...blogpost, ...blogpost].map((item, i) => (
            <div
              key={i}
              className="flex-shrink-0 w-[300px] md:w-[350px] bg-white/5 border border-white/10 rounded-3xl overflow-hidden backdrop-blur-md transition-all hover:border-green-500/30 hover:shadow-2xl hover:shadow-green-500/10 flex flex-col"
            >
              {/* Image */}
              <div className="relative w-full h-48 overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#030712] to-transparent opacity-80" />
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-1">
                <div className="flex items-center gap-2 text-[10px] font-mono text-green-400 mb-4">
                  <Clock className="w-3 h-3" />
                  <span>{item.data}</span>
                </div>
                <h4 className="text-lg font-bold mb-3 group-hover:text-green-400 transition-colors leading-tight">
                  {item.title}
                </h4>
                <p className="text-gray-400 text-xs mb-6 leading-relaxed line-clamp-3 flex-1">
                  {item.summary}
                </p>
                
                <Link
                  href={`/blog/${item.slug}`}
                  className="inline-flex items-center gap-2 text-sm font-bold text-white hover:text-green-400 transition-colors"
                >
                  Read Article <ArrowUpRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default BlogSection;
