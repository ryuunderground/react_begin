import styled, { keyframes } from "styled-components";

const Father = styled.div`
  display: flex;
`;

const rotationAnimation = keyframes`
  0% {
    transform: rotate(0deg);
    border-radius: 0%;
  }
  50%{
    border-radius: 50%;
}
100%{
  transform: rotate(360deg);
  border-radius: 00%;
}
`;

const Emoiji = styled.span`
  font-size: 36px;
`;

const Box = styled.div`
  background-color: ${(props) => props.bgColor};
  width: 100px;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  ${Emoiji} {
    &:hover {
      font-size: 50px;
    }
    &:active {
      opacity: 0.5;
    }
  }
`;

const Circle = styled(Box)`
  border-radius: 50%;
`;

const BTN = styled.button`
  color: white;
  background-color: tomato;
  border: 0;
  border-radius: 15px;
`;

const Input = styled.input.attrs({ required: true })`
  background-color: tomato;
  animation: ${rotationAnimation} 1s linear infinite;
`;

const App = () => {
  return (
    <>
      <Input />
      <Input />
      <Input />
      <Input />
      <Input />
      <div>
        <BTN>Log in</BTN>
        <BTN as="a" href="/">
          Log in
        </BTN>
      </div>
      <Father>
        <Box bgColor="teal">
          <Emoiji>😀</Emoiji>
        </Box>
        <Circle bgColor="tomato" />
        <Emoiji>😀</Emoiji>
      </Father>
    </>
  );
};

export default App;
