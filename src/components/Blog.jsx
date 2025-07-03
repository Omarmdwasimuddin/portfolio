'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

const blogs = [
  {
    id: 1,
    title: 'How I Built a News Portal with Next.js & Prisma',
    summary: 'A step-by-step breakdown of my experience building a full-stack news platform using modern technologies.',
    date: 'July 1, 2025',
    slug: '/blogs/news-portal-nextjs',
    image: '/Img/projects/newsportal.png',
  },
  {
    id: 2,
    title: 'Blood Donation App: Building for Social Good',
    summary: 'I share my journey of building a life-saving app using filters, location search, and authentication.',
    date: 'June 25, 2025',
    slug: '#',
    image: '/Img/projects/bloodDonation.png',
  },
  {
    id: 3,
    title: 'Next.js vs Traditional React: What I Learned',
    summary: 'A comparison from a developer perspective after switching from CRA to Next.js.',
    date: 'June 15, 2025',
    slug: '#',
    image: '/Img/projects/dineSmart.png',
  },
];

const BlogSection = () => {
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
          {blogs.map((blog) => (
            <SwiperSlide key={blog.id}>
              <div className="bg-gray-300 rounded-xl shadow-md hover:shadow-lg transition-all overflow-hidden">
                <div className="relative w-full h-48 group overflow-hidden">
                  <Image
                    src={blog.image}
                    alt={blog.title}
                    fill
                    className="object-cover transform group-hover:scale-110 transition duration-500"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
                <div className="p-5">
                  <p className="text-sm text-gray-600 mb-2">{blog.date}</p>
                  <h3 className="text-xl font-semibold mb-3 text-gray-800">{blog.title}</h3>
                  <p className="text-gray-700 mb-4 text-sm">{blog.summary}</p>
                  <Link
                    href={blog.slug}
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
