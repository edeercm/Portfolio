const ProjectsHeader = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-4">
      
      <div>
        <h2 className="font-label-md text-label-md text-primary uppercase tracking-[0.2em] mb-4">
          Case Studies
        </h2>

        <h3 className="font-display-lg text-display-lg text-on-surface">
          Selected Systems
        </h3>
      </div>

      <a
        className="font-label-md text-label-md text-on-surface-variant hover:text-primary transition-colors flex items-center gap-2"
        href="https://github.com/edeercm"
        target="_blank"
        rel="noopener noreferrer"
      >
        ALL REPOSITORIES
        <span className="material-symbols-outlined">north_east</span>
      </a>

    </div>
  );
};

export default ProjectsHeader;