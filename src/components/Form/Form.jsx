import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { Controller, useForm } from "react-hook-form";

import { withLabel } from "./withLabel";
import {
  Input as AtomicInput,
  Textarea as AtmoicTextarea,
  DatePicker as AtmoicDatePicker,
} from "../atomic";
import { FormContext } from "./context";

import classes from "./Form.module.css";
import { useImperativeHandle } from "react";

const DatePicker = ({ name, id, register, ...props }) => (
  <AtmoicDatePicker id={id} {...register(name)} {...props} />
);

const Input = ({ name, type = "text", id, register, ...props }) => (
  <AtomicInput type={type} id={id} {...register(name)} {...props} />
);

Input.propTypes = {
  id: PropTypes.string,
  type: PropTypes.string,
  name: PropTypes.string,
  register: PropTypes.func,
};

const Option = ({
  label,
  name,
  data,
  id,
  className,
  register,
  variant,
  labelPosition,
  ...props
}) => (
  <select
    name={name}
    id={id}
    {...register(name)}
    className={classNames(classes.select, className, {
      [classes.secondarySelect]: labelPosition === "top",
    })}
    {...props}
  >
    {data.map((item) => (
      <option value={item.value}>{item.content}</option>
    ))}
  </select>
);

Option.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string,
  className: PropTypes.string,
  data: PropTypes.arrayOf(
    PropTypes.objectOf({
      value: PropTypes.string,
      content: PropTypes.string,
    })
  ),
  register: PropTypes.func,
  id: PropTypes.string,
};

const Textarea = ({ name, register, id, control, ...props }) => (
  <Controller
    control={control}
    name={name}
    render={({ field }) => (
      <AtmoicTextarea name={name} id={id} {...field} {...props} />
    )}
  />
);

Textarea.propTypes = {
  name: PropTypes.string,
  register: PropTypes.func,
  id: PropTypes.string,
};

// export const Checkbox = ({ }) => (
// )

export const Form = React.forwardRef(
  ({ onSubmit, children, initialValue, onUpdateValue, ...props }, ref) => {
    const { handleSubmit, register, reset, watch, control } = useForm();

    watch((data) => {
      console.log("datga", data);
      onUpdateValue(data);
    });

    useImperativeHandle(
      ref,
      () => ({
        setValue: reset,
      }),
      [reset]
    );

    return (
      // eslint-disable-next-line react/jsx-no-constructed-context-values
      <FormContext.Provider value={{ register, control }}>
        <form onSubmit={handleSubmit(onSubmit)} {...props}>
          {children}
        </form>
      </FormContext.Provider>
    );
  }
);

Form.propTypes = {
  onSubmit: PropTypes.func,
  children: PropTypes.element,
};

Form.Input = withLabel(Input);
Form.Option = withLabel(Option);
Form.Textarea = withLabel(Textarea);
Form.DatePicker = withLabel(DatePicker);
