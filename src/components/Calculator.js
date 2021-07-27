import Display from "./Display";
import Keyboard from "./Keyboard";
import styled from "styled-components/macro";
import {useState} from "react";

export default function Calculator (){

    const [lastEntry, setLastEntry] = useState("0");
    const [calculation, setCalculation] = useState("");

    return (
        <CalcFrame>
            <Display
                lastEntry={lastEntry}
                calculation={calculation}/>
            <Keyboard
                lastEntry={lastEntry}
                setLastEntry={setLastEntry}
                calculation={calculation}
                setCalculation={setCalculation}/>
        </CalcFrame>
    )
}

const CalcFrame = styled.div`
    padding: 3px;
`