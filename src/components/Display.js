import styled from "styled-components/macro";

export default function Display ({lastEntry, calculation}){
    return (
        <Output id="screen" >
            <DisplayLine id="calculation">{calculation}</DisplayLine>
            <DisplayLine id="display">{lastEntry}</DisplayLine>
        </Output>
    )
}

const Output = styled.div`
    background-color: "black";
    border: white solid 2px;
    margin: 3px 0px;
    padding: 5px;
`

const DisplayLine = styled.div`
    min-height: 28px;
    color: white;
    text-align: right;
`