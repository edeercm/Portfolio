import socialsData from '../../../data/socials';

const Footer = () => {
  return (
    <footer className="w-full py-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center px-margin-desktop max-w-container-max mx-auto bg-transparent">
      {/* Automáticamente usa el año actual */}
      <p className="font-body-sm text-body-sm text-on-surface-variant mb-4 md:mb-0">
        © {new Date().getFullYear()} Eder. Built with precision.
      </p>

      <div className="flex gap-gutter">
        <a className="font-body-sm text-body-sm text-on-surface-variant hover:text-primary transition-colors opacity-80 hover:opacity-100" href="#" target="_blank" rel="noopener noreferrer">Github</a>
        <a className="font-body-sm text-body-sm text-on-surface-variant hover:text-primary transition-colors opacity-80 hover:opacity-100" href="#" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        <a className="font-body-sm text-body-sm text-on-surface-variant hover:text-primary transition-colors opacity-80 hover:opacity-100" href="#" target="_blank" rel="noopener noreferrer">Twitter</a>
      </div>
    </footer>
  );
};

export default Footer;


