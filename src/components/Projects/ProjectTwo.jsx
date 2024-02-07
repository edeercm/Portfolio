import React from 'react'
import styled from 'styled-components'
import { Card, Title, Subtitle, Content, Label, Btn } from './ProjectsGlobalStyles';
import projectBanner from '../../assets/images/projects/projectwo.png'

const Project = styled.div`
  width: 90%;
  height: 50vh;
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
  background-image: url(${projectBanner});

  @media (min-width: 575.98px) and (max-width: 991.98px) {
    height: 39vh;
  }

  @media (max-width: 575.97px) {
    height: 24vh;
  }
`;

const ProjectTwo = () => {
  return <>
    <div className='d-flex justify-content-center'>
      <Card>
        <div className="container">
          <div className='row'>
            <div className="col-12 mb-5">
              <div className="row">
                <div className="col-12 col-md-6 col-xl-6 d-flex justify-content-center">
                  <div className='text-center text-md-start text-xl-start'>
                    <Title>SNKRS</Title>
                    <Subtitle>Created by me</Subtitle>
                  </div>
                </div>
                <div className="col-12 col-md-6 col-xl-6">
                  <Content>
                    <Label>A unique e-commerce experience. Engineered with Bootstrap and curated libraries for a stylish design.</Label>
                    <Btn
                      href="https://snkrslabs.netlify.app/"
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

export default ProjectTwo 