import React from 'react'
import styled from 'styled-components'
import { Card, Title, Subtitle, Content, Label, Btn } from './ProjectsGlobalStyles';
import projectBanner from '../../assets/images/projects/projectone.png'

const Project = styled.div`
  width: 100%;
  height: 45vh;
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
  background-image: url(${projectBanner});
  /* background-image: url(/src/assets/images/projects/projectone.png); */

  @media (min-width: 575.98px) and (max-width: 991.98px) {
    width: 95%;
    height: 34vh;
  }

  @media (max-width: 575.97px) {

  }
`;

const ProjectOne = () => {
  return <>
    <div className='d-flex justify-content-center'>
      <Card>
        <div className="container">
          <div className='row'>
            <div className="col-12 mb-xl-5">
              <div className="row">
                <div className="col-6 d-flex justify-content-center">
                  <div>
                    <Title>Encrypter</Title>
                    <Subtitle>Alura challenge</Subtitle>
                  </div>
                </div>
                <div className="col-6 ">
                  <Content>
                    <Label>A personal project developed by me for the Alura challenge. Built with HTML, CSS, and JavaScript.</Label>
                    <Btn
                      href="https://edeercm.github.io/EncriptadorDeTextoAlura/"
                      target='_blank'
                      rel="noopener noreferrer"
                    >
                      <span>View project</span>
                    </Btn>
                  </Content>
                </div>
              </div>
            </div>
            <div className="col-12 d-flex justify-content-center mt-5">
              <Project></Project>
            </div>
          </div>
        </div>
      </Card>
    </div>
  </>
}

export default ProjectOne