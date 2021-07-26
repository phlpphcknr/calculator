import Display from "./Display";
import Keyboard from "./Keyboard";
import styled from "styled-components/macro";

export default function Calculator (){
    return (
        <CalcFrame>
            Calculator
            <Display/>
            <Keyboard/>
        </CalcFrame>
    )
}

const CalcFrame = styled.div`
    
`