import React from "react";
import cn from "classnames";
import { PropTypes } from "prop-types";

import classes from "./Input.module.css";

export const Input = React.forwardRef(
  ({ type = "text", className = "", variant, ...props }, ref) => (
    <input
      type={type}
      className={cn(classes.input, className, classes[`variant_${variant}`])}
      {...props}
      ref={ref}
    />
  )
);

Input.propTypes = {
  placeholder: PropTypes.string,
  type: PropTypes.string,
  className: PropTypes.string,
};
