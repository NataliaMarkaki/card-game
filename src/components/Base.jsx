import React from "react";
import styled from "styled-components";

const StyledBase = styled.div`
  height: 250px;
  width: 270px;
  border: 3px dashed black;
  border-radius: 2px;
  background-color: transparent;
  margin: 0 20px;
`;

const BaseWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const Label = styled.div`
  text-align: center;
`;

const Base = ({ title }) => {
  return (
    <BaseWrapper>
      <StyledBase />
      <Label> {title} </Label>
    </BaseWrapper>
  );
};

export default Base;
