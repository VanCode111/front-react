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
    const { register = null, control } = useContext(FormContext);
    const id = useId();
    return (
      <div
        className={cn(
          classes.inputContainer,
          containerClass,
          classes[labelPosition]
        )}
      >
        <label
          htmlFor={id}
          className={cn(
            classes.inputLabel,
            labelClass,
            classes[`variant_${variant}`]
          )}
        >
          {label}
        </label>
        <Component
          register={register}
          id={id}
          {...props}
          variant={variant}
          control={control}
        />
      </div>
    );
  };
