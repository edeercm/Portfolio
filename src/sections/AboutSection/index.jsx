import skillsData from '../../data/skills';
import socialsData from '../../data/socials';
import AboutText from './components/AboutText';
import AboutSocials from './components/AboutSocials';
import AboutSkills from './components/AboutSkills';

const AboutSection = () => {
  return (
    <section
      className="py-24 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto border-t border-white/5"
      id="about"
    >
      <div className="grid md:grid-cols-12 gap-gutter">

        <div className="md:col-span-5 flex flex-col gap-8">
          <AboutText />
          <AboutSocials socials={socialsData} />
        </div>

        <div className="md:col-span-6 md:col-start-7">
          <AboutSkills skills={skillsData} />
        </div>

      </div>
    </section>
  );
};

export default AboutSection;
// // 1. Importamos tu información real desde la carpeta de datos
// import skillsData from '../../data/skills';
// import socialsData from '../../data/socials';

// const AboutSection = () => {
//   return (
//     <section className="py-24 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto border-t border-white/5" id="about">
//       <div className="grid md:grid-cols-12 gap-gutter">

//         {/* Columna Izquierda: Tu Texto Descriptivo y Redes Sociales */}
//         <div className="md:col-span-5">
//           <h2 className="font-label-md text-label-md text-primary uppercase tracking-[0.2em] mb-4">
//             The Architect
//           </h2>
//           <p className="font-headline-lg text-headline-lg text-on-surface leading-snug">
//             Engineering reliable interfaces for the future of decentralized and automated finance.
//           </p>
//           <p className="mt-6 font-body-md text-body-md text-on-surface-variant mb-8">
//             Based at the intersection of UX and high-stakes data. I transform complex ideas into bulletproof digital experiences, blending creativity and technology. Currently based in Mexico and actively seeking new opportunities.
//           </p>

//           {/* Redes Sociales Dinámicas */}
//           <div className="flex gap-6 items-center">
//             {socialsData.map((social) => {
//               const IconComponent = social.icon; // react-icons
//               return (
//                 <a
//                   key={social.id}
//                   href={social.url}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="text-on-surface-variant hover:text-primary transition-all hover:scale-125 hover:-translate-y-1 duration-300"
//                   aria-label={social.name}
//                   title={social.name}
//                 >
//                   <IconComponent className="w-6 h-6" />
//                 </a>
//               );
//             })}
//           </div>
//         </div>

//         {/* Columna Derecha: Tu Data Real de Tecnologías */}
//         <div className="md:col-span-6 md:col-start-7 flex flex-wrap gap-3 items-start content-start">
//           {skillsData.map((skill) => (
//             <div
//               key={skill.id}
//               className="px-4 py-2 bg-surface-container rounded-lg border border-white/5 font-label-md text-label-md text-on-surface hover:border-primary/40 hover:bg-surface-container-highest transition-all cursor-default shadow-sm"
//             >
//               {skill.name}
//             </div>
//           ))}
//         </div>

//       </div>
//     </section>
//   );
// };

// export default AboutSection;
