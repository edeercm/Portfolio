import React from 'react';
import styled from 'styled-components'
import SkillCards from '../components/SkillsComps/SkillCards';

const Section = styled.section`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #0C0F0A;

  @media (min-width: 575.98px) and (max-width: 991.98px) {
  }

  @media (max-width: 575.97px) {
  }
`;

const Label = styled.h1`
  color: #fff;
  font-size: 4.25rem;
  font-weight: bold;
  letter-spacing: 0.275rem;
  text-shadow: 0 0 10px rgba(255, 255, 255, 0.25);  

  @media (min-width: 575.98px) and (max-width: 991.98px) {
  }

  @media (max-width: 575.97px) {
  }
`;

const Skills = () => {

  return <>
    <Section id='skills'>
      <div className='container-sm container-md container-xxl'>
        <div className="row" style={{ gap: '3.75rem' }}>
          <div className="col-md-12 col-lg-12 col-xl-12 d-flex justify-content-center">
            <Label>Skills</Label>
          </div>
          <div className="col-md-12 col-lg-12 col-xl-12 d-flex justify-content-center">
            {/* <SkillsCarousel /> */}
            <SkillCards />
          </div>
        </div>
      </div>
    </Section>
  </>

}

export default Skills