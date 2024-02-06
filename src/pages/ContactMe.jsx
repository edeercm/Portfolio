import React from 'react'
import styled from 'styled-components'
import { FaLinkedin } from "react-icons/fa";
import { MdAlternateEmail } from "react-icons/md";

const Section = styled.section`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #E8E8E8;

  a {
    text-decoration: none;
  }

  @media (min-width: 575.98px) and (max-width: 991.98px) {
  }

  @media (max-width: 575.97px) {
  }
`;

const Label = styled.h1`
  color: #3F01A8;
  font-size: 7.5rem;
  font-weight: bold;

  @media (min-width: 575.98px) and (max-width: 991.98px) {
    font-size: 6.5rem;
  }

  @media (max-width: 575.97px) {
  }
`;

const Btn = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.25rem;
  width: 10rem;
  height: 2.25rem;
  color: #3F01A8;
  text-decoration: none;
  background-color: transparent;
  border: 0.05rem solid #3F01A8;
  transition: background-color 0.5s;

  svg {
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

const ContactMe = () => {
  return <>
    <Section>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h1>Already have a design in mind?</h1>
            <Label>Let's connect</Label>
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
          </div>
        </div>
      </div>

    </Section >
  </>
}

export default ContactMe