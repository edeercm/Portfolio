const HamburgerButton = ({ isOpen, toggle }) => {
  return (
    <button
      onClick={toggle}
      aria-label={isOpen ? 'Close menu' : 'Open menu'}
      aria-expanded={isOpen}
      className="md:hidden flex flex-col justify-center items-center w-8 h-8 gap-1.5 focus:outline-none"
    >
      <span
        className={`block w-5 h-px bg-on-surface transition-all duration-300 ${
          isOpen ? 'rotate-45 translate-y-2' : ''
        }`}
      />
      <span
        className={`block w-5 h-px bg-on-surface transition-all duration-300 ${
          isOpen ? 'opacity-0' : ''
        }`}
      />
      <span
        className={`block w-5 h-px bg-on-surface transition-all duration-300 ${
          isOpen ? '-rotate-45 -translate-y-2' : ''
        }`}
      />
    </button>
  );
};

export default HamburgerButton;