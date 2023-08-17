import React from "react";
import styled from "styled-components";

const P_Cards = ({ p_name, p_details, p_link }) => {
  return (
    <Cards>
      <CName>{p_name}</CName>
      <CDetails>{p_details}</CDetails>
      <a style={{ textAlign: "center" }} href={p_link} target="_blank" rel="noreferrer">
        <button>View Project</button>
      </a>
    </Cards>
  );
};

const Cards = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 88%;
  height: 14rem;
  background-color: var(--dgray);
  border-radius: 19px;
  gap: 2rem;
  @media (max-width: 481px) {
    padding: 4% 0 4%;
  }
`;

const CName = styled.p`
  font-size: 28px;
  font-weight: bold;
  text-align: center;
  background-color: #b3a70400;
`;

const CDetails = styled.p`
  text-align: center;
  background-color: #b3a70400;
`;

export default P_Cards;
