import React, { useContext } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { ThemeContext } from "../providers/ThemeContext";

const Title = styled.h1`
  color: #7530e2;
`;

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
