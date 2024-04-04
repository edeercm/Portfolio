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
        href="https://1drv.ms/b/s!AtjLH1H5tcbid7C_U4I9OD8RTLs?e=QcWGGs"
      >
        Resume
      </a>
    </IconCont>
  </>
}

export default FooterLabels