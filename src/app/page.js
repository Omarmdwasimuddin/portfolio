import React from 'react';
import PlainLayout from '@/components/Plain-Layout';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import SkillSection from '@/components/SkillSection';
import Portfolio from '@/components/Portfolio';
import ContactUs from '@/components/ContactUs';
import Blog from '@/components/Blog';

async function getData(){
    let Skill= (await (await fetch(`${process.env.BASE_URL}/api/skill`)).json())['data']
    let Portfolio= (await (await fetch(`${process.env.BASE_URL}/api/portfolio`)).json())['data']
    let BlogPost= (await (await fetch(`${process.env.BASE_URL}/api/blogpost`)).json())['data']
    return {Skill:Skill,Portfolio:Portfolio,BlogPost:BlogPost}
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