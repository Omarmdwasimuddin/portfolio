'use client'
import React from 'react';
import Link from 'next/link';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaGithub } from 'react-icons/fa';
import { TypeAnimation } from 'react-type-animation';

const TopHeader = () => {

  const today = new Date();
  const date = today.getDate();
  const month = today.getMonth() + 1;
  const year = today.getFullYear();

  return (
    <div className="w-full bg-gray-800 border-b border-gray-600 px-4 py-2">
      <div className="max-w-7xl mx-auto flex items-center justify-between relative">

        {/* Left - Date */}
        <div className="flex-shrink-0">
          <h1 className="text-white text-sm">
            Today: {date}/{month}/{year}
          </h1>
        </div>

        {/* Center - Type Animation */}
        <div className="absolute left-1/2 -translate-x-1/2 hidden md:block">
          <TypeAnimation
            sequence={[
              'আসসালামু আলাইকুম', 2000,
              'Welcome to my portfolio', 2000,
            ]}
            speed={50}
            wrapper="span"
            repeat={Infinity}
            className="text-green-400 text-sm"
          />
        </div>

        {/* Right - Social Icons */}
        <div className="flex items-center gap-4">
          <Link href="https://www.facebook.com/wasim.mdwasimuddin" target="_blank">
            <FaFacebookF className="text-sm text-white cursor-pointer hover:text-blue-500" />
          </Link>
          <div className="h-4 w-px bg-gray-600"></div>

          <Link href="https://twitter.com" target="_blank">
            <FaTwitter className="text-sm text-white cursor-pointer hover:text-blue-400" />
          </Link>
          <div className="h-4 w-px bg-gray-600"></div>

          <Link href="https://www.linkedin.com/in/mwasimuddin/" target="_blank">
            <FaLinkedinIn className="text-sm text-white cursor-pointer hover:text-blue-600" />
          </Link>
          <div className="h-4 w-px bg-gray-600"></div>

          <Link href="https://github.com/Omarmdwasimuddin" target="_blank">
            <FaGithub className="text-sm text-white cursor-pointer hover:text-gray-400" />
          </Link>
        </div>

      </div>
    </div>
  );
};

export default TopHeader;
