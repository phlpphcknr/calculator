import styled from "styled-components/macro";

export default function NumberButton ({lastEntry, setLastEntry, calculation, setCalculation, id, value}){

    const addInput = (input) => {

        if (calculation === "0") {
            setLastEntry(input);
            setCalculation(input);
        } else {

            setCalculation(calculation + input);
            if (lastEntry != "0" || isNaN(lastEntry)) {
                setLastEntry(lastEntry + input);
            } else {
                setLastEntry(input);
            }
        }
    }

    return (
        <Button id={id} value={value} onClick={e => addInput(e.target.value)}>{value}</Button>
    )
}

const Button = styled.button`
    width: var(--button-side-length);
    height: var(--button-side-length);
`