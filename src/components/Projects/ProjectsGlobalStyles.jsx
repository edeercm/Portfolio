import styled from 'styled-components'

export const Card = styled.div`
  margin-top: 5rem;
  width: 70%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--alternative-color);

  @media (min-width: 575.98px) and (max-width: 991.98px) {
    width: 90%;
    height: auto;
    padding: 5rem 0;
  }

  @media (max-width: 575.97px) {
    width: 90%;
    height: auto;
    padding: 5rem 0;
  }
`;

export const Title = styled.h2`
  font-size: 3rem;
  font-weight: bold;
  color: var(--third-color);
  
  @media (min-width: 575.98px) and (max-width: 991.98px) {
  }

  @media (max-width: 575.97px) {

  }
`;

export const Subtitle = styled.h3`
  font-size: 1.75rem;
  color: var(--third-color);
 
  @media (min-width: 575.98px) and (max-width: 991.98px) {
  }

  @media (max-width: 575.97px) {
  }
`;

export const Content = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  gap: 1.75rem;

 
  @media (min-width: 575.98px) and (max-width: 991.98px) {
    width: 90%;
  }

  @media (max-width: 575.97px) {
    width: 100%;
    margin-top: 1rem;
    text-align: center;
    align-items: center;
  }
`;

export const Label = styled.span`
  color: var(--third-color);

  @media (min-width: 575.98px) and (max-width: 991.98px) {
  }

  @media (max-width: 575.97px) {

  }
`;

export const Btn = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.25rem;
  width: 10rem;
  height: 2.25rem;
  text-decoration: none;
  color: var(--third-color);
  background-color: transparent;
  border: 0.05rem solid var(--third-color);
  transition: background-color 0.5s;

  &:hover {
    background-color: var(--third-color);

    span {
      font-weight: bold;
      color: var(--second-color);
    }
  }

  @media (min-width: 575.98px) and (max-width: 991.98px) {
  }

  @media (max-width: 575.97px) {
  }
`;












