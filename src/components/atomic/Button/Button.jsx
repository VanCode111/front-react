import React from "react";
import PropTypes from "prop-types";
import styles from "./Button.module.css";
import cn from "classnames";

const Button = ({ type, children, color }) => (
  // eslint-disable-next-line react/button-has-type
  <button type={type} className={cn(styles.button, styles[color])}>
    {children}
  </button>
);

Button.propTypes = {
  type: PropTypes.string,
  children: PropTypes.element,
};

export default Button;
