import React from 'react';


export default function User(props){
    
    return(
        <div className='card-container'>
            {props.user.map(user => (
             <div key={user.id} className='user-card'>
                 <img src={user.avatar_url} alt={user.login}/>
                 <div>
                    <h3>{user.login}</h3>
                 </div>
             </div>   
            ))}
        </div>
    )
}