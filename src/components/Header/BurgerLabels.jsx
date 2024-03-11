import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components'

const BurgerLabelCont = styled.ul`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 0.75rem;

  a {
    font-size: 3rem;
    font-weight: bold;
    text-transform: uppercase;
    color: var(--second-color);
  }
`;

const BurgerLabels = () => {
  return <>
    <nav className='mt-5'>
      <BurgerLabelCont>
        <li><Link to={'/'}>Home</Link></li>
        <li><Link to={'projects'}>Projects</Link></li>
        <li><Link to={'contact'}>Contact</Link></li>
        <li>
          <a
            target='_blank'
            rel="noopener noreferrer"
            href="https://onedrive.live.com/embed?resid=E2C6B5F9511FCBD8%21116&authkey=!AAsWJTvZUm0kLiI&em=2"
          >
            Resume
          </a>
        </li>
      </BurgerLabelCont>
    </nav>
  </>
}

export default BurgerLabels