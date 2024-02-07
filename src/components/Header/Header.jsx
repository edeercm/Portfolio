import React from 'react'
import styled from 'styled-components'
import Hamburger from './Hamburger';

const NavBar = styled.header`
  position: fixed;
  display: flex;
  align-items: center;
  width: 100%;
  height: 10vh;
  z-index: 10;
  background-color: var(--second-color);
`;

const Logo = styled.h1`
  cursor: pointer;
  color: var(--third-color);

  @media (max-width: 576px) {
    font-size: 2.75rem;
  }
`;

const NavLabel = styled.span`
  cursor: pointer;
  font-size: 1.25rem;
  color: var(--third-color);
`;

const RWDContainerOne = styled.div`
  display: flex;
  align-items: end;
  justify-content: end;

  @media (min-width: 575.98px) and (max-width: 991.98px) {
    display: flex;
  }

  @media (max-width: 575.97px) {
    display: none!important;
  }
`;

const RWDContainerTwo = styled.div`
  display: none;

  @media (min-width: 575.98px) and (max-width: 991.98px) {
    display: none;
  }

  @media (max-width: 575.97px) {
    display: flex;
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
          <div className="col-6 d-flex align-items-center">
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
                Contac
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
