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
  background-color: #101011;

  h1, span {
    color: #E8E8E8;
    cursor: pointer;
  }

  span {
    font-size: 1.25rem;
  }
`;

const RWDContainerOne = styled.div`
  display: block;

  @media (min-width: 575.98px) and (max-width: 991.98px) {
    display: block;
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
    display: block;
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
            <div>
              <h1 onClick={() => handleNavigation('home')}>X</h1>
            </div>
          </div>
          <RWDContainerOne className="col-6 d-flex justify-content-end">
            <div className='d-flex flex-row align-items-center gap-3'>
              <span onClick={() => handleNavigation('skills')}>Skills</span>
              <span onClick={() => handleNavigation('projects')}>Projects</span>
              <span onClick={() => handleNavigation('contactMe')}>Contac</span>
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
