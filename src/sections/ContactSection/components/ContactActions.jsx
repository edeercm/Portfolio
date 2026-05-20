const ContactActions = ({ socials }) => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center gap-6">

      <a
        className="w-full md:w-auto px-8 py-4 bg-primary-container text-on-primary-container rounded-lg font-headline-md text-headline-md hover:brightness-110 transition-all flex items-center justify-center gap-2"
        href="mailto:hello@architect.dev"
        aria-label="Send email"
      >
        <span
          className="material-symbols-outlined"
          aria-hidden="true"
        >
          mail
        </span>

        Let's Connect
      </a>

      <div
        className="flex gap-4"
        role="list"
        aria-label="Social links"
      >
        {socials.map((s) => {
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
              <Icon
                className="w-6 h-6"
                aria-hidden="true"
              />
            </a>
          );
        })}
      </div>

    </div>
  );
};

export default ContactActions;