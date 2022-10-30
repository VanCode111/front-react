import React, { useState } from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';

import SunIcon from './assets/sun.svg';
import MoonIcon from './assets/moon.svg';

import styles from './ThemeButton.module.css';

export const ThemeButton = ({ className, ...props }) => {
    const [theme, setTheme] = useState('light');

    const changeTheme = () => {
        setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
    };

    return (
        <button
            type="button"
            onClick={changeTheme}
            className={cn(className, styles.button, {
                [styles.buttonLight]: theme === 'light',
                [styles.buttonDark]: theme === 'dark',
            })}
            {...props}
        >
            <img
                src={theme === 'light' ? SunIcon : MoonIcon}
                alt=""
            />
        </button>
    );
};

ThemeButton.propTypes = {
    className: PropTypes.string,
};
