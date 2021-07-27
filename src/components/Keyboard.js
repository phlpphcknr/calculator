import styled from "styled-components/macro";
import NumberButton from "./NumberButton";

export default function Keyboard ({lastEntry, setLastEntry, calculation, setCalculation}){

        const clearCalculation = () => {
            setLastEntry("0");
            setCalculation(" ");
        }

        return (
        <KeyboardContainer>
            <WideButton id="clear" onClick={clearCalculation}>ALL CLEAR</WideButton>
            <NumberButton id={"seven"}
                          value={"7"}
                          lastEntry={lastEntry}
                          setLastEntry={setLastEntry}
                          calculation={calculation}
                          setCalculation={setCalculation}/>
            <NumberButton id={"eight"}
                          value={"8"}
                          lastEntry={lastEntry}
                          setLastEntry={setLastEntry}
                          calculation={calculation}
                          setCalculation={setCalculation}/>
            <NumberButton id={"nine"}
                          value={"9"}
                          lastEntry={lastEntry}
                          setLastEntry={setLastEntry}
                          calculation={calculation}
                          setCalculation={setCalculation}/>
            <Button id="multiply" >*</Button>
            <NumberButton id={"four"}
                          value={"4"}
                          lastEntry={lastEntry}
                          setLastEntry={setLastEntry}
                          calculation={calculation}
                          setCalculation={setCalculation}/>
            <NumberButton id={"five"}
                          value={"5"}
                          lastEntry={lastEntry}
                          setLastEntry={setLastEntry}
                          calculation={calculation}
                          setCalculation={setCalculation}/>
            <NumberButton id={"six"}
                          value={"6"}
                          lastEntry={lastEntry}
                          setLastEntry={setLastEntry}
                          calculation={calculation}
                          setCalculation={setCalculation}/>
            <Button id="divide" >/</Button>
            <NumberButton id={"one"}
                          value={"1"}
                          lastEntry={lastEntry}
                          setLastEntry={setLastEntry}
                          calculation={calculation}
                          setCalculation={setCalculation}/>
            <NumberButton id={"two"}
                          value={"2"}
                          lastEntry={lastEntry}
                          setLastEntry={setLastEntry}
                          calculation={calculation}
                          setCalculation={setCalculation}/>
            <NumberButton id={"three"}
                          value={"3"}
                          lastEntry={lastEntry}
                          setLastEntry={setLastEntry}
                          calculation={calculation}
                          setCalculation={setCalculation}/>
            <Button id="subtract" >-</Button>
            <NumberButton id={"zero"}
                          value={"0"}
                          lastEntry={lastEntry}
                          setLastEntry={setLastEntry}
                          calculation={calculation}
                          setCalculation={setCalculation}/>
            <Button id="decimal" >.</Button>
            <Button id="equals" >=</Button>
            <Button id="add" >+</Button>
        </KeyboardContainer>
    )
}

const KeyboardContainer = styled.div`
    display: grid;
    grid-gap: var(--grid-gap);
    grid-template-columns: repeat(4, 1fr);
`

const WideButton = styled.button`
    width: var(--display-width);
    height: var(--button-side-length);
    grid-column: auto / span 4;
`

const Button = styled.button`
    width: var(--button-side-length);
    height: var(--button-side-length);
`