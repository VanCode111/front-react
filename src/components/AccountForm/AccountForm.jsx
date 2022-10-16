import React from 'react';

import { Card } from '../../containers';
import { Form } from '../Form/Form';
import { ReactComponent as Accepted } from '../../static/images/accepted.svg';

import classes from './AccountForm.module.css';

export const AccountForm = () => {
    const onSubmit = (data) => {
        alert(JSON.stringify(data));
    };

    return (
        <Card>
            <Form onSubmit={onSubmit} className={classes.wrapper}>
                <div>
                    <figure>
                        <img src={'http://cdn.onlinewebfonts.com/svg/img_235552.png'} alt={'photo'} className={classes.avatar} />
                        <figcaption className={classes.avatarTitle}>
                            <div>Alena</div>
                            <div>18 ye</div>
                        </figcaption>
                    </figure>
                </div>
                <div className={classes.list}>
                    <Form.Input label={'Имя'} name={'firstName'} />
                    <Form.Input label={'Фамилия'} name={'lastName'} />
                    <Form.Option
                        label={'Пол'}
                        name={'sex'}
                        data={[{
                            value: 'woman',
                            content: 'Женский',
                        }, {
                            value: 'man',
                            content: 'Мужской',
                        }]}
                    />
                    <Form.Input label={'Почта'} name={'email'} type={'email'} />
                    <Form.Input label={'Пароль'} name={'password'} type={'password'} />
                </div>
                <div className={classes.list}>
                    <Form.Textarea label={'Обо мне'} name={'about'} containerClass={classes.textarea} placeholder={'Расскажите о себе'} />
                </div>
                <div className={classes.status}>
                    <span>Admin</span>
                    {/* <img src={Accepted} alt={'accepted'} /> */}
                    <Accepted />
                </div>
            </Form>
        </Card>
    );
};
