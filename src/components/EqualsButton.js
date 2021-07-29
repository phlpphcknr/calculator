import Button from "./ButtonStyle";
import { evaluate } from 'mathjs';
export default function EqualsButton ({setLastEntry, calculation, setCalculation, id, value}){

    const getResult = () => {
        if (!calculation.match(/=/)) {
            const result = evaluate(calculation);
            setLastEntry(result);
            setCalculation(calculation + "=" + result);
        }
    }

    return (
        <Button id={id} value={value} onClick={getResult}>{value}</Button>
    )
}
