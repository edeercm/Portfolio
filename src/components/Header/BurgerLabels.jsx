import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components'

const BurgerLabelCont = styled.ul`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 0.75rem;

  a {
    font-size: 2.5rem;
    font-weight: bold;
    text-transform: uppercase;
    color: var(--third-color);
  }
`;

const BurgerLabels = ({ closeOffcanvas }) => {

  const handleLinkClick = () => {
    closeOffcanvas(); // Llamar a la función de cierre del offcanvas
  };

  return <>
    <nav className='mt-5 pt-4'>
      <BurgerLabelCont>
        <li> <Link to={'/'} onClick={handleLinkClick}>Home</Link></li>
        <li><Link to={'projects'} onClick={handleLinkClick}>Projects</Link></li>
        <li> <Link to={'contact'} onClick={handleLinkClick}> Contact</Link></li>
        <li>
          <a
            target='_blank'
            rel="noopener noreferrer"
            onClick={handleLinkClick}
            href="https://onedrive.live.com/embed?resid=E2C6B5F9511FCBD8%21121&authkey=!AKS7KvfpSnv6inI&em=2"
          >
            Resume
          </a>
        </li>
      </BurgerLabelCont>
    </nav>
  </>
}

export default BurgerLabels