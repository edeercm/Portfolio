import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { MdArrowOutward } from "react-icons/md";

const Btn = styled.button`
  margin-top: 7.5rem;
  width: 17.5rem;
  height: 3.5rem;
  font-size: 1.425rem;
  font-weight: bold;
  text-transform: uppercase;
  color: var(--second-color);
  background-color: transparent;
  border: 0.125rem solid var(--second-color);
  transition: background-color 0.35s ease-in-out;

  svg {
    margin-left: 0.25rem;
    width: auto;
    font-size: 1.75rem;
  }

  &:hover {
    border: none;
    background-color: var(--second-color);

    svg, a {
      color: var(--third-color);
    }
  }
`;

const ChlsBtn = () => {
  return <>
    <Btn>
      <Link to={'/challenges'}>Challenges</Link>
      <MdArrowOutward />
    </Btn>
  </>
}

export default ChlsBtn