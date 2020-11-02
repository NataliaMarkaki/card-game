import React from "react";
import styled from "styled-components";

const StyledCard = styled.div`
  height: 200px;
  width: 220px;
  border: 1px solid black;
  border-radius: 2px;
  background-color: white;
`;

const Card = ({ text }) => {
  return (
    <StyledCard>
      <p>{text}</p>
    </StyledCard>
  );
};

export default Card;
