import React from 'react';
import styles from './Components.css'; 

const UserData = (props) => {

    return(
     <>
     <div className={styles.card} style={{ textAlign: 'center',borderRadius: '15px', maxWidth: '300px',margin: 'auto',background:'lightblue',padding: '28px'}}>
       <img src={props.img} alt="John" style={{ width: '100%'}} />
       <h1>name: {props.name}</h1>
       <p>Bio: {props.bio}</p>
       <p>github url: {props.url}</p>
       <br/>
       <p>twitter: @{props.twitter}</p>
       <br/>
       <p>followers: {props.followers}</p>
       <br/>
       <p>following: {props.following}</p>
       <br/>
     </div>
     </>
    )

}
export default UserData
