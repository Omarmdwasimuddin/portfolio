import React from 'react';
import PlainLayout from '@/components/Plain-Layout';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import SkillSection from '@/components/SkillSection';
import Portfolio from '@/components/Portfolio';
import ContactUs from '@/components/ContactUs';
import Blog from '@/components/Blog';

async function getData() {
  const [skillRes, portfolioRes, blogPostRes] = await Promise.all([
    fetch(`${process.env.BASE_URL || ''}/api/skill`, { cache: 'no-store' }),
    fetch(`${process.env.BASE_URL || ''}/api/portfolio`, { cache: 'no-store' }),
    fetch(`${process.env.BASE_URL || ''}/api/blogpost`, { cache: 'no-store' }),
  ]);

  const [Skill, Portfolio, BlogPost] = await Promise.all([
    skillRes.json(),
    portfolioRes.json(),
    blogPostRes.json(),
  ]);

  return { Skill: Skill.data, Portfolio: Portfolio.data, BlogPost: BlogPost.data };
}


const page = async (props) => {
    const data=await getData();

  return (
    <PlainLayout>
      <div>
        <HeroSection/>
      </div>
      <div>
        <AboutSection/>
      </div>
      <div>
        <SkillSection skill={data['Skill']}/>
      </div>
      <div>
        <Portfolio portfolio={data['Portfolio']}/>
      </div>
      <div>
        <ContactUs/>
      </div>
      <div>
        <Blog blogpost={data['BlogPost']}/>
      </div>
    </PlainLayout>
  );
};

export default page;