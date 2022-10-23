import React from 'react';
import styles from './Button.module.css';

const Button = ({ type, children }) => (
    <button type={type} className={styles.button}>
        {children}
    </button>
);

export default Button;
