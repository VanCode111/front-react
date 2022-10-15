import React from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';

import styles from './VerticalProgressBar.module.css';
import { Point } from '../../index';

export const VerticalProgressBar = ({
    color, label, point, percent, className, ...props
}) => {
    const fillerStyles = {
        height: `${percent}%`,
        backgroundColor: color,
    };

    return (
        <div className={cn(styles.progressBar, className)} {...props}>
            <span className={styles.value}>{`${percent}%`}</span>
            <div className={styles.container}>
                <div className={styles.filler} style={fillerStyles} />
            </div>
            { label && <span className={styles.label}>{label}</span> }
            { point && <Point color={color} className={styles.point} /> }
        </div>
    );
};

VerticalProgressBar.propTypes = {
    color: PropTypes.string.isRequired,
    percent: PropTypes.number.isRequired,
    className: PropTypes.string,
    label: PropTypes.string,
    point: PropTypes.bool,
};
