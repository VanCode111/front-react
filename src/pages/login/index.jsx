import React from "react";
import styles from "./login.module.css";
import classNames from "classnames";
import { Form } from "../../components/Form/Form";

export const Login = () => {
  const onSubmit = () => {
    console.log(125);
  };

  return (
    <div className={styles.login}>
      <h5>Авторизация</h5>
      asgsag
      <Form onSubmit={onSubmit}>
        <Form.Input label={"Имя"} name={"firstName"} />
      </Form>
    </div>
  );
};
