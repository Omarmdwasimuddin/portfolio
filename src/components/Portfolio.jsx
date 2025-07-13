'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import { motion } from 'framer-motion'; 
import { FaGithub } from 'react-icons/fa';
import 'swiper/css';


const PortfolioSection = (props) => {
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
          {props.portfolio.map((item,i) => (
            <SwiperSlide key={i}>
              <div className="bg-gray-800 rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-all">
                <div className="relative w-full h-56 overflow-hidden rounded-lg group cursor-pointer">
                  <Image
                    src={item['image']}
                    alt={item['title']}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover transition-transform duration-300 ease-in-out group-hover:scale-105 group-hover:brightness-110"
                  />
                </div>
                <div className="p-5">
                  <h3 className="text-xl font-semibold mb-2 text-white">{item['title']}</h3>
                  <p className="text-gray-400 mb-4 text-sm">{item['description']}</p>
                  <div className="flex gap-3">
                    <Link
                      href={item['liveUrl']}
                      target="_blank"
                      className="inline-block bg-green-600 text-white px-4 py-2 rounded-full text-sm hover:bg-green-700 transition"
                    >
                      Live Preview
                    </Link>
                    <Link
                      href={item['githubUrl']}
                      target="_blank"
                      className="inline-flex items-center gap-1 bg-gray-700 text-white px-4 py-2 rounded-full text-sm hover:bg-gray-800 transition"
                    >
                      <FaGithub /> GitHub
                    </Link>
                  </div>
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
