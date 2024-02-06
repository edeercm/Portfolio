import React from 'react'
import styled from 'styled-components'
import { SiAdobephotoshop } from "react-icons/si";
import { FaHtml5, FaBootstrap, FaReact, FaCss3Alt } from "react-icons/fa";

const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 10.5rem;
  height: 10.5rem;
  gap: 0.5rem;
  background: linear-gradient(161.66deg,rgba(46,43,52,.53) 3.47%,rgba(46,43,52,.34) 87.55%);

  @media (min-width: 575.98px) and (max-width: 991.98px) {
  }

  @media (max-width: 575.97px) {
  }
`;

const Label = styled.span`
  font-size: 1rem;
  color: var(--third-color);
  
  @media (min-width: 575.98px) and (max-width: 991.98px) {
  }

  @media (max-width: 575.97px) {
  }
`;

const Icon = styled.div`
  font-size: 3.75rem;
  color: var(--third-color);

  @media (min-width: 575.98px) and (max-width: 991.98px) {
  }

  @media (max-width: 575.97px) {
  }
`;

const SkillCards = () => {


  return <>
    <div className='d-flex flex-wrap flex-md-wrap flex-xl-row justify-content-center gap-5'>
      <Card>
        <Icon><FaHtml5 /></Icon>
        <Label>HTML5</Label>
      </Card>
      <Card>
        <Icon><FaBootstrap /></Icon>
        <Label>Bootstrap</Label>
      </Card>
      <Card>
        <Icon><SiAdobephotoshop /></Icon>
        <Label>Photoshop</Label>
      </Card>
      <Card>
        <Icon><FaReact /></Icon>
        <Label>React</Label>
      </Card>
      <Card>
        <Icon><FaCss3Alt /></Icon>
        <Label>CSS3</Label>
      </Card>
    </div>
  </>
}

export default SkillCards