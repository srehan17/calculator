import React from "react";

const isOperator = val => {
  return !isNaN(val) || val === "." || val === "=" || val === "C";
};

const Button = props => (
  <button
    className={`button-wrapper ${
      isOperator(props.children) ? null : "operator"
    }`}
    onClick={() => props.handleClick(props.children)}
  >
    {props.children}
  </button>
);

export default Button;
