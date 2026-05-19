import { useLocation } from 'react-router-dom';

const links = [
  { label: 'Home', to: '#hero' },
  { label: 'About', to: '#about' },
  { label: 'Experiencie', to: '#experience' },
  { label: 'Projects', to: '#projects' },
  { label: 'Skills', to: '#skills' }
];

const NavLinks = () => {
  const { pathname } = useLocation();
  const isHome = pathname === '/';

  return (
    <div className="hidden md:flex gap-6 items-center">
      {links.map(({ label, to }, idx) => {
        const href = isHome ? to : `/${to}`;
        const isActive = idx === 0 && isHome;
        const className = isActive
          ? 'font-label-md text-label-md uppercase tracking-wider text-primary border-b border-primary pb-1'
          : 'font-label-md text-label-md uppercase tracking-wider text-on-surface-variant hover:text-on-surface transition-colors';

        return (
          <a key={to} href={href} className={className}>
            {label}
          </a>
        );
      })}
    </div>
  );
};

export default NavLinks;
