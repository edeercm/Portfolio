import React from 'react'
import styled from 'styled-components'
import ContactBtns from '../components/Contact/ContactBtns';

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

const Intro = styled.h1`
  font-size: 1.5rem;
  font-weight: bold;

  @media (max-width: 575.97px) {
    font-size: 1.25rem;
  }
`;

const Label = styled.h1`
  font-size: 7.5rem;
  font-weight: bold;
  color: var(--main-color);

  @media (min-width: 575.98px) and (max-width: 991.98px) {
    font-size: 6.5rem;
  }

  @media (max-width: 575.97px) {
    font-size: 5.25rem;
  }
`;

const Contact = () => {
  return <>
    <Section>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <Intro>Already have a design in mind?</Intro>
            <Label>Let's connect</Label>
            <ContactBtns />
          </div>
        </div>
      </div>
    </Section >
  </>
}

export default Contact