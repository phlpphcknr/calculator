import Button from "./ButtonStyle";

export default function OperatorButton ({lastEntry, setLastEntry, calculation, setCalculation, id, value}){

    const addInput = (input) => {

        if ((/=/).test(calculation)) {
            setLastEntry(input);
            setCalculation(lastEntry + input);
        } else if (calculation.charAt(calculation.length-1) === "-"
            && (/[-*+/]/).test(calculation.charAt(calculation.length-2))) {

            if(input !== "-") {
                setLastEntry(input);
                setCalculation(calculation.substring(0,calculation.length-2) + input);
            }

        } else if ((/[-*+/]/).test(lastEntry)) {

            if(input === "-") {
                setLastEntry(input);
                setCalculation(calculation + input);
            } else {
                setLastEntry(input);
                setCalculation(calculation.substring(0,calculation.length-1) + input);
            }

        } else {
            setLastEntry(input);
            setCalculation(calculation + input);
        }
    }

    return (
        <Button id={id} value={value} onClick={e => addInput(e.target.value)}>{value}</Button>
    )
}
