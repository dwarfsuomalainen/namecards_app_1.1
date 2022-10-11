import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import { getUser } from "../../api/userApi";
import { CardXL } from "../../components";

import styles from "./UserPage.module.css";

export const UserPage = () => {
  const params = useParams();
  const [user, setUser] = useState();

  useEffect(() => {
    getUser(params.userId).then((user) => setUser(user));
  });

  return (
    <div className={styles.page}>
      <CardXL user={user} />
    </div>
  );
};
