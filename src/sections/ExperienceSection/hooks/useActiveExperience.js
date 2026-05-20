import { useEffect, useRef, useState } from 'react';

const useActiveExperience = (experiences) => {
  const [activeId, setActiveId] = useState(experiences[0]?.id ?? null);
  const refs = useRef({});

  useEffect(() => {
    const observers = [];

    experiences.forEach((exp) => {
      const el = refs.current[exp.id];
      if (!el) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveId(exp.id);
          }
        },
        { threshold: 0.5 }
      );

      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((obs) => obs.disconnect());
  }, [experiences]);

  return { activeId, refs };
};

export default useActiveExperience;