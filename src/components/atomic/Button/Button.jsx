import React from 'react';
import PropTypes from 'prop-types';
import styles from './Button.module.css';

const Button = ({ type, children }) => (
    // eslint-disable-next-line react/button-has-type
    <button type={type} className={styles.button}>
        {children}
    </button>
);

Button.propTypes = {
    type: PropTypes.string,
    children: PropTypes.element,
};

export default Button;
