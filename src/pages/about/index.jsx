import React from 'react';
import classes from './about.module.css';
import { Form } from '../../components/Form/Form';
import Button from '../../components/atomic/Button/Button';

import { ReactComponent as LockIcon } from '../../static/images/lock.svg';

export const About = () => {
    const onSubmit = () => {
        // console.log(125);
    };

    return (
        <div className={classes.login}>
            <h5 className={classes.title}>О себе</h5>
            <Form onSubmit={onSubmit} className={classes.form}>
                <Form.Input
                    variant={'secondary'}
                    label={(
                        <span className={classes.label}>
                            <LockIcon />
                            {' '}
                            Чем вы занимаетесь?
                        </span>
                    )}
                    name={'aboutFirst'}
                    className={classes.input}
                    placeholder={'Учусь'}
                />
                <Form.Option
                    variant={'secondary'}
                    label={(
                        <span className={classes.label}>
                            <LockIcon />
                            {' '}
                            Кем вы являетесь?
                        </span>
                    )}
                    name={'studentOrWho'}
                    placeholder={'Учусь'}
                    type="password"
                    className={classes.input}
                    data={[
                        {
                            value: 'student',
                            content: 'Студент',
                        },
                        {
                            value: 'notStudent',
                            content: 'Не студент',
                        },
                    ]}
                />
                <Button type="submit">Войти</Button>
            </Form>
        </div>
    );
};
