import expertiseData from '../../../data/expertise';

const ExpertiseSection = () => {
  const row1 = expertiseData?.row1 ?? [];
  const row2 = expertiseData?.row2 ?? [];

  const renderMarquee = (items, animationClass, colorClass, listId) => {
    if (!items.length) return null;
    return (
      <div
        id={listId}
        className={`flex whitespace-nowrap gap-6 ${animationClass}`}
        role="list"
        aria-label={`${listId} expertise carousel`}
      >
        {[...items, ...items].map((item, idx) => {
          const isClone = idx >= items.length;
          return (
            <div
              key={`${item.id}-${idx}`}
              role="listitem"
              aria-hidden={isClone ? 'true' : 'false'}
              className={`px-8 py-4 glass-card rounded-full font-headline-md text-headline-md flex items-center gap-3 hover:border-primary/40 hover:shadow-[0_0_15px_rgba(20,110,245,0.2)] transition-all cursor-default ${colorClass}`}
            >
              <span className={`material-symbols-outlined ${colorClass}`} aria-hidden="true">
                {item.icon}
              </span>
              <span>{item.name}</span>
            </div>
          );
        })}
      </div>
    );
  };

  return (
    <section className="py-24 border-y border-white/5 overflow-hidden" id="skills">
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop mb-12">
        <h2 className="font-label-md text-label-md text-primary uppercase tracking-[0.2em] mb-4">
          Expertise
        </h2>
      </div>

      <div className="flex flex-col gap-6 w-full max-w-[100vw]">
        {renderMarquee(row1, 'animate-scroll-left', 'text-primary', 'expertise-row-1')}
        {renderMarquee(row2, 'animate-scroll-right', 'text-secondary', 'expertise-row-2')}
      </div>
    </section>
  );
};

export default ExpertiseSection;