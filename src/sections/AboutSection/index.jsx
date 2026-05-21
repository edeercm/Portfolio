import skillsData from '../../data/skills';
import socialsData from '../../data/socials';
import AboutText from './components/AboutText';
import AboutSocials from './components/AboutSocials';
import AboutSkills from './components/AboutSkills';

const AboutSection = () => {
  return (
    <section
      className="py-24 border-t border-white/5"
      id="about"
    >
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
        <div className="grid md:grid-cols-12 gap-gutter">

          <div className="md:col-span-5 flex flex-col gap-8">
            <AboutText />
            <AboutSocials socials={socialsData} />
          </div>

          <div className="md:col-span-6 md:col-start-7">
            <AboutSkills skills={skillsData} />
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutSection;

