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
  color: var(--main-color);
  background-color: transparent;
  border: 0.05rem solid var(--main-color);
  transition: background-color 0.75s ease-in-out;

  svg {
    font-size: 1.5rem;
  }

  &:hover {
    border: none;
    color: var(--third-color);
    background-color: var(--second-color);

    svg {
      font-weight: bold;
      color: var(--third-color);
    }
  }
`;

const ContactBtns = () => {
  return <>
    <div className='d-flex flex-row gap-3'>
      <Btn
        href="https://www.linkedin.com/in/edeercm/"
        target='_blank'
        rel="noopener noreferrer"
      >
        <FaLinkedin />
        Message me
      </Btn>
      <Btn
        href="mailto:eder.cadena@gmail.com"
        rel="noopener noreferrer"
      >
        <MdAlternateEmail />
        Get in touch
      </Btn>
    </div>
  </>
}

export default ContactBtns