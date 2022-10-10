import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button1 from './Button';
import { Card } from 'react-bootstrap';
import styles from './CardM.module.css';
  
const CardM = ({user}) => {
const navigate = useNavigate()
 const handleClick = () => {
    navigate('/'+ user.id)
 }
 return (   
<Card className={styles.card}>
    <Card.Body className={styles.cardBody}>
    <div className={styles.avatar}><span className={styles.nameLetter}>{user.name[0]}</span></div>
    <div className={styles.name}>{user.name}</div>
    <div className={styles.nick}>@{user.username}</div>
    <div><a href= {'http://'+ user.website} target="_blank" rel="noopener noreferrer">
        http://{user.website}
    </a></div>
 <Button1 handleClick={handleClick} label='MORE DETAILS'/> </Card.Body>  
</Card>
)};

export default CardM;

