import React, { useState,useContext } from 'react';
import GithubContext from '../../context/github/githubContext'
import AlertContext from '../../context/alert/alertContext'

const Search =()=> {
    const [text,setText]=useState("")

    const githubContext=useContext(GithubContext)

    const {users,clearUsers,searchUsers}=githubContext

    const alertContext=useContext(AlertContext)

    const {setAlert}=alertContext

    const onInputChangeHandler=(e)=>{
         setText(e.target.value)
     }

    const onFormSubmit=(e)=>{
        e.preventDefault()
        if(!text){
              setAlert('Please Enter Something','light')
        }else{
              setText('');
              searchUsers(text)
        }
      
    } 

        return ( 
            <div>
                <form onSubmit={onFormSubmit} className='form'>
                    <input onChange={onInputChangeHandler} type="text" value={text} name='text' placeholder='Search Users'/>
                    <input type="submit" value='Search' className='btn btn-dark btn-block'/>
                </form>
                {
                    users.length>0 &&(
                          <button onClick={clearUsers} className='btn btn-light btn-block'>Clear</button>
                    )
                }
              
            </div>
         );
    }

 
export default Search;