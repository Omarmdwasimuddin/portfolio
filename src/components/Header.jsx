'use client';
import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { 
  Menu, X, Home, User, Briefcase, 
  Phone, BookOpen, Layers, Terminal,
  ExternalLink
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { gsap } from 'gsap';

const navItems = [
  { href: '/', icon: Home, label: 'Home' },
  { href: '#skills', icon: Layers, label: 'Skills' },
  { href: '#about', icon: User, label: 'About' },
  { href: '#portfolio', icon: Briefcase, label: 'Work' },
  { href: '#blog', icon: BookOpen, label: 'Blog' },
  { href: '#contact', icon: Phone, label: 'Contact' }
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Magnetic effect for desktop nav items using GSAP
  const handleMouseEnter = (e) => {
    const item = e.currentTarget;
    gsap.to(item, {
      y: -4,
      duration: 0.3,
      ease: "power2.out"
    });
  };

  const handleMouseLeave = (e) => {
    const item = e.currentTarget;
    gsap.to(item, {
      y: 0,
      duration: 0.3,
      ease: "power2.out"
    });
  };

  return (
    <header className={`fixed left-0 right-0 z-40 transition-all duration-500 px-4 md:px-8 ${scrolled ? 'top-2' : 'top-[56px]'}`}>
      <nav 
        className={`max-w-6xl mx-auto transition-all duration-500 rounded-2xl border ${
          scrolled 
            ? 'bg-gray-950/80 backdrop-blur-xl border-white/10 shadow-2xl py-3 px-6' 
            : 'bg-gray-900/40 backdrop-blur-md border-white/5 py-4 px-6'
        }`}
      >
        <div className="flex items-center justify-between">
          
          {/* Logo Section */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 bg-green-500 rounded-xl flex items-center justify-center rotate-3 group-hover:rotate-0 transition-transform duration-300 shadow-[0_0_20px_rgba(34,197,94,0.3)]">
              <Terminal className="text-gray-950 w-6 h-6" />
            </div>
            <div className="flex flex-col">
              <span className="text-white font-bold text-lg leading-tight tracking-tight">Wasim.</span>
              <span className="text-green-500 text-[10px] font-mono uppercase tracking-widest">Dev_Portfolio</span>
            </div>
          </Link>

          {/* Desktop Navigation - Floating Dock Style */}
          <div className="hidden md:flex items-center bg-white/5 border border-white/5 rounded-full px-2 py-1.5 backdrop-blur-sm">
            {navItems.map((item, index) => (
              <Link 
                key={index} 
                href={item.href}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                className="relative px-4 py-2 text-sm font-medium text-gray-400 hover:text-white transition-colors group"
              >
                <span className="relative z-10 flex items-center gap-2">
                  <item.icon className="w-4 h-4" />
                  {item.label}
                </span>
                <motion.div 
                  className="absolute inset-0 bg-white/5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                  layoutId="nav-hover"
                />
              </Link>
            ))}
          </div>

          {/* Right Side - CTA & Mobile Toggle */}
          <div className="flex items-center gap-4">
            <Link 
              href="https://about-wasim.vercel.app/" 
              target="_blank"
              className="hidden sm:flex items-center gap-2 bg-green-500 hover:bg-green-400 text-gray-950 px-5 py-2.5 rounded-xl text-sm font-bold transition-all hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(34,197,94,0.2)]"
            >
              Resume
              <ExternalLink className="w-4 h-4" />
            </Link>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2.5 rounded-xl bg-white/5 border border-white/10 text-white hover:bg-white/10 transition-colors w-11 h-11 flex items-center justify-center"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Overlay */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0, marginTop: 0 }}
              animate={{ opacity: 1, height: 'auto', marginTop: 16 }}
              exit={{ opacity: 0, height: 0, marginTop: 0 }}
              className="md:hidden overflow-hidden bg-gray-900/90 rounded-2xl border border-white/5"
            >
              <div className="p-4 grid grid-cols-3 gap-4">
                {navItems.map((item, index) => (
                  <Link
                    key={index}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className="flex flex-col items-center justify-center gap-2 p-3 bg-white/5 rounded-xl text-gray-300 hover:text-green-500 hover:bg-white/10 transition-all border border-transparent hover:border-green-500/20"
                  >
                    <item.icon className="w-6 h-6" />
                    <span className="text-[11px] font-medium tracking-wide">{item.label}</span>
                  </Link>
                ))}
              </div>
              <div className="p-4 pt-0">
                <Link 
                  href="https://about-wasim.vercel.app/"
                  target="_blank"
                  className="flex items-center justify-center gap-2 w-full bg-green-500 text-gray-950 p-4 rounded-xl font-bold"
                >
                  Resume
                  <ExternalLink className="w-4 h-4" />
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
};

export default Header;
