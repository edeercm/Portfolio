import React from 'react'
import styled from 'styled-components'
import { Card, Title, Subtitle, Content, Label, Btn } from './ProjectsGlobalStyles';
import projectBanner from '../../assets/images/projects/projectfour.png'

const Project = styled.div`
  width: 100%;
  height: 45vh;
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
  background-image: url(${projectBanner});

  @media (min-width: 575.98px) and (max-width: 991.98px) {
    width: 95%;
    height: 34vh;
  }

  @media (max-width: 575.97px) {
    height: 20vh;

  }
`;

const ProjectFour = () => {
  return <>
    <div className='d-flex justify-content-center'>
      <Card>
        <div className="container">
          <div className='row'>
            <div className="col-12 mb-xl-5">
              <div className="row">
                <div className="col-12 col-md-6 col-xl-6 d-flex justify-content-center">
                  <div className='text-center text-md-start text-xl-start'>
                    <Title>Space tourism</Title>
                    <Subtitle>Frontend Mentor challenge</Subtitle>
                  </div>
                </div>
                <div className="col-12 col-md-6 col-xl-6">
                  <Content>
                    <Label>A responsive multi-page website built with React, Bootstrap, and styled-components.</Label>
                    <Btn
                      href="https://spacetourismproject.netlify.app/"
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

export default ProjectFour