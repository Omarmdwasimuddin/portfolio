'use client';

import React from 'react';
import Link from 'next/link';
import { FaDownload } from 'react-icons/fa';
import { TypeAnimation } from 'react-type-animation';
import ProfileCard from '@/components/ProfileCard';

const HeroSection = () => {
  return (
    <section className="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-20 px-4">
      <div className="container mx-auto max-w-6xl flex flex-col-reverse lg:flex-row items-center justify-between gap-16 lg:gap-12">
        
        {/* Left Content */}
        <div className="w-full lg:w-1/2 text-center lg:text-left">
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
                'DevOps Enthusiast', 2000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h3>

          <p className="text-gray-300 mb-6 max-w-md mx-auto lg:mx-0">
            I create high-performance websites using modern tech stacks like Next.js, Tailwind CSS, and Prisma with clean UI/UX and optimized SEO.
          </p>

          <Link
            href="/cv/MuhammadWasimUddin_FullStackDeveloper_Resume.pdf"
            download
            className="inline-flex items-center bg-green-600 hover:bg-green-700 px-6 py-3 text-white font-semibold rounded-full shadow-md transition-all"
          >
            <FaDownload className="mr-2" /> Download CV
          </Link>
        </div>

        {/* Right Content - ProfileCard */}
        <div className="w-full lg:w-1/2 flex justify-center items-center">
          <div className="max-w-[360px] sm:max-w-[380px] md:max-w-[400px] w-full scale-[0.75] sm:scale-85">
            <ProfileCard
              avatarUrl="/Img/Wasim-removebg.png"
              iconUrl="/iconPattern.jpg"
              grainUrl = "/IconPattern.png"
              name="Wasim Uddin Omar"
              title="Full Stack Developer"
              handle="omarmdwasimuddin"
              status="Online"
              contactText="Contact Me"
              showUserInfo={true}
              enableTilt={true}
              onContactClick={() => window.location.href = '#contact'}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
