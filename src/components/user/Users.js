import React, { useContext } from 'react';
import UserItem from './UserItem'
import Spinner from '../Layout/Spinner';
import GithubContext from '../../context/github/githubContext'

const Users =()=>{
    const githubContext=useContext(GithubContext)
    const {loading,users}=githubContext
    if(loading){
        return <Spinner></Spinner>
    }
   return ( 
        <div style={userStyle}>
            {
                users.map((user,index)=>{
                    return (
                        <UserItem key={index} user={user}></UserItem>
                    )
                })
            }
        </div>
     );
    }
   
 
const userStyle={
    display:'grid',
    gridTemplateColumns:'repeat(3,1fr)',
    gridGap:'1rem'
}

export default Users;