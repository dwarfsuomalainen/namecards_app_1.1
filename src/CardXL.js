import React from 'react';
import { useState, useEffect } from "react";
import { Card } from 'react-bootstrap';
import { useParams, useNavigate } from "react-router-dom";
import Button1 from "./Button";
import styles from "./CardXL.module.css"

const urlApi = "https://jsonplaceholder.typicode.com/users";
function getJson(userId) {
  return fetch(urlApi + "/" + userId).then((response) => response.json());
}

const CardXL = () => {

  const params = useParams();
  const [user, setUser] = useState();
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/");
  };
  useEffect(() => {
    getJson(params.userId).then((responseData) => setUser(responseData));
  }, []);
  if (!user) return null;
  return (
    <Card className={styles.card}>
        <Card.Body className={styles.cardBody}>
      <div>- name: {user.name}</div>
      <div>- username: {user.username}</div>
      <div>- email: {user.email}</div>
      <div>- phone: {user.phone}</div>
      <div>- company: {user.company.name}</div>
      <div>- website: <a href= {'http://'+ user.website} target="_blank" rel="noopener noreferrer">
         http://{user.website}
    </a></div>
      <div>- address:</div>
      <div><ul>
        <li>street: {user.address.street}</li>
        <li>suite: {user.address.suite}</li>
        <li>city: {user.address.city}</li>
        <li>zipcode: {user.address.zipcode}</li>
      </ul></div></Card.Body>
      <Button1 handleClick={handleClick} label="BACK TO MAIN" />
    </Card>
  );
};

export default CardXL;
