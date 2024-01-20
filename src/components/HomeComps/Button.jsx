import React from 'react'
import styled from 'styled-components'
import { IoArrowDown } from "react-icons/io5";

const Btn = styled.div`
  position: absolute;
  left: 51.15%;
  bottom: 5%;
  transform: translateX(-50%);
  width: 3.5rem;
  height: 3.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: white;
  cursor: pointer;

  svg {
    font-size: 2rem;
  }

  @media (min-width: 575.98px) and (max-width: 991.98px) {
    display: none;
  }

  @media (max-width: 575.97px) {
  }
`;

const Button = () => {

  const handleButtonClick = () => {

    const aboutMeSection = document.getElementById('aboutme');

    if (aboutMeSection) {
      const windowHeight = window.innerHeight;
      const sectionHeight = aboutMeSection.clientHeight;
      const scrollTo = aboutMeSection.offsetTop - (windowHeight - sectionHeight) / 5;

      window.scrollTo({
        top: scrollTo,
        behavior: 'smooth',
      });
    }
  };

  return <>
    <Btn onClick={handleButtonClick}>
      <IoArrowDown />
    </Btn>
  </>
}

export default Button