import ExperienceCard from './ExperienceCard';
import useActiveExperience from '../hooks/useActiveExperience';

const ExperienceTimeline = ({ experiences }) => {
  const { activeId, refs } = useActiveExperience(experiences);

  return (
    <div className="relative pl-8 md:pl-0">

      <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-white/10" />

      {experiences.map((exp, index) => {
        const isEven = index % 2 === 0;
        const isActive = exp.id === activeId;

        return (
          <ExperienceCard
            key={exp.id}
            exp={exp}
            isEven={isEven}
            isActive={isActive}
            cardRef={(el) => (refs.current[exp.id] = el)}
          />
        );
      })}

    </div>
  );
};

export default ExperienceTimeline;