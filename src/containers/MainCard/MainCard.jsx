import React from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';

import styles from './MainCard.module.css';

export const MainCard = ({
    children, className, color, ...props
}) => (
    <div className={cn(className, styles.mainCard)} {...props}>
        {children}
    </div>
);

MainCard.propTypes = {
    children: PropTypes.element,
    className: PropTypes.string,
    color: PropTypes.string,
};
