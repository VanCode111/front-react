import React from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';

import { Point } from '../Point/Point';
import styles from './ListItem.module.css';

export const ListItem = ({
    children, color, className, ...props
}) => (
    <li className={cn(styles.listItem, className)} {...props}>
        <Point color={color} />
        <span className={styles.text}>{children}</span>
    </li>
);

ListItem.propTypes = {
    children: PropTypes.string,
    color: PropTypes.string.isRequired,
    className: PropTypes.string,
};
