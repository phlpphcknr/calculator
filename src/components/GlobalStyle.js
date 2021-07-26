import { createGlobalStyle } from 'styled-components/macro';

const GlobalStyle = createGlobalStyle`
  
* {
  font-size: 24px;
  font-family: "Arial";
  border: 0;
  margin: 0;
  padding: 0;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box; 
}
  
html, body, #root {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    height: 100%;
    font-family: "Arial",serif;
    background-color: #000888;
    
}
`;

export default GlobalStyle;
