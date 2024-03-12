import React from 'react'
import { AiFillLinkedin, AiFillGithub, AiOutlineInstagram } from 'react-icons/ai';
import styled from 'styled-components'

const BurgerIconCont = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  gap: 0.75rem;

  svg {
    font-size: 2.5rem;
    font-weight: bold;
    color: var(--third-color);
  }
`;

const BurgerIcons = () => {
  return <>
    <BurgerIconCont>
      <AiFillLinkedin />
      <AiFillGithub />
      <AiOutlineInstagram />
    </BurgerIconCont>
  </>
}

export default BurgerIcons