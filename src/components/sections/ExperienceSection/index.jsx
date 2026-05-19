import experienceData from '../../../data/experience';

const ExperienceSection = () => {
  return (
    <section className="py-24 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto" id="experience">
      <div className="mb-16">
        <h2 className="font-label-md text-label-md text-primary uppercase tracking-[0.2em] mb-4">Trajectory</h2>
        <h3 className="font-display-lg text-display-lg text-on-surface">Professional History</h3>
      </div>

      {/* Contenedor de la Línea de Tiempo */}
      <div className="relative pl-8 md:pl-0">

        {/* Línea central (Solo visible en Desktop) */}
        <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-white/10"></div>

        {/* Iteramos sobre tu historial laboral */}
        {experienceData.map((exp, index) => {
          const isEven = index % 2 === 0; // Determina si va a la izquierda o derecha
          const isLatest = index === 0; // Solo el primero (Kuvasz) tendrá la luz brillante

          // Clases dinámicas dependiendo de si es par o impar
          const alignmentClass = isEven ? "md:justify-end md:pr-12" : "md:pl-12";

          // Estilo del punto en la línea
          const dotClass = isLatest
            ? "bg-primary shadow-[0_0_15px_rgba(20,110,245,1)]"
            : "bg-surface-container-highest border border-primary/40";

          return (
            <div key={exp.id} className={`relative mb-20 md:flex ${alignmentClass}`}>

              {/* Punto en la línea de tiempo */}
              <div className={`absolute left-[-32px] md:left-1/2 md:-translate-x-1/2 top-0 w-4 h-4 rounded-full z-10 transition-all duration-300 ${dotClass}`}></div>

              {/* Tarjeta de Trabajo */}
              <div className="glass-card p-8 rounded-xl md:w-5/12 glow-hover transition-all group">
                <span className={isLatest ? "font-label-md text-label-md text-primary-fixed-dim" : "font-label-md text-label-md text-on-surface-variant"}>
                  {exp.period}
                </span>

                <h4 className="font-headline-md text-headline-md text-on-surface mt-2 group-hover:text-primary transition-colors">
                  {exp.role}
                </h4>

                <p className={isLatest ? "font-body-md text-body-md text-secondary font-bold mb-4" : "font-body-md text-body-md text-secondary-fixed-dim font-bold mb-4"}>
                  {exp.company}
                </p>

                {/* Lista de logros (Mapeada dinámicamente) */}
                <ul className="space-y-3 font-body-sm text-body-sm text-on-surface-variant">
                  {exp.achievements.map((achievement, i) => (
                    <li key={i} className="flex gap-2">
                      <span className="material-symbols-outlined text-primary text-sm mt-0.5 shrink-0" style={{ fontVariationSettings: "'FILL' 1" }}>
                        terminal
                      </span>
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          );
        })}

      </div>
    </section>
  );
};

export default ExperienceSection;
