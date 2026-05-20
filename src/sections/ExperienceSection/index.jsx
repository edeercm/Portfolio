import experienceData from '../../data/experience';
import ExperienceHeader from './components/ExperienceHeader';
import ExperienceTimeline from './components/ExperienceTimeline';

const ExperienceSection = () => {
  return (
    <section
      className="py-24 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto"
      id="experience"
    >
      <ExperienceHeader />
      <ExperienceTimeline experiences={experienceData} />
    </section>
  );
};

export default ExperienceSection;