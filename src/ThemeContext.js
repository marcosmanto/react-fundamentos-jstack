import React, { useState, createContext } from "react";
import * as themeStyles from "./theme.css";

export const ThemeContext = createContext();

export function ThemeProvider(props) {
  const [theme, setTheme] = useState("light");

  function handleToggleTheme() {
    setTheme((prevState) => {
      document.body.className =
        prevState === "dark" ? themeStyles.light : themeStyles.dark;
      return prevState === "dark" ? "light" : "dark";
    });
  }

  return (
    <ThemeContext.Provider value={{ theme, onToggleTheme: handleToggleTheme }}>
      {props.children}
    </ThemeContext.Provider>
  );
}
