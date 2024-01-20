import React from 'react'
import styled from 'styled-components'
import desktop from '../../assets/images/projects/portfolio.jpg' 
import mobile from '../../assets/images/projects/portfoliomobile.png' 

const Section = styled.section`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
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

const Label = styled.h1`
  color: #fff;
  font-size: 3rem;
  font-family: 'VIC', sans-serif;

  @media (min-width: 575.98px) and (max-width: 991.98px) {
    text-align: center;
  }

  @media (max-width: 575.97px) {
    text-align: center;
  }
`;

const ImgDesktop = styled.img`
  width: 85%;
  height: auto;
  object-fit: contain;
  border-radius: 0.75rem;

  @media (min-width: 575.98px) and (max-width: 991.98px) {
    display: none;
  }

  @media (max-width: 575.97px) {
    display: none;
  }
`;

const Description = styled.span`
  width: 80%;
  color: #fff;
  font-size: 1.075rem;
  font-family: 'VIC', sans-serif;

  @media (min-width: 575.98px) and (max-width: 991.98px) {
    width: 90%;
    font-size: 1.5rem;
    text-align: center;
    margin-bottom: 2rem;
  }

  @media (max-width: 575.97px) {
    width: 100%;
    text-align: center;
    margin-bottom: 1rem;
    margin-top: -1.25rem;
  }
`;

const ImgMobile = styled.img`
  width: 60%;
  height: auto;
  object-fit: contain;

  @media (min-width: 575.98px) and (max-width: 991.98px) {
  }

  @media (max-width: 575.97px) {
  }
`;

const ProjectThree = () => {
  return <>
    <Section>
      <div className="container-xxl">
        <div className="row">
          <div className="col-lg-8 d-flex flex-column align-items-md-center align-items-lg-start align-items-xl-start justify-content-center gap-3">
            <Label>Eve's Portfolio</Label>
            <a href="https://eacreativestudio.netlify.app/" target='_blank' rel="noopener noreferrer">
              <ImgDesktop src={desktop} alt="Desktop version" />
            </a>
            <Description>Crafted with styled components in lieu of traditional CSS for meticulous interface design, this website was developed using React + Vite, reflecting a modern and efficient approach to web development.</Description>
          </div>
          <div className="col-lg-4 ">
            <a href="https://eacreativestudio.netlify.app/" target='_blank' rel="noopener noreferrer" className='d-flex justify-content-center'>
              <ImgMobile src={mobile} alt="Mobile version" />
            </a>
          </div>
        </div>
      </div>
    </Section>
  </>
}

export default ProjectThree