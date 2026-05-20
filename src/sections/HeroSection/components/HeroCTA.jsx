const HeroCTA = () => {
  return (
    <div className="flex flex-wrap gap-4">

      <button className="bg-primary-container text-on-primary-container px-8 py-4 rounded-lg font-headline-md text-headline-md hover:scale-105 transition-transform">
        View my work
      </button>

      <button className="border border-white/15 hover:bg-white/5 text-on-surface px-8 py-4 rounded-lg font-headline-md text-headline-md transition-all">
        Download CV
      </button>

    </div>
  );
};

export default HeroCTA;