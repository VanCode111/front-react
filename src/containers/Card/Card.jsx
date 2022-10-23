import React from 'react';
import cn from 'classnames';
import PropTypes, { arrayOf } from 'prop-types';

import classes from './Card.module.css';

export const Card = ({ children, classNames = [], ...props }) => (
    <div className={cn(...classNames, classes.card)} {...props}>
        {children}
    </div>
);

Card.propTypes = {
    children: arrayOf(PropTypes.element),
    classNames: PropTypes.arrayOf(PropTypes.string),
};
