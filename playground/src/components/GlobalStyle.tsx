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

  body {
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, PingFang SC,
    Hiragino Sans GB, Microsoft YaHei, Helvetica Neue, Helvetica, Arial,
    sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol;
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
