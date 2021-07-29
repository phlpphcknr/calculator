import { createGlobalStyle } from 'styled-components/macro';

const GlobalStyle = createGlobalStyle`
  
* {
  font-size: 24px;
  font-family: "Arial",serif;
  border: 0;
  margin: 0;
  padding: 0;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box; 
}
  
html, body, #root {
    height: 100%;
    background-color: #000888;
    
    @media (orientation: landscape) {
    --button-side-length: 12vh;
    --display-width: calc(48vh + 3*var(--grid-gap));
    }
   @media (orientation: portrait) {
    --button-side-length: 15vw;
    --display-width: calc(60vw + 3*var(--grid-gap));
    }
    --grid-gap: 3px;
}

Button {
    width: var(--button-side-length);
    height: var(--button-side-length);
}
`;

export default GlobalStyle;
