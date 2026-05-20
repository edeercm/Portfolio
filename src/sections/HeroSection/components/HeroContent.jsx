const HeroContent = () => {
  return (
    <>
      <h1 className="font-display-lg text-display-lg md:text-[80px] md:leading-[1] mb-8 text-on-surface">
        I build payment systems{' '}
        <span className="text-primary-container">
          that don't fail.
        </span>
      </h1>

      <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mb-12">
        From ISO-8583 pipelines and fraud prevention
        integrations to clean frontend interfaces.
        I engineer the full experience, augmented
        by an AI-first workflow.
      </p>
    </>
  );
};

export default HeroContent;