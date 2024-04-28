import React, { StrictMode } from "react";
import ReactDOM from "react-dom";
import GlobalStyle from "./styles/global";
import App from "./components/App";

ReactDOM.render(
  <StrictMode>
    <GlobalStyle />
    <App />
  </StrictMode>,
  document.getElementById("root"),
);
