import React from "react";
import PropTypes from "prop-types";
import cn from "classnames";

import classes from "./Textarea.module.css";
import { Controller } from "react-hook-form";

export const Textarea = ({ className = "", ...props }) => (
  <textarea
    className={cn(classes.textarea, className)}
    cols="30"
    rows="8"
    {...props}
  />
  //   <Controller
  //     control={control}
  //     name="description"
  //     render={({ field }) => (
  //       <textarea
  //         className={cn(classes.textarea, className)}
  //         cols="30"
  //         rows="8"
  //         {...props}
  //         {...field}
  //       />
  //     )}
  //   />
);

Textarea.propTypes = {
  className: PropTypes.string,
};
