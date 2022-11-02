import React from "react";
import styles from "./UserListItem.module.css";

const UserListItem = ({ items }) => {
  return (
    <div className={styles.listItem}>
      {items.map(({ value, width }) => (
        <div className={styles.itemValue} style={{ flexBasis: `${width}px` }}>
          {value}
        </div>
      ))}
    </div>
  );
};

export default UserListItem;
