import React from 'react'
import HeroSection from '../components/Home/HeroSection/HeroSection';
import SkillsSection from '../components/Home/SkillsSection/SkillsSection';
import ProjectsSection from '../components/Home/ProjectsSection/ProjectsSection';
import ContactSection from '../components/Home/ContactSection/ContactSection';

const Home = () => {
  return <>
    <HeroSection />
    <SkillsSection />
    <ProjectsSection />
    <ContactSection />
  </>
}

export default Home