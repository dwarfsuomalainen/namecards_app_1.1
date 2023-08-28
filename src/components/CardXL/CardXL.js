import React from "react";
import { Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

import { Button } from "../Button";

import styles from "./CardXL.module.css";

export const CardXL = ({ user }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/");
  };

  if (!user) return null;

  return (
    <Card className={styles.card}>
      <Card.Body className={styles.cardBody}>
        <ul className={`${styles.list} ${styles.dashList}`}>
          <li>name: {user.name}</li>
          <li>username: {user.username}</li>
          <li>email: {user.email}</li>
          <li>phone: {user.phone}</li>
          {/* <li>company: {user.company.name}</li> */}
          <li>
            website:{" "}
            <a
              href={"http://" + user.website}
              target="_blank"
              rel="noopener noreferrer"
            >
              {user.website}
            </a>
          </li>
          <li>
            address:
            <ul className={`${styles.list} ${styles.discList}`}>
              {/* <li>street: {user.address.street}</li> */}
              {/* <li>suite: {user.address.suite}</li>
              <li>city: {user.address.city}</li>
              <li>zipcode: {user.address.zipcode}</li> */}
            </ul>
          </li>
        </ul>
        <Button handleClick={handleClick} label="Back to main" />
      </Card.Body>
    </Card>
  );
};
