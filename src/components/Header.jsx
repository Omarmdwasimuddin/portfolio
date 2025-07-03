'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import Image from 'next/image';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Detect scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // For closing mobile menu on resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setIsOpen(false);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${scrolled ? 'bg-gray-800/70 backdrop-blur' : 'bg-gray-900'}`}>
      <nav className="shadow-md py-4 px-6">
        <div className="max-w-7xl mx-auto flex items-center justify-between">

          {/* Logo/Profile */}
          <Link href="/" className="flex-shrink-0 block w-[50px] h-[50px] rounded-full overflow-hidden">
            <Image
              src="/Img/Wasim.png"
              alt="Wasim's Profile"
              width={50}
              height={50}
              className="object-cover rounded-full w-full h-full hover:scale-105 transition-transform"
              priority
            />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2">
            <ul className="flex space-x-6">
              <li><Link href="/" className="text-gray-200 hover:text-green-500 transition-colors">HOME</Link></li>
              <li><Link href="#skill" className="text-gray-200 hover:text-green-500 transition-colors">SKILLS</Link></li>
              <li><Link href="#about" className="text-gray-200 hover:text-green-500 transition-colors">ABOUT</Link></li>
              <li><Link href="#portfolio" className="text-gray-200 hover:text-green-500 transition-colors">PORTFOLIO</Link></li>
              <li><Link href="#contact" className="text-gray-200 hover:text-green-500 transition-colors">CONTACT</Link></li>
              <li><Link href="#blog" className="text-gray-200 hover:text-green-500 transition-colors">BLOG</Link></li>
            </ul>
          </div>

          {/* Login */}
          <div className="hidden md:block">
            <Link 
              href="#" 
              className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-md transition-colors"
            >
              Login
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button
            aria-label={isOpen ? "Close menu" : "Open menu"}
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-1 rounded-md hover:bg-gray-800 transition-colors"
          >
            {isOpen ? (
              <X className="w-6 h-6 text-gray-400" />
            ) : (
              <Menu className="w-6 h-6 text-gray-400" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden mt-4 space-y-3 px-6 pb-4 animate-fadeIn">
            <Link href="/" className="block text-gray-200 hover:text-green-500 py-2 transition-colors" onClick={() => setIsOpen(false)}>HOME</Link>
            <Link href="#skill" className="block text-gray-200 hover:text-green-500 py-2 transition-colors" onClick={() => setIsOpen(false)}>SKILLS</Link>
            <Link href="#about" className="block text-gray-200 hover:text-green-500 py-2 transition-colors" onClick={() => setIsOpen(false)}>ABOUT</Link>
            <Link href="#portfolio" className="block text-gray-200 hover:text-green-500 py-2 transition-colors" onClick={() => setIsOpen(false)}>PROJECTS</Link>
            <Link href="#contact" className="block text-gray-200 hover:text-green-500 py-2 transition-colors" onClick={() => setIsOpen(false)}>CONTACT</Link>
            <Link href="#blog" className="block text-gray-200 hover:text-green-500 py-2 transition-colors" onClick={() => setIsOpen(false)}>BLOG</Link>
            <Link 
              href="/login" 
              className="block bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-md text-center mt-2 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Login
            </Link>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
