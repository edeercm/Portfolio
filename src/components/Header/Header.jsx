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
`;

const Logo = styled.li`
 
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
            <nav>
              <ul>
                <Logo><Link to={'/'}>X</Link></Logo>
              </ul>
            </nav>
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
