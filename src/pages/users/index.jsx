import React from "react";
import { AdminPage } from "../../containers/AdminPage/AdminPage";
import UsersFilters from "../../components/UsersFilters/UsersFilters";
import UsersList from "../../components/UsersList/UsersList";
import styles from "./users.module.css";
import Button from "../../components/atomic/Button/Button";

export const Users = () => {
  return (
    <AdminPage>
      <div className={styles.header}>
        <h2 className={styles.title}>Пользователи</h2>
        <Button>Сбросить фильтр</Button>
      </div>
      <div>
        <UsersFilters />
      </div>
      <div className={styles.userList}>
        <UsersList />
      </div>
    </AdminPage>
  );
};
