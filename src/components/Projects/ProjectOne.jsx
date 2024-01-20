import React from 'react'
import styled from 'styled-components'
import desktop from '../../assets/images/projects/encrypter.jpg'
import mobile from '../../assets/images/projects/mobile.png'


const Section = styled.section`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #fff;

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
  color: #777;
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
  color: #777;
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

const ProjectOne = () => {
  return <>
    <Section>
      <div className="container-xxl">
        <div className="row">
          <div className="col-lg-8  d-flex flex-column align-items-md-center align-items-lg-start align-items-xl-start justify-content-center gap-3">
            <Label>Text Encrypter</Label>
            <a href="https://edeercm.github.io/EncriptadorDeTextoAlura/" target='_blank' rel="noopener noreferrer">
              <ImgDesktop src={desktop} alt="Desktop version" />
            </a>
            <Description>Developed using HTML and CSS for the interface design, while JavaScript was employed for the encryption logic implementation.</Description>
          </div>
          <div className="col-lg-4 ">
            <a href="https://edeercm.github.io/EncriptadorDeTextoAlura/" target='_blank' rel="noopener noreferrer" className='d-flex justify-content-center'>
              <ImgMobile src={mobile} alt="Mobile version" />
            </a>
          </div>
        </div>
      </div>
    </Section>
  </>
}

export default ProjectOne