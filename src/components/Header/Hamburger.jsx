import React, { useRef } from 'react';
import styled from 'styled-components';
import { HiBars3BottomRight } from 'react-icons/hi2';
import { AiFillLinkedin, AiFillGithub, AiOutlineInstagram } from 'react-icons/ai';

const Container = styled.div`
  display: none;

  @media (max-width: 576px) {
    display: flex;
    align-items: center;
    justify-content: end;
  }
`;

const NavbarToggle = styled.div`

  svg {
    font-size: 3rem;
    color: var(--third-color);
  }

`;

const Label = styled.h2`
  font-size: 5rem;
  color: var(--second-color);
`;

const Icon = styled.div`
  svg {
    font-size: 3.5rem;
    color: var(--second-color);
  }

`;

const CloseBtn = styled.button`
 
 &:focus {
  box-shadow: none;
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
        <NavbarToggle>
          <HiBars3BottomRight />
        </NavbarToggle>
      </div>
      <div
        style={{ backgroundColor: '#E8E8E8' }}
        className="offcanvas offcanvas-end"
        tabIndex="-1" id="offcanvasNavbar"
        aria-labelledby="offcanvasRightLabel"
        ref={offcanvasRef}
      >
        <div className="offcanvas-header d-flex justify-content-end">
          <CloseBtn type="button" className="btn-close fs-4" data-bs-dismiss="offcanvas" aria-label="Close"></CloseBtn>
        </div>
        <div className="offcanvas-body d-flex flex-column justify-content-around">
          <div className='d-flex flex-column text-center gap-3'>
            <div onClick={() => handleNavigation('skills')}><Label>Skills</Label></div>
            <div onClick={() => handleNavigation('projects')}> <Label>Projects</Label></div>
            <div onClick={() => handleNavigation('contactMe')}><Label>Contact</Label></div>
          </div>
          <div className='d-flex flex-row justify-content-center gap-3'>
            <a href="https://www.linkedin.com/in/edeercm/" target="_blank" rel="noopener noreferrer">
              <Icon>
                <AiFillLinkedin />
              </Icon>
            </a>
            <a href="https://github.com/edeercm" target="_blank" rel="noopener noreferrer">
              <Icon>
                <AiFillGithub />
              </Icon>
            </a>
            <a href="https://www.instagram.com/edeercm/" target="_blank" rel="noopener noreferrer">
              <Icon>
                <AiOutlineInstagram />
              </Icon>
            </a>
          </div>
        </div>
      </div>
    </Container>

  </>
}

export default Hamburger