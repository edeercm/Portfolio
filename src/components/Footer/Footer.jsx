import React from 'react'
import styled from 'styled-components';
import FooterLabels from './FooterLabels';
import FooterIcons from './FooterIcons';

const FooterStyle = styled.footer`
  display: flex;
  align-items: center;
  height: 35svh;
  background-color: var(--second-color);
  
  @media (min-width: 575.98px) and (max-width: 991.98px) {
  }

  @media (max-width: 575.97px) {
  }
`;

const Ubi = styled.span`
  font-size: 1.125rem;
  color: var(--third-color);
`;

const Line = styled.div`
  margin-top: 1.25rem;
  height: 0.025rem;
  background-color: var(--third-color);
`;

const Copyright = styled.span`
  font-size: 1.125rem;
  color: var(--third-color);
`;

const Footer = () => {
  return <>
    <FooterStyle>
      <div className='container'>
        <div className="row">
          <div className="col-12">
            <div className="row">
              <div className="col-6">
                <FooterLabels />
              </div>
              <div className="col-6 text-end">
                <Ubi>Ver, MX</Ubi>
              </div>
            </div>
          </div>
          <Line></Line>
          <div className="col-12 mt-5">
            <div className="row">
              <div className="col-6">
                <Copyright>&#169; Eder | 2024</Copyright>
              </div>
              <div className="col-6 d-flex justify-content-end">
                <FooterIcons />
              </div>
            </div>
          </div>
        </div>
      </div>
    </FooterStyle>
  </>
}

export default Footer