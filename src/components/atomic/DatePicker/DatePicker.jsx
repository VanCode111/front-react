import React, { useEffect } from "react";
import styles from "./DatePicker.module.css";
import classNames from "classnames";
import { useRef } from "react";

export const DatePicker = React.forwardRef(
  (className = "", variant, ...props) => {
    const inputPicker = useRef();

    return (
      <div>
        <input
          classNames={styles.datePicker}
          type="date"
          {...props}
          ref={inputPicker}
        />
      </div>
    );
  }
);
