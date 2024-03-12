import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components'
import HeaderLabels from './HeaderLabels';
import Burger from './Burger';

const HeaderStyle = styled.header`
  position: fixed;
  display: flex;
  align-items: center;
  width: 100%;
  height: 10vh;
  z-index: 10;
  background-color: var(--second-color);

  @media (min-width: 575.98px) and (max-width: 991.98px) {
  }

  @media (max-width: 575.97px) {
    height: 7.5svh;
  }
`;

const Logo = styled.article`
  cursor: pointer;
  font-weight: bold;
  font-size: 2rem;
  color: var(--third-color);
`;

const Header = () => {

  return <>
    <HeaderStyle>
      <div className="container">
        <div className="row">
          <div className="col-6">
            <Logo>
              <Link to={'/'}>X</Link>
            </Logo>
          </div>
          <div className="col-6 d-flex justify-content-end align-items-center">
            <HeaderLabels />
            <Burger />
          </div>
        </div>
      </div>
    </HeaderStyle>
  </>
}

export default Header
