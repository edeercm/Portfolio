import React, { useEffect } from 'react'
import styled from 'styled-components'
import ProjectOne from '../components/Projects/ProjectOne';
import ProjectTwo from '../components/Projects/ProjectTwo';
import ProjectThree from '../components/Projects/ProjectThree';

const Circle = styled.div`
  width: 0.675rem;
  height: 0.675rem;
  border-radius: 50%;
  background-color: #777;

  @media (min-width: 575.98px) and (max-width: 991.98px) {
  }

  @media (max-width: 575.97px) {
  }
`;

const SectionLabel = styled.h4`
  color: #0C0F0A;
  font-size: 1.5rem;
  font-family: 'REM', sans-serif;
  text-transform: uppercase;
  text-decoration: underline;
  text-underline-position: under;

  @media (min-width: 575.98px) and (max-width: 991.98px) {
    font-size: 3rem;
  }

  @media (max-width: 575.97px) {
    font-size: 1.75rem;
  }
`;

const Projects = () => {
  return <>
    <div className='container position-relative top-0 d-flex flex-row align-items-center justify-content-center justify-content-md-center justify-content-lg-start justify-content-xl-start gap-2 mt-5'>
      <Circle></Circle>
      <SectionLabel>Projects</SectionLabel>
    </div>
    <ProjectOne />
    <ProjectTwo />
    <ProjectThree />
  </>
}

export default Projects