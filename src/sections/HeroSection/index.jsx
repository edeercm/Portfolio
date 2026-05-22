import HeroBackground from './components/HeroBackground';
import HeroBadge from './components/HeroBadge';
import HeroContent from './components/HeroContent';
import HeroCTA from './components/HeroCTA';

const HeroSection = () => {
  return (
    <section
      className="
        relative 
        min-h-[100vh] 
        md:h-[115vh] 
        lg:h-[125vh] 
        w-full 
        flex 
        items-center 
        px-margin-mobile 
        md:px-margin-desktop 
        data-stream-bg 
        overflow-hidden
      "
      id="hero"
    >
      <HeroBackground />

      <div className="relative z-10 max-w-4xl">
        <HeroBadge />
        <HeroContent />
        <HeroCTA />
      </div>

    </section>
  );
};

export default HeroSection;