import React from "react";
import styles from "./login.module.css";
import { Form } from "../../components/Form/Form";
import Button from "../../components/atomic/Button/Button";
import { Page } from "../../containers/Page/Page";

import { ReactComponent as LockIcon } from "../../static/images/lock.svg";

export const Login = () => {
  const onSubmit = () => {
    // console.log(125);
  };

  return (
    <Page>
      <div className={styles.login}>
        <h5 className={styles.title}>Авторизация</h5>
        <Form onSubmit={onSubmit} className={styles.form}>
          <Form.Input
            labelPosition="top"
            variant="secondary"
            color="orange"
            label={
              <span className={styles.label}>
                <LockIcon /> Введите логин
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
                <LockIcon /> Введите пароль
              </span>
            }
            name="password"
            type="password"
            className={styles.input}
          />
          <Button type="submit">Войти</Button>
        </Form>
      </div>
    </Page>
  );
};
