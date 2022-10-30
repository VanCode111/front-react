import React from 'react';
import classes from './about.module.css';
import { Form } from '../../components/Form/Form';
import { Page } from '../../containers';
import Button from '../../components/atomic/Button/Button';

import { ReactComponent as PersonIcon } from '../../static/images/person.svg';

export const About = () => {
    const onSubmit = (data) => {
        console.log(data);
    };

    return (
        <Page>
            <div className={classes.login}>
                <h5 className={classes.title}>О себе</h5>
                <Form onSubmit={onSubmit} className={classes.form}>
                    <Form.Option
                        variant={'secondary'}
                        label={(
                            <span className={classes.label}>
                                <PersonIcon />
                                {' '}
                                Чем вы занимаетесь?
                            </span>
                        )}
                        name={'doing'}
                        placeholder={'Учусь'}
                        type="password"
                        className={classes.input}
                        data={[
                            {
                                value: 'study',
                                content: 'Учусь',
                            },
                            {
                                value: 'work',
                                content: 'Работаю',
                            },
                        ]}
                    />
                    <Form.Option
                        variant={'secondary'}
                        label={(
                            <span className={classes.label}>
                                <PersonIcon />
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
                    <Button type="submit">Добавить информацию</Button>
                </Form>
            </div>
        </Page>
    );
};
