import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

export const GlobalStyle = createGlobalStyle`
  ${reset}

  * {
    box-sizing: border-box;
    word-break: keep-all;
  }

  html {
    background-color: black;
  }

  a {
    text-decoration: none;
    cursor: pointer;
  }

  input, button {
    outline: 0;
    background-color: transparent;
  }

  button {
    cursor: pointer;
    border: 0;
  }
`;