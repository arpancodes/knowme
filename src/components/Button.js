import React from "react";
import "./Button.css";

const Button = props => (
  <a
    style={{ backgroundColor: props.color }}
    target="_blank"
    href={`https://www.${props.link}/${props.username}`}
  >
    <i className={`fab fa-${props.icon}`} />
    <br />
    {props.children}
  </a>
);
export default Button;
