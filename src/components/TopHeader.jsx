'use client'
import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaGithub } from 'react-icons/fa';
import { Calendar, Clock } from 'lucide-react';
import { TypeAnimation } from 'react-type-animation';
import { motion, AnimatePresence } from 'framer-motion';
import { gsap } from 'gsap';

const TopHeader = () => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const socialRef = useRef(null);

  useEffect(() => {
    // Clock update interval
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    // GSAP Animation for Social Icons
    const icons = socialRef.current.querySelectorAll('.social-icon');
    gsap.fromTo(icons, 
      { opacity: 0, y: -10 }, 
      { opacity: 1, y: 0, duration: 0.6, stagger: 0.1, ease: "power2.out", delay: 0.5 }
    );

    return () => clearInterval(timer);
  }, []);

  const formatDate = (date) => {
    return date.toLocaleDateString('en-US', {
      weekday: 'short',
      month: 'short',
      day: 'numeric',
      year: 'numeric'
    });
  };

  const formatTime = (date) => {
    return date.toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: true
    });
  };

  return (
    <motion.div 
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="w-full bg-gray-900/80 backdrop-blur-md border-b border-white/10 px-4 py-2 relative"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">

        {/* Left - Date & Time */}
        <div className="flex items-center gap-4 text-gray-300">
          <div className="flex items-center gap-1.5 group cursor-default">
            <Calendar className="w-3.5 h-3.5 text-green-400 group-hover:scale-110 transition-transform" />
            <span className="text-[11px] md:text-xs font-medium tracking-wide whitespace-nowrap">
              {formatDate(currentTime)}
            </span>
          </div>
          
          <div className="hidden sm:flex items-center gap-1.5 group cursor-default border-l border-white/10 pl-4">
            <Clock className="w-3.5 h-3.5 text-green-400 group-hover:rotate-12 transition-transform" />
            <span className="text-[11px] md:text-xs font-mono font-medium tracking-tight whitespace-nowrap">
              {formatTime(currentTime)}
            </span>
          </div>
        </div>

        {/* Center - Type Animation */}
        <div className="flex-grow flex justify-center overflow-hidden">
          <div className="bg-white/5 px-4 py-1 rounded-full border border-white/5 hidden lg:block shadow-inner">
            <TypeAnimation
              sequence={[
                'আসসালামু আলাইকুম', 2500,
                'Welcome to my digital space', 2500,
                'Explore my creative journey', 2500,
              ]}
              speed={50}
              wrapper="span"
              repeat={Infinity}
              className="text-green-400 text-[12px] font-medium tracking-wider"
            />
          </div>
        </div>

        {/* Right - Social Icons */}
        <div 
          ref={socialRef}
          className="flex items-center gap-2 md:gap-3"
        >
          {[
            { icon: FaFacebookF, href: "https://www.facebook.com/wasim.mdwasimuddin", color: "hover:text-blue-500" },
            { icon: FaTwitter, href: "https://twitter.com", color: "hover:text-sky-400" },
            { icon: FaLinkedinIn, href: "https://www.linkedin.com/in/mwasimuddin/", color: "hover:text-blue-600" },
            { icon: FaGithub, href: "https://github.com/Omarmdwasimuddin", color: "hover:text-white" }
          ].map((social, index) => (
            <React.Fragment key={index}>
              <Link 
                href={social.href} 
                target="_blank"
                className={`social-icon p-1.5 rounded-lg bg-white/5 border border-white/5 text-gray-400 ${social.color} hover:bg-white/10 hover:border-white/10 transition-all duration-300 shadow-sm`}
              >
                <social.icon className="text-[13px] md:text-sm" />
              </Link>
              {index < 3 && <div className="h-3 w-px bg-white/10 last:hidden hidden md:block"></div>}
            </React.Fragment>
          ))}
        </div>

      </div>
    </motion.div>
  );
};

export default TopHeader;
