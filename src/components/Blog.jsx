'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';


const BlogSection = (props) => {
  return (
    <motion.section
      id="blog"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      viewport={{ once: true }}
      className="bg-gray-800 py-16 px-4"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 text-white">
          My <span className="text-green-500">Blogs</span>
        </h2>

        <Swiper
          modules={[Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
          }}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {props.blogpost.map((item,i) => (
            <SwiperSlide key={i}>
              <div className="bg-gray-900 rounded-xl shadow-md hover:shadow-lg transition-all overflow-hidden">
                <div className="relative w-full h-48 group overflow-hidden">
                  <Image
                    src={item['image']}
                    alt={item['title']}
                    fill
                    className="object-cover transform group-hover:scale-110 transition duration-500"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
                <div className="p-5">
                  <p className="text-sm text-white mb-2">{item['data']}</p>
                  <h3 className="text-xl font-semibold mb-3 text-gray-100">{item['title']}</h3>
                  <p className="text-gray-100 mb-4 text-sm">{item['summary']}</p>
                  <Link
                    href={item['slug']}
                    className="inline-block text-green-600 font-semibold hover:underline text-sm"
                  >
                    Read More →
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

export default BlogSection;
