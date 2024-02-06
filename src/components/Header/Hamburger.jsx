import React, { useRef } from 'react';
import styled from 'styled-components';
import { HiBars3BottomRight } from 'react-icons/hi2';
import { AiFillLinkedin, AiFillGithub, AiOutlineInstagram } from 'react-icons/ai';

const Container = styled.div`
  display: none;

  /* .offcanvas-mobile-menu {
    background-color: #E8E8E8;
  } */

  @media (max-width: 576px) {
    display: flex;
    align-items: center;
    justify-content: end;
  }

  svg {
    color: #E8E8E8;
    font-size: 2rem;
  }
`;

const Label = styled.h1`
  color: #da1515;
  font-size: 3rem;
`;

const Icons = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;

  svg {
    color: #0C0F0A;
    font-size: 2.5rem;
  }
`;


const Hamburger = () => {

  const offcanvasRef = useRef(null);

  const handleNavigation = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    closeOffcanvas();
  };

  const closeOffcanvas = () => {
    if (offcanvasRef.current) {
      offcanvasRef.current.classList.remove('show');
      // Elimina el fondo oscuro
      const backdrop = document.querySelector('.offcanvas-backdrop');
      if (backdrop) {
        backdrop.remove();
      }
      // Reactiva el scroll después de cerrar el offcanvas
      document.body.style.overflow = 'auto';
    }
  };

  return <>
    <Container>
      <div className="navbar-toggle"
        type="button"
        data-bs-toggle="offcanvas"
        data-bs-target="#offcanvasNavbar"
        aria-controls="offcanvasNavbar"
      >
        <HiBars3BottomRight />
      </div>
      <div
        style={{ backgroundColor: 'E8E8E8' }}   
        className="offcanvas offcanvas-end" 
        tabIndex="-1" id="offcanvasNavbar" 
        aria-labelledby="offcanvasRightLabel" 
        ref={offcanvasRef}
      >
        <div className="offcanvas-header d-flex justify-content-end">
          <button type="button" className="btn-close fs-4" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div className="offcanvas-body d-flex flex-column justify-content-around">
          <div className='d-flex flex-column text-center gap-3'>
            <Label onClick={() => handleNavigation('skills')}>Skills</Label>
            <Label onClick={() => handleNavigation('projects')}>Projects</Label>
            <Label onClick={() => handleNavigation('contactMe')}>Contac</Label>
          </div>
          <Icons>
            <a href="https://www.linkedin.com/in/edeercm/" target="_blank" rel="noopener noreferrer">
              <AiFillLinkedin />
            </a>
            <a href="https://github.com/edeercm" target="_blank" rel="noopener noreferrer">
              <AiFillGithub />
            </a>
            <a href="https://www.instagram.com/edeercm/" target="_blank" rel="noopener noreferrer">
              <AiOutlineInstagram />
            </a>
          </Icons>
        </div>
      </div>
    </Container>

  </>
}

export default Hamburger