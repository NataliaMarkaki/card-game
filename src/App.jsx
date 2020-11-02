import React from "react";
import styled from "styled-components";
import Base from "./components/Base";
import Card from "./components/Card";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;
  align-items: center;
  margin: 35% 0;
  flex-grow: 1;
`;

const StyledApp = styled.div`
  background-color: #85dcba;
  margin: 0;
  display: flex;
`;

function App() {
  return (
    <StyledApp>
      <Wrapper>
        <Base title='True' />
        <Card text='One' />
        <Base title='False' />
      </Wrapper>
    </StyledApp>
  );
}

export default App;
