import HeroBackground from './components/HeroBackground';
import HeroBadge from './components/HeroBadge';
import HeroContent from './components/HeroContent';
import HeroCTA from './components/HeroCTA';

const HeroSection = () => {
  return (
    // <section
    //   className="relative h-screen w-full flex items-center px-margin-mobile md:px-margin-desktop data-stream-bg overflow-hidden"
    //   id="hero"
    // >
    <section
      className="relative h-[125vh] w-full flex items-center px-margin-mobile md:px-margin-desktop data-stream-bg overflow-hidden"
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
// const HeroSection = () => {
//   return (
//     <section className="relative h-screen w-full flex items-center px-margin-mobile md:px-margin-desktop data-stream-bg overflow-hidden" id="hero">

//       {/* Efectos visuales de fondo (Líneas láser verticales) */}
//       <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
//         <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-primary to-transparent"></div>
//         <div className="absolute top-0 left-2/4 w-px h-full bg-gradient-to-b from-transparent via-primary-container to-transparent"></div>
//         <div className="absolute top-0 left-3/4 w-px h-full bg-gradient-to-b from-transparent via-primary to-transparent"></div>
//       </div>

//       {/* Contenido de Impacto (Z-index superior para estar por delante del fondo) */}
//       <div className="relative z-10 max-w-4xl mt-32">

//         {/* Etiqueta / Rol */}
//         <div className="inline-block px-3 py-1 mb-6 rounded-full border border-primary/20 bg-primary/5">
//           <span className="font-label-md text-label-md text-primary tracking-widest uppercase">
//             Frontend Developer · Payment Systems
//           </span>
//         </div>

//         {/* Gran Titulo */}
//         <h1 className="font-display-lg text-display-lg md:text-[80px] md:leading-[1] mb-8 text-on-surface">
//           I build payment systems <span className="text-primary-container">that don't fail.</span>
//         </h1>

//         {/* Subtítulo o Párrafo */}
//         <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mb-12">
//           Specializing in bulletproof fintech architectures and AI-augmented engineering workflows. Bridging the gap between high-frequency transactional integrity and seamless user experiences.
//         </p>

//         {/* Botones de Llamado a la Acción (CTA) */}
//         <div className="flex flex-wrap gap-4">
//           <button className="bg-primary-container text-on-primary-container px-8 py-4 rounded-lg font-headline-md text-headline-md hover:scale-105 transition-transform">
//             View my work
//           </button>
//           <button className="border border-white/15 hover:bg-white/5 text-on-surface px-8 py-4 rounded-lg font-headline-md text-headline-md transition-all">
//             Download CV
//           </button>
//         </div>

//       </div>
//     </section>
//   );
// };

// export default HeroSection;
