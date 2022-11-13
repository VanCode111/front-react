import React from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';

import { Card } from '../../containers';
import { Form } from '../Form/Form';
import { ReactComponent as Accepted } from '../../static/images/accepted.svg';

import classes from './AccountForm.module.css';
import { useState } from 'react';

export const AccountForm = ({ mode, className, isAdmin }) => {
    const { t } = useTranslation();

    const onSubmit = (data) => {
        alert(JSON.stringify(data));
    };

    const [name, setName] = useState("Иван");
    const [surname, setSurname] = useState("Иванов");
    const [email, setEmail] = useState("email@gmail.com");
    const [password, setPassword] = useState("12345678");
    const [about, setAbout] = useState("Profile");

    const getAge = birthDate => Math.floor((new Date() - new Date(birthDate).getTime()) / 3.15576e+10)

    console.log('mode', mode); 

    const [sex, setSex] = useState('man');

    return (
        <Card className={className}>
            <Form onSubmit={onSubmit} className={classes.container}>
                <div className={classes.wrapper}>
                    <div>
                        <figure>
                            <img src="http://cdn.onlinewebfonts.com/svg/img_235552.png" alt="photo" className={classes.avatar} />
                            <figcaption className={classes.avatarTitle}>
                                <div>{name}</div>
                                <div>{getAge('2003-01-01')} лет</div>
                            </figcaption>
                        </figure>
                    </div>
                    <div className={classes.list}>
                        <Form.Input label={t('adminAcc.form.name')} name="firstName" value={name} onChange={(e) => setName(e.target.value)}/>
                        <Form.Input label={t('adminAcc.form.surname')} value={surname} onChange={(e) => setSurname(e.target.value)} />
                        <Form.Option
                            label={t('adminAcc.form.gender')}
                            name="sex"
                            value={sex}
                            onChange={(e) => setSex(e.target.value)}
                            data={[{
                                value: 'woman',
                                content: 'Женский',
                            }, {
                                value: 'man',
                                content: 'Мужской',
                            }]}
                        />
                        <Form.Input label={t('adminAcc.form.mail')} name="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                        <Form.Input label={t('adminAcc.form.password')} name="password" type="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
                    </div>
                    <div className={classes.list}>
                        <Form.Textarea label={t('adminAcc.form.about')} name="about" containerClass={classes.textarea} value={about} onChange={(e) => setAbout(e.target.value)} placeholder="Расскажите о себе" />
                    </div>
                    {
                        isAdmin &&  (
                            <div className={classes.status}>
                                <span>Admin</span>
                                <Accepted />
                            </div>
                        )
                    }
                    {mode !== 'my' && (
                        <div className={classes.status}>
                            <span>Admin</span>
                            <Accepted />
                        </div>
                    )}
                </div>
                {
                    mode === 'my'
                && (
                    <>
                        <span>{t('adminAcc.specificType')}</span>
                        <div className={classes.wrapper}>
                            <div className={classes.checkboxContainer}>
                                <Form.Input label={t('adminAcc.specificTypeList.working')} type="checkbox" name="workable" containerClass={classes.checkbox} labelClass={classes.checkboxLabel} />
                                <Form.Input label={t('adminAcc.specificTypeList.studying')} type="checkbox" name="workable" containerClass={classes.checkbox} labelClass={classes.checkboxLabel} />
                                <Form.Input label={t('adminAcc.specificTypeList.notWorking')} type="checkbox" name="workable" containerClass={classes.checkbox} labelClass={classes.checkboxLabel} />
                            </div>

                            <div className={classes.checkboxContainer}>
                                <Form.Input label={t('adminAcc.specificTypeList.student')} type="checkbox" name="activity" containerClass={classes.checkbox} labelClass={classes.checkboxLabel} />
                                <Form.Input label={t('adminAcc.specificTypeList.pupil')} type="checkbox" name="activity" containerClass={classes.checkbox} labelClass={classes.checkboxLabel} />
                                <Form.Input label={t('adminAcc.specificTypeList.other')} type="checkbox" name="activity" containerClass={classes.checkbox} labelClass={classes.checkboxLabel} />
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
