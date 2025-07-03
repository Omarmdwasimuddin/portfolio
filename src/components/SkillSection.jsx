'use client';

import React, { useEffect } from 'react';
import Image from 'next/image';
import AOS from 'aos';

const skills = [
  { name: 'Next.js', icon: '/Img/nextjs2.png' },
  { name: 'React.js', icon: '/Img/reactjs.png' },
  { name: 'Tailwind CSS', icon: '/Img/tailwind.png' },
  { name: 'Prisma', icon: '/Img/prisma.png' },
  { name: 'MySQL', icon: '/Img/mysql.png' },
  { name: 'WordPress', icon: '/Img/wordpress.png' },
  { name: 'Shopify', icon: '/Img/shopify.png' },
  { name: 'SEO', icon: '/Img/seo.jpg' },
  { name: 'Docker', icon: '/Img/docker.png' },       
  { name: 'DevOps', icon: '/Img/devops.png' }, 
  { name: 'Github', icon: '/Img/github.png' },       
  { name: 'PostgreSQL', icon: '/Img/Postgresql.png' },       
];

const SkillSection = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section id="skill" className="bg-gray-900 py-20 px-4 text-white">
      <div className="container mx-auto max-w-6xl text-center">
        <h2 className="text-3xl font-bold mb-10 text-green-500" data-aos="fade-down">
          <span className='text-white'>My</span> Skills
        </h2>

        <div
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 place-items-center"
          data-aos="fade-up"
        >
          {skills.map((skill, index) => (
            <div
              key={index}
              className="bg-gray-800 rounded-xl p-6 w-full max-w-[180px] flex flex-col items-center shadow-lg hover:scale-105 transition-transform"
            >
              <div className="relative w-16 h-16 mb-4">
                <Image
                  src={skill.icon}
                  alt={skill.name}
                  fill
                  className="object-contain"
                />
              </div>
              <p className="text-sm font-medium">{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillSection;
