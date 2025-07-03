'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import { motion } from 'framer-motion'; 
import 'swiper/css';

const projects = [
  {
    id: 1,
    title: 'DineSmart Website',
    description: 'Dynamic news platform using Next.js, Prisma, and MySQL with admin control.',
    image: '/Img/projects/dineSmart.png',
    liveLink: 'https://final-project-nine-dun.vercel.app',
  },
  {
    id: 2,
    title: 'Blood Donation App',
    description: 'Search and filter blood donors by area and group. Built with Next.js and Prisma.',
    image: '/Img/projects/bloodDonation.png',
    liveLink: 'https://finder-project-jade.vercel.app/',
  },
  {
    id: 3,
    title: 'News Portal Website',
    description: 'Dynamic news platform using Next.js, Prisma, and MySQL with admin control.',
    image: '/Img/projects/newsportal.png',
    liveLink: 'https://news-portal-five-pink.vercel.app/',
  },
];

const PortfolioSection = () => {
  return (
    <motion.section
      id="portfolio"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      viewport={{ once: true }}
      className="relative py-16 px-4 overflow-hidden"
    >
      
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-[length:200%_200%] animate-gradient" />

      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 text-white">
          My <span className="text-green-600">Portfolio</span>
        </h2>

        <Swiper
          modules={[Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {projects.map((project) => (
            <SwiperSlide key={project.id}>
              <div className="bg-gray-800 rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-all">
                <div className="relative w-full h-56 overflow-hidden rounded-lg group cursor-pointer">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover transition-transform duration-300 ease-in-out group-hover:scale-105 group-hover:brightness-110"
                  />
                </div>
                <div className="p-5">
                  <h3 className="text-xl font-semibold mb-2 text-gray-950">{project.title}</h3>
                  <p className="text-gray-400 mb-4 text-sm">{project.description}</p>
                  <Link
                    href={project.liveLink}
                    target="_blank"
                    className="inline-block bg-green-600 text-white px-4 py-2 rounded-full text-sm hover:bg-green-700 transition"
                  >
                    Live Preview
                  </Link>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </motion.section>
  );
};

export default PortfolioSection;
