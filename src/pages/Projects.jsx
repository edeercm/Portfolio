import React, { useEffect } from 'react'
import styled from 'styled-components'
import ProjectOne from '../components/Projects/ProjectOne';
import ProjectTwo from '../components/Projects/ProjectTwo';
import ProjectThree from '../components/Projects/ProjectThree';

const Section = styled.section`
  width: 100%;
  height: auto;
  padding: 7.5rem 0;
  background-color: var(--second-color);

  @media (min-width: 575.98px) and (max-width: 991.98px) {
   
  }

  @media (max-width: 575.97px) {
  }
`;

const Label = styled.h1`
  color: #E8E8E8;
  font-size: 5rem;

  @media (min-width: 575.98px) and (max-width: 991.98px) {
  }

  @media (max-width: 575.97px) {
  }
`;

const Projects = () => {
  return <>
    <Section>
      <div className="container">
        <div className='text-center'>
          <Label>Projects.</Label>
        </div>
      </div>
      <ProjectOne />
      <ProjectTwo />
      <ProjectThree />
    </Section>
  </>
}

export default Projects