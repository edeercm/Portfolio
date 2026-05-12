import styled from 'styled-components'
import socialsData from '../../../data/socials';

const Label = styled.span`
  width: 90%;
  font-size: 1.5rem; 
  color: var(--second-color);
  
  @media (min-width: 575.98px) and (max-width: 991.98px) {
    width: 100%;
    font-size: 1.75rem; 
  }

  @media (max-width: 575.97px) {
    width: 100%;
    font-size: 1.25rem;
  }
`;

const LabelTwo = styled.span`
  font-size: 1.5rem;
  color: var(--main-color);
  text-decoration: underline;
  text-underline-position: under;

  @media (min-width: 575.98px) and (max-width: 991.98px) {
    font-size: 1.75rem; 
  }

  @media (max-width: 575.97px) {
    font-size: 1.25rem;
  }
`;

const Icon = styled.div`
  color: var(--second-color);
  font-size: 2rem;
  transition: color 0.3s ease-in-out, transform 0.3s cubic-bezier(0.68, -0.55, 0.27, 1.55);

  &:hover {
    color: var(--main-color);
    transform: scale(1.25) rotate(10deg);
  }

  @media (max-width: 991.98px) {
    font-size: 2.5rem;
  }

`;

const About = () => {
  return <>
    <div className='d-flex flex-row gap-3'>
      {socialsData.map((social) => {
        const IconComponent = social.icon;
        return (
          <a key={social.id} href={social.url} target='_blank' rel='noopener noreferrer'>
            <Icon><IconComponent /></Icon>
          </a>
        );
      })}
    </div>
  </>
}

export default About