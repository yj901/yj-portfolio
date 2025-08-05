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
    --nunito : "Nunito Sans", "Pretendard", sans-serif;
    --orbitron: "Orbitron", "Pretendard", sans-serif;
    --light: #fff;
    --black: #000;
    --projectbg: #D8E3F2;
    --teambg: #2C3A4B;
    --workbg: #F6F0E0;
    --skillsbg: #D9DCED;
    --skillsbg2: #e6e9f9;
    --processbg: #E2ECE9;
    --contactbg: #1B232D;
    --gray1: #111;
    --gray2: #222;
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
    --light2: #F3F4F6;

  }


  html {
    font-size: 62.5%;
  }

  body {
    font-family: "Pretendard", sans-serif;
    font-size: 1.6rem;
    color: var(--gray1);
  input, textarea {
    font-family: "Pretendard", sans-serif;
  }
  }

  html, body {
  height: auto;
}


  .inner {
    width: 1400px;
    margin: 0 auto;
    @media screen and (max-width: 1600px) {
      width: 100%;
      padding-left: 5.3%;
      padding-right: 5.3%;
    }
    @media screen and (max-width: 1400px) {
      padding-left: 3%;
      padding-right: 3%;
    }
  }

  .innerlg {
    margin: 0 5.3%;
    @media screen and (max-width: 1400px) {
      margin: 0 3%;
    }
  }

`;

export default GlobalStyles;
