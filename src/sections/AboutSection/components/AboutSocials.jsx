const AboutSocials = ({ socials }) => {
  return (
    <div className="flex gap-6 items-center">
      {socials.map((social) => {
        const IconComponent = social.icon;

        return (
          <a
            key={social.id}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-on-surface-variant hover:text-primary transition-all hover:scale-125 hover:-translate-y-1 duration-300"
            aria-label={social.name}
            title={social.name}
          >
            <IconComponent className="w-6 h-6" />
          </a>
        );
      })}
    </div>
  );
};

export default AboutSocials;