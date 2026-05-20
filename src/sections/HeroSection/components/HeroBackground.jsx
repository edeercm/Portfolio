import '../styles/hero.css';

const HeroBackground = () => {
  return (
    <div className="absolute inset-0 z-0 pointer-events-none">

      <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-primary to-transparent laser-pulse-1" />

      <div className="absolute top-0 left-2/4 w-px h-full bg-gradient-to-b from-transparent via-primary-container to-transparent laser-pulse-2" />

      <div className="absolute top-0 left-3/4 w-px h-full bg-gradient-to-b from-transparent via-primary to-transparent laser-pulse-3" />

    </div>
  );
};

export default HeroBackground;