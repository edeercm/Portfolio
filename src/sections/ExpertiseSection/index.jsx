import expertiseData from '../../data/expertise';
import ExpertiseHeader from './components/ExpertiseHeader';
import ExpertiseMarquee from './components/ExpertiseMarquee';

const ExpertiseSection = () => {
  const row1 = expertiseData?.row1 ?? [];
  const row2 = expertiseData?.row2 ?? [];

  return (
    <section
      className="py-24 border-y border-white/5 overflow-hidden"
      id="skills"
    >
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop mb-12">
        <ExpertiseHeader />
      </div>

      <div className="flex flex-col gap-6 w-full max-w-[100vw]">
        <ExpertiseMarquee
          items={row1}
          animationClass="animate-scroll-left"
          colorClass="text-primary"
          listId="expertise-row-1"
        />
        <ExpertiseMarquee
          items={row2}
          animationClass="animate-scroll-right"
          colorClass="text-secondary"
          listId="expertise-row-2"
        />
      </div>

    </section>
  );
};

export default ExpertiseSection;