import styled from "styled-components/macro";

export default function Display ({lastEntry, calculation}){

    return (
        <Output id="screen" >
            <DisplayLine id="calculation">
                <p>{calculation}</p>
            </DisplayLine>
            <DisplayLine id="display">
                <p>{lastEntry}</p>
            </DisplayLine>
        </Output>
    )
}

const Output = styled.div`
    background-color: "black";
    width: var(--display-width);
    border: white solid 2px;
    margin: 3px 0px;
    padding: 5px;
`

const DisplayLine = styled.div`
    display: block;
    min-height: 28px;
    color: white;
    text-align: right;
    word-break: break-all; 
`