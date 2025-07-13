'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import {
  Menu, X,
  Home, User, Briefcase, Phone, BookOpen, Layers, LogIn
} from 'lucide-react';

const navItems = [
  { href: '/', icon: <Home className="w-6 h-6" />, label: 'Home' },
  { href: '#skill', icon: <Layers className="w-6 h-6" />, label: 'Skills' },
  { href: '#about', icon: <User className="w-6 h-6" />, label: 'About' },
  { href: '#portfolio', icon: <Briefcase className="w-6 h-6" />, label: 'Portfolio' },
  { href: '#contact', icon: <Phone className="w-6 h-6" />, label: 'Contact' },
  { href: '#blog', icon: <BookOpen className="w-6 h-6" />, label: 'Blog' },
  { href: '/login', icon: <LogIn className="w-6 h-6" />, label: 'Login' },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleResize = () => window.innerWidth >= 768 && setIsOpen(false);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${scrolled ? 'bg-gray-800/70 backdrop-blur' : 'bg-gray-900'}`}>
      <nav className="shadow-md py-4 px-6">
        <div className="max-w-7xl mx-auto flex items-center justify-between">

          {/* Desktop Icon Menu */}
          <div className="hidden md:flex gap-8 items-center justify-center w-full">
            {navItems.map((item, index) => (
              <Link key={index} href={item.href} className="group relative flex flex-col items-center">
                <div className="text-gray-300 group-hover:text-green-500 transition-all transform group-hover:scale-125">
                  {item.icon}
                </div>
                <span className="absolute top-[150%] bg-gray-700 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-50">
                  {item.label}
                </span>
              </Link>
            ))}
          </div>

          {/* Mobile Menu Toggle */}
          <button
            aria-label={isOpen ? "Close menu" : "Open menu"}
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-md hover:bg-gray-800 transition-colors"
          >
            {isOpen ? <X className="w-6 h-6 text-gray-300" /> : <Menu className="w-6 h-6 text-gray-300" />}
          </button>
        </div>

        {/* Mobile Icon Menu */}
        {isOpen && (
          <div className="md:hidden mt-4 grid grid-cols-4 sm:grid-cols-5 gap-6 px-6 pb-6">
            {navItems.map((item, index) => (
              <Link
                key={index}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="group relative flex flex-col items-center text-gray-300 hover:text-green-500 transition-colors"
              >
                <div className="group-hover:scale-125 transition-transform">{item.icon}</div>
                <span className="text-xs mt-1">{item.label}</span>
              </Link>
            ))}
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
