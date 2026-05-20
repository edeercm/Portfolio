import ContactActions from './ContactActions';

const ContactCard = ({ socials }) => {
  return (
    <div className="glass-card p-12 rounded-2xl border-primary/20 shadow-[0_0_40px_rgba(20,110,245,0.05)]">
      <p className="font-body-lg text-body-lg text-on-surface-variant mb-10">
        Open to remote opportunities.
      </p>
      <ContactActions socials={socials} />
    </div>
  );
};

export default ContactCard;