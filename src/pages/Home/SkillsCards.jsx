import React from 'react'
import styled from 'styled-components'
import { SiAdobephotoshop } from "react-icons/si";
// import { IoLogoJavascript } from "react-icons/io5";
import { FaHtml5, FaBootstrap, FaReact, FaCss3Alt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";

const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 2.5rem;

  @media (min-width: 575.98px) and (max-width: 991.98px) {
    flex-wrap: wrap;
  }

  @media (max-width: 575.97px) {
    margin-top: 3.5rem;
    flex-direction: column;
  }
`;

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
    width: 15rem;
  height: 15rem;
  }
`;

const Label = styled.span`
  font-size: 1rem;
  color: var(--third-color);
  
  @media (min-width: 575.98px) and (max-width: 991.98px) {
  }

  @media (max-width: 575.97px) {
    font-size: 1.25rem;
  }
`;

const Icon = styled.div`
  font-size: 3.75rem;
  color: var(--third-color);

  @media (min-width: 575.98px) and (max-width: 991.98px) {
  }

  @media (max-width: 575.97px) {
    font-size: 5rem;
  }
`;

const SkillCards = () => {
  return <>
    <Container>
      <Card>
        <Icon><FaHtml5 /></Icon>
        <Label>HTML5</Label>
      </Card>
      <Card>
        <Icon><FaCss3Alt /></Icon>
        <Label>CSS3</Label>
      </Card>
      <Card>
        <Icon><IoLogoJavascript /></Icon>
        <Label>JavaScript</Label>
      </Card>
      <Card>
        <Icon><FaBootstrap /></Icon>
        <Label>Bootstrap</Label>
      </Card>
      <Card>
        <Icon><FaReact /></Icon>
        <Label>React</Label>
      </Card>
      <Card>
        <Icon><SiAdobephotoshop /></Icon>
        <Label>Photoshop</Label>
      </Card>
    </Container>
  </>
}

export default SkillCards