import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  }

  h1,
  h2 {
    span {
      display: inline-block;
      width: 100px;
      text-align: center;
      // background-color: red;
    }
  }

  body > div > h1 {
    Button {
      padding: 5px 5px;
      vertical-align: text-bottom;
    }
  }
`;
