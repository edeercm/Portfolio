import React from 'react'
import styled from 'styled-components'
import chlsData from '../components/Challenges/ChlsData'
import ChlsCard from '../components/Challenges/ChlsCard';

const Section = styled.section`
  width: 100%;
  height: auto;
  padding: 7.5rem 0;
  background-color: var(--third-color);
`;

const Title = styled.h4`
  margin-top: 2.5rem;
  font-size: 5rem;
  font-weight: bold;
  color: var(--main-color);
`;

const Challenges = () => {
  return <>
    <Section>
      <div className='container text-center'>
        <Title>Frontend Mentor</Title>
      </div>
      <div>
        {chlsData.map((chls) => (
          <ChlsCard
            key={chls.id}
            title={chls.title}
            subtitle={chls.subtitle}
            desc={chls.desc}
            link={chls.link}
            image={chls.image}
          />
        ))}
      </div>
    </Section>
  </>
}

export default Challenges