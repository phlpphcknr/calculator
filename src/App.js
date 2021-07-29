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
  display: flex;
  justify-content: center;
  align-items: center;
`