import React, { useEffect } from 'react';

const Header = () => {
  useEffect(() => {
    const links = Array.from(document.querySelectorAll('nav a[href^="#"]'));
    const sections = links
      .map((l) => document.querySelector(l.getAttribute('href')))
      .filter(Boolean);

    if (!sections.length) return;

    const setInactive = () => {
      links.forEach((l) => {
        l.classList.remove('text-primary', 'border-b', 'border-primary', 'pb-1');
        l.classList.add('text-on-surface-variant');
      });
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const id = `#${entry.target.id}`;
          const link = document.querySelector(`nav a[href="${id}"]`);
          if (entry.isIntersecting) {
            setInactive();
            if (link) {
              link.classList.add('text-primary', 'border-b', 'border-primary', 'pb-1');
              link.classList.remove('text-on-surface-variant');
            }
          }
        });
      },
      { root: null, rootMargin: '0px 0px -40% 0px', threshold: 0.25 }
    );

    sections.forEach((s) => observer.observe(s));
    // ensure initial state: mark the first visible section
    // (observer callback will run shortly), but keep Home active as fallback
    setTimeout(() => {
      const anyActive = links.some((l) => l.classList.contains('text-primary'));
      if (!anyActive) {
        setInactive();
        const home = document.querySelector('nav a[href="#hero"]');
        if (home) {
          home.classList.add('text-primary', 'border-b', 'border-primary', 'pb-1');
          home.classList.remove('text-on-surface-variant');
        }
      }
    }, 50);

    return () => observer.disconnect();
  }, []);

  return (
    <nav className="fixed top-4 left-1/2 -translate-x-1/2 rounded-full px-6 py-2 bg-surface-container/60 backdrop-blur-xl border border-white/10 shadow-[0px_0px_20px_rgba(20,110,245,0.1)] flex items-center gap-gutter max-w-fit mx-auto z-50">
      {/* Logo o Nombre (comentado por ahora) */}
      {/* <span className="font-headline-md text-headline-md font-bold text-primary mr-4">DevPortfolio</span> */}

      {/* Enlaces a las Secciones (Anclas) */}
      <div className="hidden md:flex gap-6 items-center">
        <a href="#hero" className="font-label-md text-label-md uppercase tracking-wider text-primary border-b border-primary pb-1">Home</a>
        <a href="#about" className="font-label-md text-label-md uppercase tracking-wider text-on-surface-variant hover:text-on-surface transition-colors">About</a>
        <a href="#experience" className="font-label-md text-label-md uppercase tracking-wider text-on-surface-variant hover:text-on-surface transition-colors">Experiencie</a>
        <a href="#projects" className="font-label-md text-label-md uppercase tracking-wider text-on-surface-variant hover:text-on-surface transition-colors">Projects</a>
        <a href="#skills" className="font-label-md text-label-md uppercase tracking-wider text-on-surface-variant hover:text-on-surface transition-colors">Skills</a>
      </div>

      {/* Call to Action */}
      <a
        href="#contact"
        className="ml-4 bg-primary-container text-on-primary-container px-4 py-1.5 rounded-full font-label-md text-label-md uppercase tracking-wider hover:brightness-110 transition-all"
      >
        Hire Me
      </a>
    </nav>
  );
};

export default Header;