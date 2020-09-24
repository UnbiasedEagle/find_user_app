import React from 'react';
import {Link} from 'react-router-dom'

const UserItem =({user})=> {      
        return ( 
            <div className='card text-center'>
                <img className='round-img' style={{width:'60px'}} src={user.avatar_url} alt={user.login}/>
        <h3>{user.login}</h3>
        <div>
            <Link to={`/user/${user.login}`} className='btn btn-sm my-1 btn-dark'>More</Link>
        </div>
            </div>
         );
    }
 
export default UserItem;