import React from 'react'
import styled from 'styled-components'
import Intro from './Intro';
import About from './About';
import img from '../../../assets/images/home/me2.jpg'

const Section = styled.section`
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 7.5rem 0;
  background-color: #E8E8E8;

  @media (min-width: 575.98px) and (max-width: 991.98px) {
    padding: 7rem 0;
  }

  @media (max-width: 575.97px) {
    padding: 5.75rem 0 3.75rem;
  }
`;

const Img = styled.img`
  width: auto;
  height: 60svh;
  object-fit: contain;
  object-position: center;  

  @media (min-width: 575.98px) and (max-width: 991.98px) {
    height: auto;
    margin-bottom: 1.5rem;
  }

  @media (max-width: 575.97px) {
    height: auto;
    margin-bottom: 1.5rem;
  }
`;

const HeroSection = () => {
  return <>
    <Section>
      <div className="container">
        <div className="row gap-4">
          <div className="col-12 text-center text-xl-start mt-md-3 mt-xl-0">
            <Intro />
          </div>
          <div className="col-12">
            <div className="row flex-column-reverse flex-xl-row">
              <div className="col-12 col-xl-6 d-flex align-items-end">
                <About />
              </div>
              <div className="col-12 col-xl-6 d-flex justify-content-center justify-content-xl-end">
                <Img src={img} alt="Me ;)" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  </>
}

export default HeroSection