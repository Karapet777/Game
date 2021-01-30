import React from "react";

const Button = ({ onClick, title, className }) => (
  <button onClick={onClick} className={className}>
    {title}
  </button>
);

export default Button;
