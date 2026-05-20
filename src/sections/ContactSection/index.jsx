import socialsData from '../../data/socials';

const ContactSection = () => {
  return (
    <section className="py-32 px-margin-mobile md:px-margin-desktop" id="contact">
      <div className="max-w-2xl mx-auto text-center">

        <h2 className="font-label-md text-label-md text-primary uppercase tracking-[0.2em] mb-4">Transmission</h2>
        <h3 className="font-display-lg text-display-lg text-on-surface mb-8">Ready to initiate a project?</h3>

        <div className="glass-card p-12 rounded-2xl border-primary/20 shadow-[0_0_40px_rgba(20,110,245,0.05)]">
          <p className="font-body-lg text-body-lg text-on-surface-variant mb-10">
            Currently accepting select freelance opportunities and full-time inquiries within the fintech and AI space.
          </p>

          <div className="flex flex-col md:flex-row items-center justify-center gap-6">
            <a
              className="w-full md:w-auto px-8 py-4 bg-primary-container text-on-primary-container rounded-lg font-headline-md text-headline-md hover:brightness-110 transition-all flex items-center justify-center gap-2"
              href="mailto:hello@architect.dev"
              aria-label="Send email"
            >
              <span className="material-symbols-outlined" aria-hidden="true">mail</span>
              Send Email
            </a>

            <div className="flex gap-4" role="list" aria-label="Social links">
              {socialsData.map((s) => {
                const Icon = s.icon;
                return (
                  <a
                    key={s.id}
                    className="p-4 glass-card rounded-lg hover:text-primary transition-colors flex items-center justify-center"
                    href={s.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.name}
                    role="listitem"
                  >
                    <Icon className="w-6 h-6" aria-hidden="true" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default ContactSection;