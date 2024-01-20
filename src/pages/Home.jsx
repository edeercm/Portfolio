import React from 'react';
import styled from 'styled-components'
import Me from '../assets/images/home/me.jpg'
import Button from '../components/HomeComps/Button';
import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";

const Section = styled.section`
  width: 100%;
  height: 100vh;
  background-color: #0C0F0A;

  @media (min-width: 575.98px) and (max-width: 991.98px) {
    height: auto;
    padding: 5rem 0;
  }

  @media (max-width: 575.97px) {
    height: auto;
    padding: 2.5rem 0;

  }
`;

const Content = styled.div`
  height: 40vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 0 5rem;

  h1, span, svg {
    color: white;
  }

  @media (min-width: 575.98px) and (max-width: 991.98px) {
    margin-bottom: 2rem;
    height: 30vh;
    align-items: center;
    text-align: center;
  }

  @media (max-width: 575.97px) {
    margin-bottom: 1.5rem;
    height: auto;
    padding: 0;
    align-items: center;
    text-align: center;

  }
`;

const Img = styled.img`
  width: 100%;
  height: 100vh;
  object-fit: cover;
  object-position: bottom;

  @media (min-width: 575.98px) and (max-width: 991.98px) {
    height: 75vh;
    object-fit: contain;
  }

  @media (max-width: 575.97px) {
    height: 50vh;
    
  }
`;

const Label = styled.h1`
  font-weight: 400;
  font-size: 2.5rem;
  font-family: 'VIC', sans-serif;
                                                                                                        
  @media (min-width: 575.98px) and (max-width: 991.98px) {
  }

  @media (max-width: 575.97px) {
    font-size: 1.75rem;
  }
`;

const Name = styled.h1`
  font-size: 4rem;
  font-weight: bold;
  font-family: 'Bahttra_Signature', sans-serif;
                                                                   
  @media (min-width: 575.98px) and (max-width: 991.98px) {
  }

  @media (max-width: 575.97px) {
    font-size: 2rem;
  }
`;

const Skill = styled.h1`
  margin-bottom: 0.5rem;
  text-transform: uppercase;
  font-size: 2.25rem;
  font-family: 'REM', sans-serif;
                                                                                                        
  @media (min-width: 575.98px) and (max-width: 991.98px) {
  }

  @media (max-width: 575.97px) {
    margin-top: 0.25rem;
    font-size: 2rem;
  }
`;

const Info = styled.span`
  font-family: 'VIC', sans-serif;
                                                                                                        
  @media (min-width: 575.98px) and (max-width: 991.98px) {
  }

  @media (max-width: 575.97px) {
  }
`;

const Home = () => {
  return <>
    <Section id='home'>
      <div className='container-fluid w-100 h-100 pe-lg-0 pe-xl-0'>
        <Button />
        <div className="row">
          <div className="col-md-12 col-lg-6 col-xl-6 d-flex align-items-center">
            <Content>
              <div>
                <div className='d-flex flex-row align-items-center justify-content-center justify-content-md-center justify-content-lg-start justify-content-xl-start gap-2 gap-md-3 gap-lg-3 gap-xl-3'>
                  <Label>Hello, I'm</Label>
                  <Name>Eder Cadena.</Name>
                </div>
                <Skill>Front-End Web Developer</Skill>
                <Info>
                  I am passionate about transforming ideas into engaging web experiences. With a high level of proficiency and a keen eye for detail. I have consistently showcased my dedication to staying up.to.date with the latest industry standards and regulations.
                </Info>
              </div>
              <div className='d-flex flex-row fs-1 fs-lg-4 fs-xl-4 gap-1'>
                <a href='https://www.instagram.com/edeercm/' target='_blank' rel='noopener noreferrer'>
                  <FaInstagram />
                </a>
                <a href='https://www.linkedin.com/in/edeercm/' target='_blank' rel='noopener noreferrer'>
                  <FaLinkedin />
                </a>
                <a href='https://github.com/edeercm' target='_blank' rel='noopener noreferrer'>
                  <FaGithub />
                </a>
              </div>
            </Content>
          </div>
          <div className="col-md-12 col-lg-6 col-xl-6">
            <Img src={Me} alt="" />
          </div>
        </div>
      </div>
    </Section >
  </>
}

export default Home