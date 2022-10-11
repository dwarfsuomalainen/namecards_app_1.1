import React, { useState, useEffect } from "react";

import { getUsers } from "../../api/userApi";
import { CardM } from "../../components";

import styles from "./UsersPage.module.css";

export const UsersPage = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getUsers().then((userList) => setUsers(userList));
  }, []);

  return (
    <div className={styles.page}>
      {users.map((user) => (
        <CardM key={user.id} user={user} />
      ))}
    </div>
  );
};
