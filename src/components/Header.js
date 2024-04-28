import React, { useContext } from "react";
import PropTypes from "prop-types";
import { ThemeContext } from "../providers/ThemeContext";

export default function Header({ title, children }) {
  const { theme, onToggleTheme } = useContext(ThemeContext);

  return (
    <>
      <h1>
        {title}
        &nbsp;
        <span>
          <small>
            <button onClick={onToggleTheme}>
              {theme === "light" ? "😐" : "😑"}
            </button>
          </small>
        </span>
      </h1>

      {children}
    </>
  );
}

Header.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
};

Header.defaultProps = {
  title: "JStack's Blog",
};
