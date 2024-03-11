import React from 'react'
import styled from 'styled-components';
import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";

const Icon = styled.a`
  svg {
    font-size: 1.5rem;
    color: var(--third-color);
  }
`;

const FooterIcons = () => {
  return <>
    <div className='d-flex flex-row gap-2'>
      <Icon
        target='_blank'
        rel='noopener noreferrer'
        href='https://www.linkedin.com/in/edeercm/'
      >
        <FaLinkedin />
      </Icon>
      <Icon
        target='_blank'
        rel='noopener noreferrer'
        href='https://github.com/edeercm'
      >
        <FaGithub />
      </Icon>
      <Icon
        target='_blank'
        rel='noopener noreferrer'
        href='https://www.instagram.com/edeercm/'
      >
        <FaInstagram />
      </Icon>
    </div>
  </>
}

export default FooterIcons