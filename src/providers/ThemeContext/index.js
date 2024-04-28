import React, { useState, createContext } from "react";
import * as themeStyles from "./theme.css";

export const ThemeContext = createContext();

export function ThemeProvider(props) {
  const [theme, setTheme] = useState("dark");

  document.body.className =
    theme === "dark" ? themeStyles.dark : themeStyles.light;

  function handleToggleTheme() {
    setTheme((prevState) => {
      return prevState === "dark" ? "light" : "dark";
    });
  }

  return (
    <ThemeContext.Provider value={{ theme, onToggleTheme: handleToggleTheme }}>
      {props.children}
    </ThemeContext.Provider>
  );
}
