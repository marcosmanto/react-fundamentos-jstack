import React, { StrictMode } from "react";
import ReactDOM from "react-dom";
import GlobalStyle from "./styles/global";
import App from "./components/App";
import { ThemeProvider } from "./providers/ThemeContext";

ReactDOM.render(
  <ThemeProvider>
    <StrictMode>
      <GlobalStyle />
      <App />
    </StrictMode>
  </ThemeProvider>,

  document.getElementById("root"),
);
