import { forwardRef } from "react";
import styles from "./CustomInput.module.css";
import { ReactComponent as ArrowIcon } from "../../../../static/images/arrow.svg";
export const CustomInput = forwardRef(({ value, onClick, open }, ref) => (
  <button className={styles.input} onClick={onClick} ref={ref}>
    {value || <span className={styles.placeholder}>__/__/____</span>}
    <ArrowIcon />
  </button>
));
