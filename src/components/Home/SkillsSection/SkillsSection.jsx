import React from 'react';
import styled from 'styled-components'
import SkillsCards from './SkillsCards';

const Section = styled.section`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--second-color);

  @media (min-width: 575.98px) and (max-width: 991.98px) {
  }

  @media (max-width: 575.97px) {
    height: auto;
    padding: 7.5rem 0;
  }
`;

const Label = styled.h1`
  font-size: 5rem;
  font-weight: bold;
  color: var(--third-color);

  @media (min-width: 575.98px) and (max-width: 991.98px) {
  }

  @media (max-width: 575.97px) {
  }
`;

const Skills = () => {

  return <>
    <Section>
      <div className='container'>
        <div className="row">
          <div className="col-12 d-flex flex-column text-center align-items-center gap-5">
            <Label>Key Skills.</Label>
            <SkillsCards />
          </div>
        </div>
      </div>
    </Section>
  </>

}

export default Skills