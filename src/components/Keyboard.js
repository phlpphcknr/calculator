import styled from "styled-components/macro";
import NumberButton from "./NumberButton";
import OperatorButton from "./OperatorButton";
import DecimalButton from "./DecimalButton";
import EqualsButton from "./EqualsButton";

export default function Keyboard ({lastEntry, setLastEntry, calculation, setCalculation}){

        const clearCalculation = () => {
            setLastEntry("0");
            setCalculation("");
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
            <OperatorButton id="multiply"
                            value={"*"}
                            lastEntry={lastEntry}
                            setLastEntry={setLastEntry}
                            calculation={calculation}
                            setCalculation={setCalculation}/>
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
            <OperatorButton id="divide"
                            value={"/"}
                            lastEntry={lastEntry}
                            setLastEntry={setLastEntry}
                            calculation={calculation}
                            setCalculation={setCalculation}/>
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
            <OperatorButton id="subtract"
                            value={"-"}
                            lastEntry={lastEntry}
                            setLastEntry={setLastEntry}
                            calculation={calculation}
                            setCalculation={setCalculation}/>
            <NumberButton id={"zero"}
                          value={"0"}
                          lastEntry={lastEntry}
                          setLastEntry={setLastEntry}
                          calculation={calculation}
                          setCalculation={setCalculation}/>
            <DecimalButton id="decimal"
                           value={"."}
                           lastEntry={lastEntry}
                           setLastEntry={setLastEntry}
                           calculation={calculation}
                           setCalculation={setCalculation}/>
            <EqualsButton id="equals"
                          value={"="}
                          setLastEntry={setLastEntry}
                          calculation={calculation}
                          setCalculation={setCalculation}/>
            <OperatorButton id="add"
                            value={"+"}
                            lastEntry={lastEntry}
                            setLastEntry={setLastEntry}
                            calculation={calculation}
                            setCalculation={setCalculation}/>
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
