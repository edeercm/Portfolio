import React from 'react'
import styled from 'styled-components'
import Hamburger from './Hamburger';

const NavBar = styled.header`
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 9vh;
  z-index: 10;
  background-color: var(--second-color);
`;

const Logo = styled.h2`
  cursor: pointer;
  font-weight: bold;
  color: var(--third-color);

  @media (max-width: 576px) {
    font-size: 2.5rem;
  }
`;

const NavLabel = styled.h2`
  position: relative;
  cursor: pointer;
  font-size: 2rem;
  color: var(--third-color);

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    right: 0; /* Ajuste para que la línea comience desde el lado derecho */
    width: 0;
    height: 0.175rem;
    background-color: var(--third-color);
    transition: width 0.35s ease-out, right 0.35s ease-in; /* Agregamos right a la transición */
  }

  &:hover::after {
    width: 100%;
    left: 0;
  }
`;

const RWDContainerOne = styled.div`
  display: flex;
  align-items: center;
  justify-content: end;

  @media (max-width: 575.97px) {
    display: none!important;
  }
`;

const RWDContainerTwo = styled.div`
  display: none;

  @media (max-width: 575.97px) {
    display: flex;
    align-items: center;
    justify-content: end;
  }
`;

const Header = () => {

  const handleNavigation = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return <>
    <NavBar>
      <div className="container">
        <div className="row">
          <div className="col-6">
            <Logo onClick={() => handleNavigation('home')}>
              X
            </Logo>
          </div>
          <RWDContainerOne className="col-6">
            <div className='d-flex flex-row align-items-center gap-3'>
              <NavLabel onClick={() => handleNavigation('skills')}>
                Skills
              </NavLabel>
              <NavLabel onClick={() => handleNavigation('projects')}>
                Projects
              </NavLabel>
              <NavLabel onClick={() => handleNavigation('contactMe')}>
                Contact
              </NavLabel>
            </div>
          </RWDContainerOne>
          <RWDContainerTwo className="col-6">
            <Hamburger />
          </RWDContainerTwo>
        </div>
      </div>
    </NavBar>
  </>
}

export default Header
