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
            href="https://1drv.ms/b/s!AtjLH1H5tcbieChtq3fegD-0QjE"
          >
            Resume
          </a>
        </li>
      </BurgerLabelCont>
    </nav>
  </>
}

export default BurgerLabels