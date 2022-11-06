import React from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';

import { Card } from '../../containers';
import { Form } from '../Form/Form';
import { ReactComponent as Accepted } from '../../static/images/accepted.svg';

import classes from './AccountForm.module.css';

export const AccountForm = ({ mode, className, isAdmin }) => {
    const { t } = useTranslation();

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
                        <Form.Input label={t('adminAcc.form.name')} name="firstName" />
                        <Form.Input label={t('adminAcc.form.surname')} name="lastName" />
                        <Form.Option
                            label={t('adminAcc.form.gender')}
                            name="sex"
                            data={[{
                                value: 'woman',
                                content: 'Женский',
                            }, {
                                value: 'man',
                                content: 'Мужской',
                            }]}
                        />
                        <Form.Input label={t('adminAcc.form.mail')} name="email" type="email" />
                        <Form.Input label={t('adminAcc.form.password')} name="password" type="password" />
                    </div>
                    <div className={classes.list}>
                        <Form.Textarea label={t('adminAcc.form.about')} name="about" containerClass={classes.textarea} placeholder="Расскажите о себе" />
                    </div>
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
