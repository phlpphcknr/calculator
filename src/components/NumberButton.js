import Button from "./ButtonStyle";

export default function NumberButton ({lastEntry, setLastEntry, calculation, setCalculation, id, value}){

    const addInput = (input) => {

        if (calculation === "0" || calculation.match(/=/)) {

            setLastEntry(input);
            setCalculation(input);

        } else {

            setCalculation(calculation + input);

            if (lastEntry === "0" || lastEntry.match(/[+\-/*]/)) {
                setLastEntry(input);
            } else {
                setLastEntry(lastEntry + input);
            }
        }
    }

    return (
        <Button id={id} value={value} onClick={e => addInput(e.target.value)}>{value}</Button>
    )
}
