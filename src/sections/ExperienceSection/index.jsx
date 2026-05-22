import experienceData from '../../data/experience';
import ExperienceHeader from './components/ExperienceHeader';
import ExperienceTimeline from './components/ExperienceTimeline';

const ExperienceSection = () => {
  return (
    <section
      className="py-24 border-t border-white/5 overflow-hidden"
      id="experience"
    >
      <div className=" px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
        <ExperienceHeader />
        <ExperienceTimeline experiences={experienceData} />
      </div>
    </section>
  );
};

export default ExperienceSection;