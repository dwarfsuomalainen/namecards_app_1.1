import React from "react";
import { Button as BootstrapButton } from "react-bootstrap";
import styles from "./Button.module.css";

/*const buttonStyle = {
  margin: '5px',
  color: 'white',
  cursor: 'pointer',
};*/

export const Button = ({ label, handleClick }) => (
  <BootstrapButton className={styles.button} onClick={handleClick}>
    {label}
  </BootstrapButton>
);
