import React from "react";
import { Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

import { Button } from "../Button";

import styles from "./CardM.module.css";

export const CardM = ({ user }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/" + user.id);
  };

  return (
    <Card>
      <Card.Body className={styles.cardBody}>
        <div className={styles.avatar}>
          <span className={styles.nameLetter}>{user.name[0]}</span>
        </div>
        <div className={styles.infoContainer}>
          <div className={styles.name}>{user.name}</div>
          <div className={styles.nick}>@{user.username}</div>
          <div>
            <a
              href={"http://" + user.website}
              target="_blank"
              rel="noopener noreferrer"
            >
              {user.website}
            </a>
          </div>
        </div>
        <Button handleClick={handleClick} label="More details" />
      </Card.Body>
    </Card>
  );
};
