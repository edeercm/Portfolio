import NAV_ITEMS from '../../constants/navItems';

const MobileDrawer = ({ isOpen, close, activeSection }) => {
    return (
        <>
            {/* Overlay */}
            <div
                onClick={close}
                className={`md:hidden fixed inset-0 z-40 bg-background/80 backdrop-blur-sm transition-opacity duration-300 ${
                    isOpen
                        ? 'opacity-100 pointer-events-auto'
                        : 'opacity-0 pointer-events-none'
                }`}
            />

            {/* Panel */}
            <div
                className={`md:hidden fixed top-0 right-0 h-full w-64 z-50 bg-surface-container border-l border-white/10 flex flex-col px-margin-mobile py-12 gap-gutter transition-transform duration-300 ${
                    isOpen
                        ? 'translate-x-0'
                        : 'translate-x-full'
                }`}
            >
                {/* Links */}
                <nav className="flex flex-col gap-6 mt-8">
                    {NAV_ITEMS.map((item) => {
                        const isActive = activeSection === item.href;

                        return (
                            <a
                                key={item.href}
                                href={item.href}
                                onClick={close}
                                className={`font-label-md text-label-md uppercase tracking-wider transition-colors ${
                                    isActive
                                        ? 'text-primary border-b border-primary pb-1 w-fit'
                                        : 'text-on-surface-variant hover:text-on-surface'
                                }`}
                            >
                                {item.label}
                            </a>
                        );
                    })}
                </nav>

                {/* CTA */}
                <a
                    href="#contact"
                    onClick={close}
                    className="mt-auto bg-primary-container text-on-primary-container px-4 py-3 rounded-full font-label-md text-label-md uppercase tracking-wider hover:brightness-110 transition-all text-center"
                >
                    Hire Me
                </a>
            </div>
        </>
    );
};

export default MobileDrawer;