import React from "react";
import { Card } from "../../containers";
import { Form } from "../Form/Form";
import styles from "./UsersFilters.module.css";
import classNames from "classnames";

const UsersFilters = () => {
  return (
    <Card color="white">
      <Form className={styles.form}>
        <Form.Input
          name="id"
          label="ID:"
          placeholder="ID:"
          containerClass={classNames(styles.formItem, styles.userId)}
          className={styles.formInput}
          labelPosition="top"
        />

        <Form.Input
          containerClass={classNames(styles.formItem, styles.lastName)}
          name="id"
          label="Фамилия:"
          placeholder="Фамилия:"
          className={styles.formInput}
          labelPosition="top"
        />

        <Form.Input
          name="id"
          label="Имя:"
          placeholder="Имя:"
          containerClass={classNames(styles.formItem, styles.name)}
          className={styles.formInput}
          labelPosition="top"
        />
        <Form.Input
          name="id"
          label="Почта:"
          placeholder="Почта:"
          containerClass={classNames(styles.formItem, styles.email)}
          className={styles.formInput}
          labelPosition="top"
        />
        <Form.Input
          name="id"
          label="id"
          containerClass={classNames(styles.formItem, styles.date)}
          className={styles.formInput}
          labelPosition="top"
        />
        <Form.Input
          name="id"
          label="id"
          containerClass={classNames(styles.formItem, styles.dateRegist)}
          className={styles.formInput}
          labelPosition="top"
        />
      </Form>
    </Card>
  );
};

export default UsersFilters;
