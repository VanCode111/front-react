import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { useForm } from 'react-hook-form';

import { withLabel } from './withLabel';
import { Input as AtomicInput, Textarea as AtmoicTextarea } from '../atomic';
import { FormContext } from './context';

import classes from './Form.module.css';

const Input = ({
    name, type = 'text', id, register, ...props
}) => (
    <AtomicInput type={type} id={id} {...register(name)} {...props} />
);

Input.propTypes = {
    id: PropTypes.string,
    type: PropTypes.string,
    name: PropTypes.string,
    register: PropTypes.func,
};

const Option = ({
    label, name, data, id, className, register, ...props
}) => (
    <select
        name={name}
        id={id}
        {...register(name)}
        className={classNames(classes.select, className)}
        {...props}
    >
        {data.map((item) => <option value={item.value}>{item.content}</option>)}
    </select>
);

Option.propTypes = {
    label: PropTypes.string,
    name: PropTypes.string,
    className: PropTypes.string,
    data: PropTypes.arrayOf(PropTypes.objectOf({
        value: PropTypes.string,
        content: PropTypes.string,
    })),
    register: PropTypes.func,
    id: PropTypes.string,
};

const Textarea = ({
    name,
    register,
    id,
    ...props
}) => (
    <AtmoicTextarea
        name={name}
        id={id}
        {...register(name)}
        {...props}
    />
);

Textarea.propTypes = {
    name: PropTypes.string,
    register: PropTypes.func,
    id: PropTypes.string,
};

export const Form = ({ onSubmit, children, ...props }) => {
    const { handleSubmit, register } = useForm();

    return (
        // eslint-disable-next-line react/jsx-no-constructed-context-values
        <FormContext.Provider value={{ register }}>
            <form onSubmit={handleSubmit(onSubmit)} {...props}>
                {children}
            </form>
        </FormContext.Provider>
    );
};

Form.propTypes = {
    onSubmit: PropTypes.func,
    children: PropTypes.element,
};

Form.Input = withLabel(Input);
Form.Option = withLabel(Option);
Form.Textarea = withLabel(Textarea);
