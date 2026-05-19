import { useLocation } from 'react-router-dom';
import NavLinks from './components/NavLinks';

const Header = () => {
  const { pathname } = useLocation();
  const isHome = pathname === '/';

  return (
    <nav className="fixed top-4 left-1/2 -translate-x-1/2 rounded-full px-6 py-2 bg-surface-container/60 backdrop-blur-xl border border-white/10 shadow-[0px_0px_20px_rgba(20,110,245,0.1)] flex items-center gap-gutter max-w-fit mx-auto z-50">
      {/* Logo o Nombre */}
      {/* <span className="font-headline-md text-headline-md font-bold text-primary mr-4">Eder</span> */}

      {/* Enlaces a las Secciones (Anclas) - modularizado */}
      <NavLinks />

      {/* Call to Action */}
      <a
        // href={isHome ? '#contact' : '/#contact'}
        href='#contact'
        className="ml-4 bg-primary-container text-on-primary-container px-4 py-1.5 rounded-full font-label-md text-label-md uppercase tracking-wider hover:brightness-110 transition-all"
      >
        Hire Me
      </a>
    </nav>
  );
};

export default Header;