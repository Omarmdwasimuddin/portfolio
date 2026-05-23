'use client';

import React, { useEffect, useRef } from 'react';
import { TypeAnimation } from 'react-type-animation';
import ProfileCard from '@/components/ProfileCard';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { Sparkles, Code2, Cpu, Globe } from 'lucide-react';

const HeroSection = () => {
  const containerRef = useRef(null);
  const shapesRef = useRef(null);

  useEffect(() => {
    // GSAP Floating Animation for Background Shapes
    const shapes = shapesRef.current.querySelectorAll('.floating-shape');
    shapes.forEach((shape, i) => {
      gsap.to(shape, {
        y: 'random(-20, 20)',
        x: 'random(-20, 20)',
        rotation: 'random(-15, 15)',
        duration: `random(3, 5)`,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
        delay: i * 0.2
      });
    });

    // Mouse follow effect for the background glow
    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      const xPos = (clientX / window.innerWidth) - 0.5;
      const yPos = (clientY / window.innerHeight) - 0.5;

      gsap.to('.hero-glow', {
        x: xPos * 50,
        y: yPos * 50,
        duration: 2,
        ease: 'power2.out'
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
    }
  };

  return (
    <section 
      ref={containerRef}
      className="relative min-h-[90vh] flex items-center overflow-hidden bg-[#030712] pt-32 pb-20 px-4"
    >
      {/* Dynamic Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="hero-glow absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-green-500/10 rounded-full blur-[120px]" />
        <div className="hero-glow absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-blue-500/10 rounded-full blur-[100px]" />
        
        {/* Animated Shapes */}
        <div ref={shapesRef} className="absolute inset-0">
          <div className="floating-shape absolute top-20 left-[10%] opacity-20"><Code2 className="text-green-400 w-8 h-8" /></div>
          <div className="floating-shape absolute top-40 right-[15%] opacity-20"><Cpu className="text-blue-400 w-10 h-10" /></div>
          <div className="floating-shape absolute bottom-40 left-[20%] opacity-20"><Globe className="text-purple-400 w-6 h-6" /></div>
          <div className="floating-shape absolute top-1/2 right-[10%] opacity-20"><Sparkles className="text-yellow-400 w-8 h-8" /></div>
        </div>
        
        {/* Grid Overlay */}
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px]" />
      </div>

      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12 lg:gap-20">
          
          {/* Left Content */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="w-full lg:w-3/5 text-center lg:text-left"
          >
            <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-500/10 border border-green-500/20 mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              <span className="text-green-400 text-xs font-mono tracking-wider uppercase">Available for projects</span>
            </motion.div>

            <motion.h1 variants={itemVariants} className="text-4xl sm:text-5xl md:text-7xl font-extrabold text-white mb-6 leading-[1.1]">
              Crafting Digital <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-600">
                Experiences
              </span>
            </motion.h1>

            <motion.div variants={itemVariants} className="text-xl sm:text-2xl font-medium text-gray-400 mb-8 h-8">
              I am a{' '}
              <TypeAnimation
                sequence={[
                  'Full Stack Developer', 2000,
                  'React.js Expert', 2000,
                  'Next.js Specialist', 2000,
                  'Problem Solver', 2000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
                className="text-white"
              />
            </motion.div>

            <motion.p variants={itemVariants} className="text-gray-400 text-lg leading-relaxed mb-10 max-w-xl mx-auto lg:mx-0">
              Transforming complex ideas into elegant, high-performance web applications. Focused on building scalable solutions with modern technologies and exceptional user experiences.
            </motion.p>

            <motion.div variants={itemVariants} className="flex flex-wrap items-center justify-center lg:justify-start gap-4">
              <button 
                onClick={() => document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-8 py-4 bg-white text-gray-950 rounded-2xl font-bold hover:bg-green-500 hover:text-white transition-all duration-300 shadow-[0_0_30px_rgba(255,255,255,0.1)] active:scale-95"
              >
                Explore My Work
              </button>
              <button 
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-8 py-4 bg-white/5 border border-white/10 text-white rounded-2xl font-bold hover:bg-white/10 transition-all duration-300 active:scale-95"
              >
                Get in Touch
              </button>
            </motion.div>
          </motion.div>

          {/* Right Content - ProfileCard */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8, rotate: 5 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="w-full lg:w-2/5 flex justify-center relative"
          >
            {/* Decorative element behind card */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-br from-green-500/20 to-blue-500/20 rounded-full blur-[80px] -z-10 animate-pulse" />
            
            <div className="w-full max-w-[420px] transition-transform duration-500 hover:scale-[1.02]">
              <ProfileCard
                avatarUrl="/Img/Wasim-removebg.png"
                name="Wasim Uddin Omar"
                title="Full Stack Developer"
                handle="omarmdwasimuddin"
                status="Active"
                contactText="Contact Me"
                onContactClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              />
            </div>
          </motion.div>

        </div>
      </div>
      
      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#030712] to-transparent z-20" />
    </section>
  );
};

export default HeroSection;
