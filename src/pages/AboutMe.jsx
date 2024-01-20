import React from 'react'
import styled from 'styled-components'
import SkillCards from '../components/SkillsComps/SkillCards';

const Section = styled.section`
  position: relative;
  width: 100%;
  height: 120vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #ff5858;

  h1, h2, h3, h4, span {
    color: white;
  }

  h1, h3, span { 
    font-family: 'Urbanist', sans-serif;
  }

  h2 {
    font-family: 'VIC', sans-serif;
  }

  span { 
    font-size: 1.175rem;
  }

  @media (min-width: 575.98px) and (max-width: 991.98px) {
    height: auto;
    padding: 5rem 0;

    span { 
      font-size: 1.5rem;
    }
  }

  @media (max-width: 575.97px) {
    height: auto;
    padding: 2.5rem 0;
  }
`;

const Circle = styled.div`
  width: 0.675rem;
  height: 0.675rem;
  border-radius: 50%;
  background-color: #fff;

  @media (min-width: 575.98px) and (max-width: 991.98px) {
  }

  @media (max-width: 575.97px) {
  }
`;

const SectionLabel = styled.h4`
  color: #fff;
  font-size: 1.5rem;
  font-family: 'REM', sans-serif;
  text-transform: uppercase;
  text-decoration: underline;
  text-underline-position: under;

  @media (min-width: 575.98px) and (max-width: 991.98px) {
    font-size: 3rem;
  }

  @media (max-width: 575.97px) {
  }
`;

const Container = styled.div`
  width: 50%;

  @media (min-width: 575.98px) and (max-width: 991.98px) {
    width: 100%;
  }

  @media (max-width: 575.97px) {
    margin-top: 1.5rem;
    width: 100%;
  }
`;

const Label = styled.h2`
  font-size: 1.425rem;
  text-transform: uppercase;

  @media (min-width: 575.98px) and (max-width: 991.98px) {
  }

  @media (max-width: 575.97px) {
  }
`;


const AboutMe = () => {
  return <>
    <Section id='aboutme'>
      <div className='container position-absolute top-0 d-flex flex-row align-items-center justify-content-md-center justify-content-lg-start justify-content-xl-start gap-2 mt-5'>
        <Circle></Circle>
        <SectionLabel>About Me</SectionLabel>
      </div>
      <Container className="container-xxl">
        <div className="row">
          <div className="col-md-12 col-lg-12 col-xl-12">
            <div className="row">
              <div className="col-md-12 col-lg-6 col-xl-6 text-md-center text-lg-start text-xl-start">
                <h1 className='mt-5 mt-md-5 mt-lg-0 mt-xl-0 mb-4 mb-md-4 mb-lg-0 mb-xl-0'>Education</h1>
              </div>
              <div className="col-md-12 col-lg-6 col-xl-6 d-flex flex-column gap-4">
                <div className='text-md-center text-lg-start text-xl-start'>
                  <Label>Instituto Tecnológico Superior de Xalapa</Label>
                  <div className='d-flex flex-column mt-2'>
                    <span>BS: Electromechanical Engineer</span>
                    <span>2019 - 2023</span>
                  </div>
                </div>
                <div className='text-md-center text-lg-start text-xl-start'>
                  <Label>Oracle Next Education (ONE) + Alura Latam</Label>
                  <div className='d-flex flex-column mt-2'>
                    <span>Front-End Web Developer</span>
                    <span>2023 - 2023</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-12 col-lg-12 col-xl-12 mt-5">
            <div className="row">
              <div className="col-md-12 col-lg-6 col-xl-6 text-md-center text-lg-start text-xl-start">
                <h1 className='mb-4 mb-md-4 mb-lg-0 mb-xl-0'>Key Skills</h1>
              </div>
              <div className="col-md-12 col-lg-6 col-xl-6 d-flex justify-content-center justify-content-md-center justify-content-lg-start justify-content-xl-start">
                <SkillCards />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  </>
}

export default AboutMe



