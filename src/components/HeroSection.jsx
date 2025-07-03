'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaDownload } from 'react-icons/fa';
import { TypeAnimation } from 'react-type-animation';

const HeroSection = () => {
  return (
    <section className="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-20 px-4">
      <div className="container mx-auto max-w-5xl flex flex-col-reverse md:flex-row items-center justify-between gap-12 md:gap-8">
        
        {/* Left Content */}
        <div className="flex-1 text-center md:text-left">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            <span className="text-yellow-400">Hello,</span><br />
            I Am <span className="text-white">Wasim</span>
          </h2>

          <h3 className="text-green-500 text-xl sm:text-2xl mb-4">
            <TypeAnimation
              sequence={[
                'Full Stack Developer', 2000,
                'React.js Expert', 2000,
                'Next.js Lover', 2000,
                'DevOps Enthusiast', 2000
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h3>

          <p className="text-gray-300 mb-6 max-w-md mx-auto md:mx-0">
            I create high-performance websites using modern tech stacks like Next.js, Tailwind CSS, and Prisma with clean UI/UX and optimized SEO.
          </p>

          <Link
            href="/cv/MuhammadWasimUddin_FullStackDeveloper_Resume .pdf"
            download
            className="inline-flex items-center bg-green-600 hover:bg-green-700 px-6 py-3 text-white font-semibold rounded-full shadow-md transition-all"
          >
            <FaDownload className="mr-2" /> Download CV
          </Link>
        </div>

        {/* Right Content - Image */}
        <div className="w-[260px] h-[260px] sm:w-[300px] sm:h-[300px] md:w-[360px] md:h-[360px] relative rounded-full overflow-hidden shadow-2xl">
          <Image
            src="/Img/WasimPicPortfolio2.png"
            alt="Wasim Profile"
            fill
            sizes="(max-width: 640px) 260px, (max-width: 768px) 300px, 360px"
            className="object-cover"
            priority
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

