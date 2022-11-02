import cn from "classnames";
import React, { useId, useContext } from "react";

import { FormContext } from "./context";

import classes from "./Form.module.css";

export const withLabel =
  (Component) =>
  ({
    // eslint-disable-next-line react/prop-types
    label,
    containerClass = "",
    labelClass = "",
    variant,
    labelPosition,
    ...props
  }) => {
    const { register = null } = useContext(FormContext);
    const id = useId();
    return (
      <div
        className={cn(
          classes.inputContainer,
          containerClass,
          classes[`variant_${variant}`],
          classes[labelPosition]
        )}
      >
        <label htmlFor={id} className={cn(classes.inputLabel, labelClass)}>
          {label}
        </label>
        <Component register={register} id={id} {...props} variant={variant} />
      </div>
    );
  };
