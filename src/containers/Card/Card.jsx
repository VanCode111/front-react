import React from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';

import classes from './Card.module.css';

export const Card = ({ children, className, ...props }) => (
    <div className={cn(className, classes.card)} {...props}>
        {children}
    </div>
);

Card.propTypes = {
    children: PropTypes.element,
    className: PropTypes.string,
};
