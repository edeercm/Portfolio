import ProjectCard from './ProjectCard';

const ProjectsGrid = ({ projects }) => {
  return (
    <div className="grid md:grid-cols-3 gap-gutter">
      {projects.map((project) => (
        <ProjectCard
          key={project.id}
          project={project}
        />
      ))}
    </div>
  );
};

export default ProjectsGrid;