import styled, { keyframes } from "styled-components";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  width: 100vw;
  height: 100vh;
  background-color: ${(props) => props.theme.backgroundColor};
`;

const Title = styled.h1`
  color: ${(props) => props.theme.textColor};
`;

const App = () => {
  return (
    <>
      <Wrapper>
        <Title>Hello</Title>
      </Wrapper>
    </>
  );
};

export default App;
