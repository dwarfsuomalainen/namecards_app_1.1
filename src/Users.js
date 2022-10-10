import React,{useState,useEffect} from 'react';
import CardM from './CardM';
import styles from './Users.module.css' 

const urlApi ='https://jsonplaceholder.typicode.com/users'

function getJson() {
    return fetch(urlApi)
    .then(response => response.json())
        }
        //console.log(responseData)

export const Users = () => {
    const [users, setUsers] = useState([])
    
    useEffect(() => {
    getJson().then(responseData => setUsers(responseData))
    },[])    
return <div className={styles.container}>
    {users.map( user => <CardM key={user.id} user={user}/>)}
</div>
}

