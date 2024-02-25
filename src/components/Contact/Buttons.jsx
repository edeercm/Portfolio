import React from 'react'
import styled from 'styled-components'
import { FaLinkedin } from "react-icons/fa";
import { MdAlternateEmail } from "react-icons/md";

const Btn = styled.a`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  width: 10rem;
  height: 2.25rem;
  text-decoration: none;
  color: var(--main-color);
  background-color: transparent;
  border: 0.05rem solid var(--main-color);
  transition: background-color 0.5s;

  svg {
    width: auto;
    font-size: 1.5rem;
  }

  &:hover {
    border: none;
    background-color: var(--second-color);

    svg, span {
      font-weight: bold;
      color: var(--third-color);
    }
  }


  @media (min-width: 575.98px) and (max-width: 991.98px) {
  }

  @media (max-width: 575.97px) {

  }
`;


const Buttons = () => {
  return <>
    <div className='d-flex flex-row gap-3'>
      <Btn
        href="https://www.linkedin.com/in/edeercm/"
        target='_blank'
        rel="noopener noreferrer"
      >
        <FaLinkedin />
        <span>Message me</span>
      </Btn>
      <Btn
        href="mailto:eder.cadena@gmail.com"
        rel="noopener noreferrer"
      >
        <MdAlternateEmail />
        <span>Get in touch</span>
      </Btn>
    </div>
  </>
}

export default Buttons