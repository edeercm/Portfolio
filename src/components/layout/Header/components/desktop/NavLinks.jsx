import NAV_ITEMS from '../../constants/navItems';

const NavLinks = ({ activeSection }) => {
  return (
    <div className="hidden md:flex gap-6 items-center">
      {NAV_ITEMS.map((item) => {
        const isActive = activeSection === item.href;

        return (
          <a
            key={item.href}
            href={item.href}
            className={`font-label-md text-label-md uppercase tracking-wider transition-colors ${
              isActive
                ? 'text-primary border-b border-primary pb-1'
                : 'text-on-surface-variant hover:text-on-surface'
            }`}
          >
            {item.label}
          </a>
        );
      })}
    </div>
  );
};

export default NavLinks;