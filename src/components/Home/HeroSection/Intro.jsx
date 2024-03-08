import React from 'react'
import styled from 'styled-components'

const Name = styled.h1`
  font-size: 7rem;
  font-weight: bold;
  color: var(--main-color);
  font-family: 'Present Anthem', sans-serif;

  @media (min-width: 575.98px) and (max-width: 991.98px) {
    font-size: 6.5rem;
  }

  @media (max-width: 575.97px) {
    font-size: 3.25rem;
  }
`;

const Label = styled.h1`
  color: var(--main-color);
  font-size: 7rem;
  line-height: 0.925;
  letter-spacing: -0.1975rem;

  @media (min-width: 575.98px) and (max-width: 991.98px) {
    font-size: 6.5rem;
  }

  @media (max-width: 575.97px) {
    font-size: 3.25rem;
  }
`;

const Bachelor = styled.span`
  font-weight: bold;
  font-size: 1.75rem;
  color: var(--main-color);

  @media (min-width: 575.98px) and (max-width: 991.98px) {
    font-size: 2.5rem;
  }

  @media (max-width: 575.97px) {
    font-size: 1.25rem;
  }
`;

const Intro = () => {
  return <>
    <div className='d-flex align-items-center justify-content-center justify-content-xl-start gap-2 gap-md-3 gap-xl-4'>
      <Name>Eder,</Name>
      <Label>Front-end</Label>
    </div>
    <Label>Web Developer</Label>
    <div className='text-center text-xl-end'>
      <Bachelor>and a Electromechanical engineer.</Bachelor>
    </div>
  </>
}

export default Intro