import React from "react";
import styles from "./UserListItem.module.css";
import cn from "classnames";

const UserListItem = ({ items, className = "" }) => {
  return (
    <div className={cn(styles.listItem, className)}>
      {items.map(({ value, width }) => (
        <div className={styles.wrapper} style={{ flexBasis: `${width}px` }}>
          <div className={styles.itemValue}>{value}</div>
        </div>
      ))}
    </div>
  );
};

export default UserListItem;
