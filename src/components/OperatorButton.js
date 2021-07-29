import Button from "./ButtonStyle";

export default function OperatorButton ({lastEntry, setLastEntry, calculation, setCalculation, id, value}){

    const addInput = (input) => {

        switch (true) {
            case /=/.test(calculation):
                setCalculation(lastEntry + input);
                setLastEntry(input);
                break;
            case /[-*+/]/.test(calculation.charAt(calculation.length - 2)) &&
            calculation.charAt(calculation.length - 1) === "-":
                if (input !== "-") {
                    setCalculation(calculation.substring(0, calculation.length - 2) + input);
                    setLastEntry(input);
                }
                break;
            case /[-*+/]/.test(calculation.charAt(calculation.length - 1)):
                if (input !== "-") {
                    setCalculation(calculation.substring(0, calculation.length - 1) + input);
                } else {
                    setCalculation(calculation + input);
                }
                setLastEntry(input);
                break;
            default:
                setLastEntry(input);
                setCalculation(calculation + input);
        }
    }

        return (
            <Button id={id} value={value} onClick={e => addInput(e.target.value)}>{value}</Button>
        )
}
