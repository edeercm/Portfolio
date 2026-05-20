import NavLinks from './components/NavLinks';
import NavCTA from './components/NavCTA';
import useActiveSection from './hooks/useActiveSection';

const Header = () => {
  const activeSection = useActiveSection();

  return (
    <nav className="fixed top-4 left-1/2 -translate-x-1/2 rounded-full px-6 py-2 bg-surface-container/60 backdrop-blur-xl border border-white/10 shadow-[0px_0px_20px_rgba(20,110,245,0.1)] flex items-center gap-gutter max-w-fit mx-auto z-50">

      <span className="font-headline-md text-headline-md font-bold text-primary mr-4">
        EC
      </span>

      <NavLinks activeSection={activeSection} />
      <NavCTA />

    </nav>
  );
};

export default Header;