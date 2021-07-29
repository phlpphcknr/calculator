import Button from "./ButtonStyle";

export default function NumberButton ({lastEntry, setLastEntry, calculation, setCalculation, id, value}){

    const addInput = (input) => {

        if (calculation === "0" || (/=/).test(calculation)) {
            setLastEntry(input);
            setCalculation(input);

        } else {

            switch(lastEntry) {
                case "0":
                    setLastEntry(input);
                    setCalculation(calculation.substring(0,calculation.length-1) + input);
                    break;
                case "+":
                case "-":
                case "/":
                case "*":
                    setLastEntry(input);
                    setCalculation(calculation + input);
                    break;
                default:
                    setLastEntry(lastEntry + input);
                    setCalculation(calculation + input);
            }
        }
    }

    return (
        <Button id={id} value={value} onClick={e => addInput(e.target.value)}>{value}</Button>
    )
}
