const ExpertiseMarquee = ({ items, animationClass, colorClass, listId }) => {
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
            <span
              className={`material-symbols-outlined ${colorClass}`}
              aria-hidden="true"
            >
              {item.icon}
            </span>
            <span>{item.name}</span>
          </div>
        );
      })}
    </div>
  );
};

export default ExpertiseMarquee;