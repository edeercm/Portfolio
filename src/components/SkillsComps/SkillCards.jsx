import React from 'react'
import styled from 'styled-components'
import { FaHtml5, FaBootstrap, FaReact, FaCss3Alt } from "react-icons/fa";
import { SiAdobephotoshop } from "react-icons/si";

const Card = styled.div`
  height: 8.75rem;
  width: 8.75rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  background: linear-gradient(161.66deg,rgba(46,43,52,.53) 3.47%,rgba(46,43,52,.34) 87.55%);

  svg {
    font-size: 3.5rem;
    color: white;
  }

  span {
    font-size: 1rem;
    font-family: 'VIC', sans-serif;
  }

  @media (min-width: 575.98px) and (max-width: 991.98px) {
  }

  @media (max-width: 575.97px) {
  }
`;

const SkillCards = () => {
  return <>
    <div className='d-flex flex-column gap-4'>
      <div className='d-flex flex-row gap-4'>
        <Card>
          <FaHtml5 />
          <span>HTML5</span>
        </Card>
        <Card>
          <FaBootstrap />
          <span>Bootstrap</span>
        </Card>
      </div>
      {/* <Card>
        <SiAdobephotoshop />
      </Card> */}
      <div className='d-flex flex-row gap-4'>
        <Card>
          <FaReact />
          <span>React</span>
        </Card>
        <Card>
          <FaCss3Alt />
          <span>CSS3</span>
        </Card>
      </div>
    </div>
  </>
}

export default SkillCards