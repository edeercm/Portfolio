import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { HiBars3BottomRight } from 'react-icons/hi2';

import HeaderLabels from './HeaderLabels';
import { AiFillLinkedin, AiFillGithub, AiOutlineInstagram } from 'react-icons/ai';


const HamBtn = styled.button`
 svg {
  font-size: 2.75rem;
  color: var(--third-color);
 }
`

const CloseBtn = styled.button`
  &:focus {
    box-shadow: none;
  }
`

const LabelsCont = styled.ul`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 0.75rem;

  a {
    position: relative;
    cursor: pointer;
    font-size: 1.25rem;
    text-transform: uppercase;
    color: var(--second-color);

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
  }
`;

const Hamburger = () => {
  return <>
    <div className='d-flex d-md-none'>
      <HamBtn
        type="button"
        data-bs-toggle="offcanvas"
        data-bs-target="#offcanvasRight"
        aria-controls="offcanvasRight"
      >
        <HiBars3BottomRight />
      </HamBtn>
      <div
        className="offcanvas offcanvas-end"
        tabIndex="-1"
        id="offcanvasRight"
        aria-labelledby="offcanvasRightLabel"
      >
        <div class="offcanvas-header">
          <CloseBtn type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></CloseBtn>
        </div>
        <div className="offcanvas-body">
          <nav>
            <LabelsCont>
              <li>
                <Link to={'/'}>Home</Link>
              </li>
              <li>
                <Link to={'projects'}>Projects</Link>
              </li>
              <li>
                <Link to={'contact'}>Contact</Link>
              </li>
              <li>
                <a href="">Resume</a>
              </li>
            </LabelsCont>
          </nav>
        </div>
      </div>
    </div>

  </>
}

export default Hamburger