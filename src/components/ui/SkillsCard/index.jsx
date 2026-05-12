import styled from 'styled-components'
import skillsData from '../../../data/skills';

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

const index = () => {
    return (
        <Container>
            {skillsData.map((skill) => {
                const IconComponent = skill.icon;
                return (
                    <Card key={skill.id}>
                        <Icon><IconComponent /></Icon>
                        <Label>{skill.name}</Label>
                    </Card>
                );
            })}
        </Container>
    );
}

export default index