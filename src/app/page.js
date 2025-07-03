import React from 'react';
import PlainLayout from '@/components/Plain-Layout';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import SkillSection from '@/components/SkillSection';
import Portfolio from '@/components/Portfolio';
import ContactUs from '@/components/ContactUs';
import Blog from '@/components/Blog';

const page = () => {

  return (
    <PlainLayout>
      <div>
        <HeroSection/>
      </div>
      <div>
        <AboutSection/>
      </div>
      <div>
        <SkillSection/>
      </div>
      <div>
        <Portfolio/>
      </div>
      <div>
        <ContactUs/>
      </div>
      <div>
        <Blog/>
      </div>
    </PlainLayout>
  );
};

export default page;