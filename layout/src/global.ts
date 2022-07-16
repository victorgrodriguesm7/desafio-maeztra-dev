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
    overflow: hidden;
  }

  button {
    outline: 0;
    border: 0;
    cursor: pointer;
  }
  
  @media(max-width: 1080px){
    html {
        font-size: 93.75%;
    }
  }
  @media(max-width: 1024px){
    html {
        font-size: 87.5%;
    }
  }
  @media(max-width: 720px){
      html {
          font-size: 80%;
      }
  }
`;

export { GlobalStyle };