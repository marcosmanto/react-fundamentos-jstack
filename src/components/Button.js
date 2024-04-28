import React from "react";
import PropTypes from "prop-types";

export default function Button({ onClick, children }) {
  return (
    <>
      &nbsp;
      <button onClick={onClick}>{children}</button>
    </>
  );
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired,
};
