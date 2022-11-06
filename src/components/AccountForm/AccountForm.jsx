import React from 'react';
import PropTypes from 'prop-types';

import { Card } from '../../containers';
import { Form } from '../Form/Form';
import { ReactComponent as Accepted } from '../../static/images/accepted.svg';

import classes from './AccountForm.module.css';

export const AccountForm = ({ mode, className, isAdmin }) => {
    const onSubmit = (data) => {
        alert(JSON.stringify(data));
    };

    console.log('mode', mode);

    return (
        <Card className={className}>
            <Form onSubmit={onSubmit} className={classes.container}>
                <div className={classes.wrapper}>
                    <div>
                        <figure>
                            <img src="http://cdn.onlinewebfonts.com/svg/img_235552.png" alt="photo" className={classes.avatar} />
                            <figcaption className={classes.avatarTitle}>
                                <div>Alena</div>
                                <div>18 ye</div>
                            </figcaption>
                        </figure>
                    </div>
                    <div className={classes.list}>
                        <Form.Input label="Имя" name="firstName" />
                        <Form.Input label="Фамилия" name="lastName" />
                        <Form.Option
                            label="Пол"
                            name="sex"
                            data={[{
                                value: 'woman',
                                content: 'Женский',
                            }, {
                                value: 'man',
                                content: 'Мужской',
                            }]}
                        />
                        <Form.Input label="Почта" name="email" type="email" />
                        <Form.Input label="Пароль" name="password" type="password" />
                    </div>
                    <div className={classes.list}>
                        <Form.Textarea label="Обо мне" name="about" containerClass={classes.textarea} placeholder="Расскажите о себе" />
                    </div>
                    {
                        isAdmin &&  <div className={classes.status}>
                        <span>Admin</span>
                        <Accepted />
                    </div>
                    }
                   
                </div>
                {
                    mode === 'my'
                && (
                    <>
                        <span>Укажите род деятельности</span>
                        <div className={classes.wrapper}>
                            <div className={classes.checkboxContainer}>
                                <Form.Input label="Работаю" type="checkbox" name="workable" containerClass={classes.checkbox} labelClass={classes.checkboxLabel} />
                                <Form.Input label="Учусь" type="checkbox" name="workable" containerClass={classes.checkbox} labelClass={classes.checkboxLabel} />
                                <Form.Input label="Не работаю" type="checkbox" name="workable" containerClass={classes.checkbox} labelClass={classes.checkboxLabel} />
                            </div>

                            <div className={classes.checkboxContainer}>
                                <Form.Input label="Студент" type="checkbox" name="activity" containerClass={classes.checkbox} labelClass={classes.checkboxLabel} />
                                <Form.Input label="Школьник" type="checkbox" name="activity" containerClass={classes.checkbox} labelClass={classes.checkboxLabel} />
                                <Form.Input label="Другое" type="checkbox" name="activity" containerClass={classes.checkbox} labelClass={classes.checkboxLabel} />
                            </div>
                        </div>
                    </>
                )
                }
            </Form>
        </Card>
    );
};

AccountForm.propTypes = {
    mode: PropTypes.string,
    className: PropTypes.string,
};
