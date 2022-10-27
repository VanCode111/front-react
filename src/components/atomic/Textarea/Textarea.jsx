import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import classes from './Textarea.module.css';

export const Textarea = ({
    className = '',
    ...props
}) => (
    <textarea className={cn(classes.textarea, className)} cols={'30'} rows={'8'} {...props} />
);

Textarea.propTypes = {
    className: PropTypes.string,
};
