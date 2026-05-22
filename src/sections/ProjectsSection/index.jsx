import projsData from '../../data/projects';
import ProjectsHeader from './components/ProjectsHeader';
import ProjectsGrid from './components/ProjectsGrid';

const ProjectsSection = () => {
  return (
    <section
      className="py-24 border-t border-white/5 bg-surface-dim/40overflow-hidden"
      id="projects"
    >
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
        <ProjectsHeader />
        <ProjectsGrid projects={projsData} />
      </div>
    </section>
  );
};

export default ProjectsSection;