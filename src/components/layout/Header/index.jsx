import NavLinks from './components/desktop/NavLinks';
import NavCTA from './components/NavCTA';
import HamburgerButton from './components/mobile/HamburgerButton';
import MobileDrawer from './components/mobile/MobileDrawer';
import useActiveSection from './hooks/useActiveSection';
import useDrawer from './hooks/useDrawer';

const Header = () => {
  const activeSection = useActiveSection();
  const { isOpen, close, toggle } = useDrawer();

  return (
    <>
      <nav 
      className="
        fixed 
        top-4 
        left-1/2 
        -translate-x-1/2 

        w-[90%]
        md:w-[40%]

        px-6 
        py-3 

        rounded-full 
        bg-surface-container/60 
        backdrop-blur-xl 
        border 
        border-white/10 
        shadow-[0px_0px_20px_rgba(20,110,245,0.1)] 

        flex 
        items-center 
        justify-between

        z-50
      "
      >

        <HamburgerButton isOpen={isOpen} toggle={toggle} />
        <NavLinks activeSection={activeSection} />
        <NavCTA />

      </nav>

      <MobileDrawer
        isOpen={isOpen}
        close={close}
        activeSection={activeSection}
      />
    </>
  );
};

export default Header;