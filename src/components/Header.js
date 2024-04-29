import React, { useContext } from "react";
import PropTypes from "prop-types";
import { ThemeContext } from "../providers/ThemeContext";
import Title from "./Title";

export default function Header({ title, children }) {
  const { theme, onToggleTheme } = useContext(ThemeContext);

  return (
    <>
      <Title>
        {title}
        &nbsp;
        <span>
          <small>
            <button onClick={onToggleTheme}>
              {theme === "light" ? "😐" : "😑"}
            </button>
          </small>
        </span>
      </Title>

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
