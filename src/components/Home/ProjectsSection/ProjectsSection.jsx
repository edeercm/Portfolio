import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components'
import ProjectOne from './ProjectOne';
import ProjectTwo from './ProjectTwo';
import ProjectThree from './ProjectThree';
// import { IoIosArrowRoundForward } from "react-icons/io";
// import ProjectFour from '../components/Projects/ProjectFour';

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

const Label = styled.h1`
  padding-top: 9.5rem;
  margin: 0;
  font-size: 5rem;
  color: var(--third-color);
  text-decoration: underline;
  text-underline-position: under;
`;

const Projects = () => {
  return <>
    <Section>
      <div className='container text-center'>
        <Title>Projects.</Title>
      </div>
      <ProjectOne />
      <ProjectTwo />
      <ProjectThree />
      <div className='container text-center'>
      <Link to={'/challenges'}>
        <Label>Challenges.</Label>
      </Link>
    </div>
    </Section>
  </>
}

export default Projects