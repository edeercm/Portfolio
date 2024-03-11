import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components'

const LabelsCont = styled.ul`
  display: flex;
  flex-direction: row;
  gap: 0.75rem;

  a {
    position: relative;
    cursor: pointer;
    font-size: 1.25rem;
    text-transform: uppercase;
    color: var(--third-color);

    &::after {
      content: '';
      position: absolute;
      bottom: 0;
      right: 0;
      width: 0;
      height: 0.175rem;
      background-color: var(--third-color);
      transition: width 0.35s ease-out, right 0.35s ease-in;
    }

    &:hover::after {
      width: 100%;
      left: 0;
    }
  }
`;

const HeaderLabels = () => {
  return <>
    <nav className='d-none d-md-flex'>
      <LabelsCont>
        <li>
          <Link to={'/'}>Home</Link>
        </li>
        <li>
          <Link to={'projects'}>Projects</Link>
        </li>
        <li>
          <Link to={'contact'}>Contact</Link>
        </li>
        <li>
          <a href="">Resume</a>
        </li>
      </LabelsCont>
    </nav>
  </>
}

export default HeaderLabels