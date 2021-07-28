import styled from "styled-components/macro";

export default function EqualsButton ({setLastEntry, calculation, setCalculation, id, value}){

    const getResult = () => {
        if (!calculation.match(/=/)) {
            var result = eval(calculation);
            setLastEntry(result);
            setCalculation(calculation + "=" + result);
        }
    }

    return (
        <Button id={id} value={value} onClick={getResult}>{value}</Button>
    )
}

const Button = styled.button`
    width: var(--button-side-length);
    height: var(--button-side-length);
`