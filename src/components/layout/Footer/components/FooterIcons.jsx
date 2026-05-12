import styled from 'styled-components';
import socialsData from '../../../../data/socials';

const Icon = styled.a`
  svg {
    font-size: 1.5rem;
    color: var(--third-color);
  }
`;

const FooterIcons = () => {
  return <>
    <div className='d-flex flex-row gap-2'>
      {socialsData.map((social) => {
        const IconComponent = social.icon;
        return (
          <Icon
            key={social.id}
            target='_blank'
            rel='noopener noreferrer'
            href={social.url}
          >
            <IconComponent />
          </Icon>
        );
      })}
    </div>
  </>
}

export default FooterIcons