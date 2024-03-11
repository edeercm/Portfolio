import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components'
import Hamburger from './Hamburger';

const HeaderStyle = styled.header`
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 10vh;
  z-index: 10;
  background-color: var(--second-color);
`;

const Logo = styled.div`
  cursor: pointer;
  font-weight: bold;
  font-size: 2rem;
  color: var(--third-color);

  @media (max-width: 576px) {
    margin-left: 0.25rem;
  }
`;

const NavLabel = styled.span`
  position: relative;
  cursor: pointer;
  font-size: 1.5rem;
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
`;

const RWDContainerOne = styled.div`
  display: flex;
  
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

  return <>
    <HeaderStyle>
      <div className="container">
        <div className="row">
          <div className="col-6">
            <Link to={'/'}>
              <Logo>X</Logo>
            </Link>
          </div>
          <RWDContainerOne className="col-6">
            <div className='d-flex flex-row gap-4'>
              <Link to={'projects'} className='d-flex align-items-center'>
                <NavLabel>Projects</NavLabel>
              </Link>
              <Link to={'contact'} className='d-flex align-items-center'>
                <NavLabel>Contact</NavLabel>
              </Link>
              <a
                href="https://drive.google.com/file/d/1D_jmMSCdab7MHIswD3SB6bmHcl_eHX8b/view?usp=sharing"
                target='_blank'
                className='d-flex align-items-center'
              >
                <NavLabel>Resume</NavLabel>
              </a>
            </div>
          </RWDContainerOne>
          <RWDContainerTwo className="col-6">
            <Hamburger />
          </RWDContainerTwo>
        </div>
      </div>
    </HeaderStyle>
  </>
}

export default Header
