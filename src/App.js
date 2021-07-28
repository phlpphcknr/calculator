import Calculator from "./components/Calculator";
import styled from "styled-components/macro";

export default function App() {
  return (
    <Container>
      <Calculator/>
    </Container>
  );
}

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
`