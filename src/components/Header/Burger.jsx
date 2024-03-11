import React, { useRef } from 'react';
import styled from 'styled-components';
import { HiBars3BottomRight } from 'react-icons/hi2';
import BurgerLabels from './BurgerLabels';
import BurgerIcons from './BurgerIcons';

const HamBtn = styled.button`
 svg {
  font-size: 2.75rem;
  color: var(--third-color);
 }
`

const CloseBtn = styled.button`
  font-size: 1.5rem;
  
  &:focus {
    box-shadow: none;
  }
`

const Burger = () => {
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
        <div className="offcanvas-header">
          <CloseBtn
            type="button"
            aria-label="Close"
            className="btn-close"
            data-bs-dismiss="offcanvas"
          >
          </CloseBtn>
        </div>
        <div className="offcanvas-body d-flex flex-column gap-5">
          <BurgerLabels />
          <BurgerIcons />
        </div>
      </div>
    </div>

  </>
}

export default Burger