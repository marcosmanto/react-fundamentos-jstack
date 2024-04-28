import React, { useState, createContext } from "react";

export const ThemeContext = createContext();

export function ThemeProvider(props) {
  const [theme, setTheme] = useState("dark");

  function handleToggleTheme() {
    setTheme((prevState) => {
      const newTheme = prevState === "dark" ? "light" : "dark";
      document.body.className = newTheme;
      return newTheme;
    });
  }

  return (
    <ThemeContext.Provider value={{ theme, onToggleTheme: handleToggleTheme }}>
      {props.children}
    </ThemeContext.Provider>
  );
}
