import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const IconCont = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1rem;
  cursor: pointer;
  text-transform: uppercase;

  a {
    font-size: 1.125rem;
    color: var(--third-color);
  }
`;


const FooterLabels = () => {
  return <>
    <IconCont>
      <Link to={'/'}>X</Link>
      <Link to={'projects'}>Projects</Link>
      <Link to={'contact'}>Contact</Link>
      <a
        target='_blank'
        rel='noopener noreferrer'
        href="https://onedrive.live.com/embed?resid=E2C6B5F9511FCBD8%21121&authkey=!AKS7KvfpSnv6inI&em=2"
      >
        Resume
      </a>
    </IconCont>
  </>
}

export default FooterLabels