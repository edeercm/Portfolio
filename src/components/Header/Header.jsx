import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components'
import Hamburger from './Hamburger';

import HeaderLabels from './HeaderLabels';

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
          <div className="col-6 d-flex justify-content-end align-items-center">
            <HeaderLabels />
            <Hamburger />
          </div>
        </div>
      </div>
    </HeaderStyle>
  </>
}

export default Header
