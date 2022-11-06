import React, { useEffect, useState } from "react";
import styles from "./DatePicker.module.css";
import classNames from "classnames";
import { useRef } from "react";
import { CustomInput } from "./CustomInput/CustomInput";
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export const DatePicker = React.forwardRef(
  (className = "", variant, ...props) => {
    const [startDate, setStartDate] = useState();

    return (
      <div className={styles.wrapper}>
        <ReactDatePicker
          className={styles.datePicker}
          selected={startDate}
          onChange={(date) => setStartDate(date)}
          customInput={<CustomInput />}
        />
      </div>
    );
  }
);
