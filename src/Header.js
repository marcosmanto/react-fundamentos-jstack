import React from "react";
import PropTypes from "prop-types";

export default function Header({ title, children, theme, onToggleTheme }) {
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
  theme: PropTypes.string.isRequired,
  title: PropTypes.string,
  children: PropTypes.node,
};

Header.defaultProps = {
  title: "JStack's Blog",
};
