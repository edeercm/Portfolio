import React, { useState } from 'react';
import styled from 'styled-components';
import BurgerLabels from './BurgerLabels';
import BurgerIcons from './BurgerIcons';
import { IoMdClose } from "react-icons/io";
import { HiBars3BottomRight } from 'react-icons/hi2';
import './BurgerAnim.css'

const HamBtn = styled.button`
 svg {
  font-size: 2.75rem;
  color: var(--third-color);
 }
`

const Burger = () => {

  const [isOpen, setIsOpen] = useState(false);

  const toggleOffcanvas = () => {
    setIsOpen(!isOpen);
  };

  const closeOffcanvas = () => {
    const offcanvas = document.getElementById('offcanvasRight');
    const offcanvasInstance = bootstrap.Offcanvas.getInstance(offcanvas);
    offcanvasInstance.hide(); // Cerrar el offcanvas
  };

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
        className={`offcanvas offcanvas-end offcanvas-anim ${isOpen ? 'show' : 'hide'}`}
        tabIndex="-1"
        id="offcanvasRight"
        aria-labelledby="offcanvasRightLabel"
        style={{
          backgroundColor: 'var(--second-color)'
        }}
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
          <BurgerLabels closeOffcanvas={closeOffcanvas}/>
          <BurgerIcons />
        </div>
      </div>
    </div>

  </>
}

export default Burger