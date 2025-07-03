'use client';

import React, { useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import AOS from 'aos';
import 'aos/dist/aos.css';

const AboutSection = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: false });
  }, []);

  return (
    <section id="about" className="bg-gray-800 py-20 px-4 text-gray-800">
      <div className="container mx-auto max-w-6xl flex flex-col md:flex-row items-center gap-10">
        
        {/* Left - Image */}
        <div
          data-aos="fade-right"
          className="w-[260px] h-[260px] sm:w-[300px] sm:h-[300px] md:w-[360px] md:h-[360px] relative rounded-xl overflow-hidden shadow-lg"
        >
          <Image
            src="/Img/Wasim.png"
            alt="Wasim"
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Right - Content */}
        <div data-aos="fade-left" className="flex-1 text-center md:text-left">
          <h2 className="text-3xl font-bold mb-4 text-gray-950">About Me</h2>
          <p className="text-gray-400 mb-6 leading-relaxed max-w-2xl mx-auto md:mx-0">
            I'm <span className="font-semibold text-white">Muhammad Wasim Uddin</span>, a passionate full stack web developer from Bangladesh. I specialize in building dynamic, responsive websites and web apps using modern technologies like <strong>Next.js</strong>, <strong>React</strong>, <strong>Tailwind CSS</strong>, <strong>Prisma</strong>, <strong>MySQL</strong>, <strong>WordPress</strong>, and <strong>Shopify</strong>. I'm also skilled in <strong>SEO</strong> and optimizing websites for better performance and ranking.
          </p>

          <div className="flex justify-center md:justify-start">
            <Link
              href="#contact"
              className="inline-flex items-center border border-green-600 text-green-600 hover:bg-green-600 hover:text-white px-6 py-3 font-semibold rounded-full shadow-md transition-all"
            >
              Contact Me
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
