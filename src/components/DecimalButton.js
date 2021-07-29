import Button from "./ButtonStyle";

export default function DecimalButton ({lastEntry, setLastEntry, calculation, setCalculation, id, value}){

    const addInput = () => {

        if ((/=/).test(calculation) || calculation === "") {

            setLastEntry("0.");
            setCalculation("0.");

        } else if ((/[-*+/]/).test(lastEntry)) {

                setLastEntry("0.");
                setCalculation(calculation + "0.");

        } else if (!(/\./).test(lastEntry)) {

                setLastEntry(lastEntry + ".");
                setCalculation(calculation + ".");
        }
    }

    return (
        <Button id={id} value={value} onClick={addInput}>{value}</Button>
    )
}