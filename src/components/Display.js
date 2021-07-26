import styled from "styled-components/macro";

export default function Display (){
    return (
        <Output>
            <p id="calculation"></p>
            <p id="last entry"></p>
        </Output>
    )
}

const Output = styled.div`
    background-color: "black";
`