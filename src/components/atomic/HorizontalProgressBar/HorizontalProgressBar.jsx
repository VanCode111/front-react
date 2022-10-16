import React from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';

import styles from './HorizontalProgressBar.module.css';

export const HorizontalProgressBar = ({
    color, label, percent = null, maxValue = null, curValue = null, className, ...props
}) => {
    let progress;

    if (percent) {
        progress = percent;
    } else if (maxValue && curValue) {
        progress = (curValue / maxValue) * 100;
    }

    const fillerStyles = {
        width: `${progress}%`,
        backgroundColor: color,
    };

    const valueStyles = {
        position: 'absolute',
        top: '-24px',
        left: `${progress - 2}%`,
    };

    return (
        <div className={cn(styles.progressBar, className)} {...props}>
            { label && <span className={styles.label}>{label}</span> }
            <div className={styles.bar}>
                <span style={valueStyles} className={styles.value}>{percent ? `${progress}%` : curValue}</span>
                <div className={styles.container}>
                    <div className={styles.filler} style={fillerStyles} />
                </div>
            </div>
        </div>
    );
};

HorizontalProgressBar.propTypes = {
    color: PropTypes.string.isRequired,
    percent: PropTypes.number,
    maxValue: PropTypes.number,
    curValue: PropTypes.number,
    className: PropTypes.string,
    label: PropTypes.string,
};
