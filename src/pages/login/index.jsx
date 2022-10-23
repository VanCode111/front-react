import React from "react";
import styles from "./login.module.css";
import classNames from "classnames";
import { Form } from "../Form/Form";

const Login = () => {
  return (
    <div className={styles.login}>
      <h5>Авторизация</h5>
      <Form>
        <Form.Input />
      </Form>
    </div>
  );
};

export default Login;
