import React from 'react'
import { Card, Title, Subtitle, DescriptionCont, Desc, ViewBtn, ProjectImg } from '../ProjsCardStyles';

const ChlsCard = ({ title, subtitle, desc, link, image }) => {
  return <>
    <div className='d-flex justify-content-center'>
      <Card>
        <div className="container">
          <div className='row'>
            <div className="col-12 mb-xl-5">
              <div className="row">
                <div className="col-12 col-md-6 col-xl-6 d-flex justify-content-center">
                  <div className='text-center text-md-start text-xl-start'>
                    <Title>{title}</Title>
                    <Subtitle>{subtitle}</Subtitle>
                  </div>
                </div>
                <div className="col-12 col-md-6 col-xl-6">
                  <DescriptionCont>
                    <Desc>{desc}</Desc>
                    <ViewBtn
                      href={link}
                      target='_blank'
                      rel="noopener noreferrer"
                    >
                      <span>View project</span>
                    </ViewBtn>
                  </DescriptionCont>
                </div>
              </div>
            </div>
            <div className="col-12 d-flex justify-content-center mt-5">
              <ProjectImg src={image} alt={title} />
            </div>
          </div>
        </div>
      </Card>
    </div>
  </>
}

export default ChlsCard