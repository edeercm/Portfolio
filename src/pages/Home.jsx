import React from 'react'
import styled from 'styled-components'

const Seccone = styled.section`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  background-image: url(/src/assets/images/home/bg.jpg);
  background-size: cover;
  background-position: center;

  @media (min-width: 575.98px) and (max-width: 991.98px) {
  }

  @media (max-width: 575.97px) {
  }
`;

const Home = () => {
  return <>
    <Seccone>
      <div className="container-xxl">
        <div className="row">
          <div className="col-lg-12 col-xl-12"></div>

        </div>
      </div>
    </Seccone>
  </>
}

export default Home