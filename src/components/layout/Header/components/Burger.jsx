import React, { useState } from 'react';
import styled from 'styled-components';
import BurgerLabels from './BurgerLabels';
import BurgerIcons from './BurgerIcons';
import { IoMdClose } from "react-icons/io";
import { HiBars3BottomRight } from 'react-icons/hi2';

const OffCStyle = styled.div`
  background-color: var(--second-color);
  transition: 0.75s cubic-bezier(0.4, 0, 0.2, 1);
`

const BurgerBtn = styled.button`
 svg {
  font-size: 2.75rem;
  color: var(--third-color);
 }
`

const Burger = () => {

  const closeOffcanvas = () => {
    const offcanvas = document.getElementById('offcanvasRight');
    const offcanvasInstance = bootstrap.Offcanvas.getInstance(offcanvas);
    offcanvasInstance.hide(); // Cerrar el offcanvas
    setIsOpen(false);
  };

  return <>
    <div className='d-flex d-md-none'>
      <BurgerBtn
        type="button"
        data-bs-toggle="offcanvas"
        data-bs-target="#offcanvasRight"
        aria-controls="offcanvasRight"
      >
        <HiBars3BottomRight />
      </BurgerBtn>
      <OffCStyle 
        className="offcanvas offcanvas-end"
        tabIndex="-1"
        id="offcanvasRight"
        aria-labelledby="offcanvasRightLabel"
      >
        <div className="offcanvas-header d-flex justify-content-end">
          <button
            type="button"
            aria-label="close"
            data-bs-dismiss="offcanvas"
          >
            <IoMdClose
              style={{
                fontSize: '2.75rem',
                color: 'var(--third-color)'
              }}
            />
          </button>
        </div>
        <div className="offcanvas-body d-flex flex-column gap-5">
          <BurgerLabels closeOffcanvas={closeOffcanvas} />
          <BurgerIcons />
        </div>
      </OffCStyle>
    </div>

  </>
}

export default Burger