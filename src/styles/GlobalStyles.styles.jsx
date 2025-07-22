import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyles = createGlobalStyle`
  ${reset}

  * {
    box-sizing: border-box;
  }

  ul, li {
    list-style: none;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  button {
    font-family: "Pretendard", sans-serif;
  }

  :root {
    --nunito : "Nunito Sans", sans-serif;
    --orbitron: "Orbitron", sans-serif;
    --light: #fff;
    --black: #000;
    --projectbg: #D8E3F2;
    --teambg: #2C3A4B;
    --companybg: #F6F0E0;
    --skillsbg: #D9DCED;
    --processbg: #E2ECE9;
    --contactbg: #1B232D;
    --gray1: #111;
    --gray5: #555;
    --gray9: #999;
    --grayd1: #d1d1d1;
    --gray41: #414141;
    --gray19: #191D31;
    --gray2b: #2B2C35;
    --gray98: #9898AA;
    --gray8b: #8b8b8b;
    --graybb: #BBBAD0;
    --skyarr: #AEEBFF;

  }


  html {
    font-size: 62.5%;
  }

  body {
    font-family: "Pretendard", sans-serif;
    font-size: 1.6rem;
    color: var(--gray1);
  input {
    font-family: "Pretendard", sans-serif;
  }
  }


  .inner {
    width: 1400px;
    margin: 0 auto;
  }

  .innerlg {
    margin: 0 5.3%;
  }

`;

export default GlobalStyles;
