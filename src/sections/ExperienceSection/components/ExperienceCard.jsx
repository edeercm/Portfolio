const ExperienceCard = ({ exp, isEven, isActive, cardRef }) => {
  const alignmentClass = isEven ? "md:justify-end md:pr-12" : "md:pl-12";

  const dotClass = isActive
    ? "bg-primary shadow-[0_0_15px_rgba(20,110,245,1)]"
    : "bg-surface-container-highest border border-primary/40";

  const periodClass = isActive
    ? "font-label-md text-label-md text-primary-fixed-dim"
    : "font-label-md text-label-md text-on-surface-variant";

  const companyClass = isActive
    ? "font-body-md text-body-md text-secondary font-bold mb-4"
    : "font-body-md text-body-md text-secondary-fixed-dim font-bold mb-4";

  return (
    <div
      ref={cardRef}
      className={`relative mb-20 md:flex ${alignmentClass}`}
    >

      <div className={`absolute left-[-32px] md:left-1/2 md:-translate-x-1/2 top-0 w-4 h-4 rounded-full z-10 transition-all duration-300 ${dotClass}`} />

      <div className="glass-card p-8 rounded-xl md:w-5/12 glow-hover transition-all group">

        <span className={periodClass}>
          {exp.period}
        </span>

        <h4 className="font-headline-md text-headline-md text-on-surface mt-2 group-hover:text-primary transition-colors">
          {exp.role}
        </h4>

        <p className={companyClass}>
          {exp.company}
        </p>

        <ul className="space-y-3 font-body-sm text-body-sm text-on-surface-variant">
          {exp.achievements.map((achievement, i) => (
            <li key={i} className="flex gap-2">
              <span
                className="material-symbols-outlined text-primary text-sm mt-0.5 shrink-0"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                terminal
              </span>
              <span>{achievement}</span>
            </li>
          ))}
        </ul>

      </div>
    </div>
  );
};

export default ExperienceCard;