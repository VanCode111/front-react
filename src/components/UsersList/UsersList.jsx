import React from "react";
import { Card } from "../../containers/Card/Card";
import styles from "./UsersList.module.css";
import UserListItem from "../UserListItem/UserListItem";

const items = [
  {
    name: "Иван",
    lastName: "Иван",
    asg: "Иван",
    asga: "Иван",
    naame: "Иван",
    naames: "aaaa",
    naamea: "asgag",
  },
  { name: "Иван", lastName: "Иван", asg: "Иван", asga: "Иван", naame: "Иван" },
  { name: "Иван", lastName: "Иван", asg: "Иван", asga: "Иван", naame: "Иван" },
  { name: "Иван", lastName: "Иван", asg: "Иван", asga: "Иван", naame: "Иван" },
  { name: "Иван", lastName: "Иван", asg: "Иван", asga: "Иван", naame: "Иван" },
  { name: "Иван", lastName: "Иван", asg: "Иван", asga: "Иван", naame: "Иван" },
  { name: "Иван", lastName: "Иван", asg: "Иван", asga: "Иван", naame: "Иван" },
  { name: "Иван", lastName: "Иван", asg: "Иван", asga: "Иван", naame: "Иван" },
];

const UsersList = () => {
  return (
    <Card color="white">
      <div className={styles.usersList}>
        {items.map(({ name, lastName, asg, asga, naame, naames, naamea }) => (
          <UserListItem
            items={[
              { value: name, width: 97 },
              { value: lastName, width: 287 },
              { value: asg, width: 235 },
              { value: asga, width: 255 },
              { value: naames, width: 180 },
              { value: naamea, width: 180 },
            ]}
          />
        ))}
      </div>
    </Card>
  );
};

export default UsersList;
