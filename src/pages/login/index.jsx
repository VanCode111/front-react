import React from "react";
import { useTranslation } from 'react-i18next';

import styles from "./login.module.css";
import { Form } from "../../components/Form/Form";
import Button from "../../components/atomic/Button/Button";
import { Page } from "../../containers/Page/Page";

import { ReactComponent as LockIcon } from "../../static/images/lock.svg";

export const Login = () => {
  const { t } = useTranslation();

  const onSubmit = () => {
    // console.log(125);
  };

  return (
    <Page>
      <div className={styles.login}>
        <h5 className={styles.title}>{t('auth.heading')}</h5>
        <Form onSubmit={onSubmit} className={styles.form}>
          <Form.Input
            labelPosition="top"
            variant="secondary"
            color="orange"
            label={
              <span className={styles.label}>
                <LockIcon className={'themeSvg'} />{t('auth.loginLabel')}
              </span>
            }
            name="login"
            className={styles.input}
          />
          <Form.Input
            labelPosition="top"
            variant="secondary"
            color="orange"
            label={
              <span className={styles.label}>
                <LockIcon className={'themeSvg'} />{t('auth.passwordLabel')}
              </span>
            }
            name="password"
            type="password"
            className={styles.input}
          />
          <Button type="submit">{t('auth.buttonText')}</Button>
        </Form>
      </div>
    </Page>
  );
};
