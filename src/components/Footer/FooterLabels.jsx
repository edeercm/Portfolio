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
        href="https://drive.google.com/file/d/1D_jmMSCdab7MHIswD3SB6bmHcl_eHX8b/view?usp=sharing"
      >
        Resume
      </a>
    </IconCont>
  </>
}

export default FooterLabels