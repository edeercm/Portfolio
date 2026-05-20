import { useEffect, useState } from 'react';

const NAV_SECTIONS = ['#hero', '#about', '#experience', '#projects', '#skills', '#contact'];

const useActiveSection = () => {
  const [activeSection, setActiveSection] = useState('#hero');

  useEffect(() => {
    const sections = NAV_SECTIONS
      .map((id) => document.querySelector(id))
      .filter(Boolean);

    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(`#${entry.target.id}`);
          }
        });
      },
      { root: null, rootMargin: '0px 0px -40% 0px', threshold: 0 }
    );

    sections.forEach((s) => observer.observe(s));

    return () => observer.disconnect();
  }, []);

  return activeSection;
};

export default useActiveSection;