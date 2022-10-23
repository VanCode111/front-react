import cn from 'classnames';
import React, { useId, useContext } from 'react';

import { FormContext } from './context';

import classes from './Form.module.css';

// eslint-disable-next-line react/prop-types
export const withLabel = (Component) => ({ label, containerClass = '', ...props }) => {
    const { register = null } = useContext(FormContext);
    const id = useId();
    return (
        <div className={cn(classes.inputContainer, containerClass)}>
            <label htmlFor={id} className={classes.inputLabel}>{label}</label>
            <Component register={register} id={id} {...props} />
        </div>
    );
};
