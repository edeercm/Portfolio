const AboutSkills = ({ skills }) => {
  return (
    <div className="flex flex-wrap gap-3 items-start content-start">
      {skills.map((skill) => (
        <div
          key={skill.id}
          className="px-4 py-2 bg-surface-container rounded-lg border border-white/5 font-label-md text-label-md text-on-surface hover:border-primary/40 hover:bg-surface-container-highest transition-all cursor-default shadow-sm"
        >
          {skill.name}
        </div>
      ))}
    </div>
  );
};

export default AboutSkills;