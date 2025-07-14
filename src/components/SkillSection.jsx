'use client';

import React, { useEffect } from 'react';
import Image from 'next/image';
import AOS from 'aos';

const SkillSection = ({ skill }) => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section id="skills" className="bg-gray-900 py-20 px-4 text-white">
      <div className="container mx-auto max-w-6xl text-center">
        <h2 
          className="text-3xl sm:text-4xl font-bold mb-12 text-green-500" 
          data-aos="fade-down"
        >
          <span className='text-white'>My</span> Skills
        </h2>

        <div
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 place-items-center"
          data-aos="fade-up"
        >
          {skill.map((item, index) => (
            <div
              key={index}
              className="group bg-gray-800/80 hover:bg-gray-700/90 rounded-xl p-4 w-full max-w-[160px] flex flex-col items-center shadow-lg hover:shadow-green-500/20 transition-all duration-300 border border-gray-700 hover:border-green-500/30"
            >
              <div className="relative w-14 h-14 mb-3">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  className="object-contain"
                  quality={100}
                  sizes="(max-width: 768px) 50px, 60px"
                  onError={(e) => {
                    e.target.src = '/fallback-tech-icon.svg'; // Add a fallback icon
                  }}
                />
              </div>
              <p className="text-sm font-medium text-gray-300 group-hover:text-white transition-colors">
                {item.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillSection;