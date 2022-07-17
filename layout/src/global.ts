import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: 'Titillium Web', sans-serif;
  }
  body, html {
    background: #FAFAFA;
    overflow-x: hidden;
  }

  button {
    outline: 0;
    border: 0;
    cursor: pointer;
  }
`;

export { GlobalStyle };