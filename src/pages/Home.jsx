import React from 'react'
import styled from 'styled-components'
import img from '../assets/images/home/me2.jpg'
import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";

const Section = styled.section`
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 7.5rem 0;
  background-color: #E8E8E8;
`;

const Label = styled.h1`
  color: var(--main-color);
  font-size: 7rem;
  line-height: 0.9;
  letter-spacing: -0.25rem;

  @media (min-width: 575.98px) and (max-width: 991.98px) {
    font-size: 6.5rem;
  }

  @media (max-width: 575.97px) {
    font-size: 3.75rem;
  }
`;

const LabelTwo = styled.span`
  font-weight: bold;
  font-size: 1.75rem;
  color: var(--main-color);

  @media (min-width: 575.98px) and (max-width: 991.98px) {
    font-size: 2rem;
  }

  @media (max-width: 575.97px) {
    font-size: 1.5rem;
  }
`;

const LabelThree = styled.span`
  font-weight: bold;
  font-size: 1.5rem; 
  color: var(--second-color);

  @media (min-width: 575.98px) and (max-width: 991.98px) {
    font-size: 1.75rem; 
  }
`;

const LabelFour = styled.span`
  font-weight: bold;
  font-size: 1.5rem;
  color: var(--main-color);
  text-decoration: underline;
  text-underline-position: under;

  @media (min-width: 575.98px) and (max-width: 991.98px) {
    font-size: 1.75rem; 
  }
`;

const Icon = styled.div`
  color: var(--second-color);
  font-size: 2rem;
  transition: color 0.3s ease-in-out, transform 0.3s cubic-bezier(0.68, -0.55, 0.27, 1.55);

  &:hover {
    color: var(--main-color);
    transform: scale(1.25) rotate(10deg);
  }

  @media (min-width: 575.98px) and (max-width: 991.98px) {
    font-size: 2.5rem;
  }

  @media (max-width: 575.97px) {
    font-size: 2.5rem;
  }
`;

const Img = styled.img`
  width: 100%;
  height: 60vh;
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

const Home = () => {
  return <>
    <Section id='home'>
      <div className="container">
        <div className="row gap-4">
          <div className="col-lg-12 mt-md-3 mt-xl-0">
            <Label>Hi, I'm Eder</Label>
            <Label>Front-end <br />  Web Developer</Label>
            <LabelTwo>and a Electromechanical engineer.</LabelTwo>
          </div>
          <div className="col-lg-12">
            <div className="row flex-column-reverse flex-xl-row">
              <div className="col-12 col-xl-6 d-flex align-items-end">
                <div className='d-flex flex-column gap-2'>
                  <div>
                    <LabelThree>I transform ideas into digital experiences, blending creativity and technology. Currently based in Mexico and</LabelThree>
                    <LabelFour> actively seeking new opportunities.</LabelFour>
                  </div>
                  <div className='d-flex flex-row gap-3'>
                    <a href='https://www.linkedin.com/in/edeercm/' target='_blank' rel='noopener noreferrer'>
                      <Icon><FaLinkedin /></Icon>
                    </a>
                    <a href='https://github.com/edeercm' target='_blank' rel='noopener noreferrer'>
                      <Icon><FaGithub /></Icon>
                    </a>
                    <a href='https://www.instagram.com/edeercm/' target='_blank' rel='noopener noreferrer'>
                      <Icon><FaInstagram /></Icon>
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-12 col-xl-6 d-flex justify-content-center justify-content-xl-end">
                <div>
                  <Img src={img} alt="Me ;)" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  </>
}

export default Home