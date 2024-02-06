import React from 'react'
import styled from 'styled-components'
import { Card, Title, Subtitle, Content, Label, Btn } from './ProjectsGlobalStyles';
import projectBanner from '../../assets/images/projects/projecthree.png'

const Project = styled.div`
  width: 90%;
  height: 50vh;
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
  background-image: url(${projectBanner});
  /*background-image: url(/src/assets/images/projects/projecthree.png); */

  @media (min-width: 575.98px) and (max-width: 991.98px) {
    height: 34vh;
  }

  @media (max-width: 575.97px) {

  }
`;

const ProjectThree = () => {
  return <>
    <div className='d-flex justify-content-center'>
      <Card>
        <div className="container">
          <div className='row'>
            <div className="col-12 mb-5">
              <div className="row">
                <div className="col-6 d-flex justify-content-center">
                  <div>
                    <Title>Eve's Portfolio</Title>
                    <Subtitle>Code developed by me</Subtitle>
                  </div>
                </div>
                <div className="col-6">
                  <Content>
                    <Label>Developed with React + Vite, enriched with styled-components and Bootstrap.</Label>
                    <Btn
                      href="https://eacreativestudio.netlify.app/"
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

export default ProjectThree 