const ProjectCard = ({ project }) => {
  return (
    <div className="glass-card rounded-xl overflow-hidden glow-hover transition-all group flex flex-col">

      {/* Imagen con hover cinematico */}
      <div className="h-48 overflow-hidden bg-surface-container-highest relative shrink-0">
        <img
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-60"
          src={project.image}
          alt={project.title}
        />

        <div className="absolute inset-0 bg-gradient-to-t from-surface-container to-transparent" />
      </div>

      {/* Contenido */}
      <div className="p-6 flex flex-col flex-1 justify-between">
        <div>

          <div className="flex justify-between items-start mb-4">
            <h4 className="font-headline-md text-headline-md text-on-surface">
              {project.title}
            </h4>

            <a
              className="text-on-surface-variant hover:text-primary transition-colors"
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`View source code for ${project.title}`}
            >
              <span className="material-symbols-outlined">code</span>
            </a>
          </div>

          <p className="font-body-sm text-body-sm text-on-surface-variant mb-6 line-clamp-3">
            {project.desc}
          </p>

        </div>

        <div className="flex flex-wrap gap-2 mt-auto">
          <span className="text-[10px] font-label-md px-2 py-1 bg-primary/10 text-primary border border-primary/20 rounded uppercase tracking-wider shadow-sm">
            {project.subtitle}
          </span>
        </div>

      </div>
    </div>
  );
};

export default ProjectCard;