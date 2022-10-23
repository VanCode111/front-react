import React from 'react';
import cn from 'classnames';
import PropTypes, { arrayOf } from 'prop-types';

import styles from './MainCard.module.css';

export const MainCard = ({
    children, classNames, ...props
}) => (
    <div className={cn(...classNames, styles.mainCard)} {...props}>
        {children}
    </div>
);

MainCard.propTypes = {
    children: arrayOf(PropTypes.element),
    classNames: PropTypes.arrayOf(PropTypes.string),
};
