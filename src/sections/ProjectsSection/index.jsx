import projsData from '../../data/projects';
import ProjectsHeader from './components/ProjectsHeader';
import ProjectsGrid from './components/ProjectsGrid';

const ProjectsSection = () => {
  return (
    <section
      className="py-24 px-margin-mobile md:px-margin-desktop bg-surface-dim/40"
      id="projects"
    >
      <div className="max-w-container-max mx-auto">
        <ProjectsHeader />
        <ProjectsGrid projects={projsData} />
      </div>
    </section>
  );
};

export default ProjectsSection;
// import projsData from '../../data/projects';

// const ProjectsSection = () => {
//   return (
//     <section className="py-24 px-margin-mobile md:px-margin-desktop bg-surface-dim/40" id="projects">
//       <div className="max-w-container-max mx-auto">

//         {/* Cabecera: Título y Enlace a Repositorios */}
//         <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-4">
//           <div>
//             <h2 className="font-label-md text-label-md text-primary uppercase tracking-[0.2em] mb-4">Case Studies</h2>
//             <h3 className="font-display-lg text-display-lg text-on-surface">Selected Systems</h3>
//           </div>
//           <a className="font-label-md text-label-md text-on-surface-variant hover:text-primary transition-colors flex items-center gap-2" href="#">
//             ALL REPOSITORIES <span className="material-symbols-outlined">north_east</span>
//           </a>
//         </div>

//         {/* Grid de Proyectos */}
//         <div className="grid md:grid-cols-3 gap-gutter">
//           {projsData.map((project) => (
//             <div key={project.id} className="glass-card rounded-xl overflow-hidden glow-hover transition-all group flex flex-col">

//               {/* Imagen con Hover Cinemático */}
//               <div className="h-48 overflow-hidden bg-surface-container-highest relative shrink-0">
//                 <img
//                   className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-60"
//                   alt={project.title}
//                   src={project.image}
//                 />
//                 {/* Gradiente inferior para mezclar la imagen de forma elegante */}
//                 <div className="absolute inset-0 bg-gradient-to-t from-surface-container to-transparent"></div>
//               </div>

//               {/* Contenido (Textos y Etiquetas) */}
//               <div className="p-6 flex flex-col flex-1 justify-between">
//                 <div>
//                   <div className="flex justify-between items-start mb-4">
//                     <h4 className="font-headline-md text-headline-md text-on-surface">{project.title}</h4>
//                     {/* El botón de código apunta al enlace de tu base de datos */}
//                     <a className="text-on-surface-variant hover:text-primary transition-colors" href={project.link} target="_blank" rel="noopener noreferrer">
//                       <span className="material-symbols-outlined">code</span>
//                     </a>
//                   </div>

//                   {/* Descripción de tu proyecto */}
//                   <p className="font-body-sm text-body-sm text-on-surface-variant mb-6 line-clamp-3">
//                     {project.desc}
//                   </p>
//                 </div>

//                 {/* Etiqueta / Subtítulo (Ej: Alura challenge) */}
//                 <div className="flex flex-wrap gap-2 mt-auto">
//                   <span className="text-[10px] font-label-md px-2 py-1 bg-primary/10 text-primary border border-primary/20 rounded uppercase tracking-wider shadow-sm">
//                     {project.subtitle}
//                   </span>
//                 </div>
//               </div>

//             </div>
//           ))}
//         </div>

//       </div>
//     </section>
//   );
// };

// export default ProjectsSection;
