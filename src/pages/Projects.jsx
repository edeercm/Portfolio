import React, { useEffect } from 'react'
import styled from 'styled-components'
import ProjectOne from '../components/Projects/ProjectOne';
import ProjectTwo from '../components/Projects/ProjectTwo';
import ProjectThree from '../components/Projects/ProjectThree';
import ProjectFour from '../components/Projects/ProjectFour';

const Section = styled.section`
  width: 100%;
  height: auto;
  padding: 7.5rem 0;
  background-color: var(--second-color);
`;

const Title = styled.h1`
  font-size: 5rem;
  color: var(--third-color);
`;

const Projects = () => {
  return <>
    <Section id='projects'>
      <div className="container">
        <div className='text-center'>
          <Title>Projects.</Title>
        </div>
      </div>
      <ProjectOne />
      <ProjectTwo />
      <ProjectThree />
      <ProjectFour />
    </Section>
  </>
}

export default Projects