import React, {useReducer} from 'react'
import axios from 'axios'
import GithubContext from './githubContext'
import GithubReducer from './githubReducer'
import {SEARCH_USERS,CLEAR_USERS,GET_REPOS,GET_USER,SET_LOADING} from '../types'

const GithubState=(props)=>{

    const initialState={
        users:[],
        user:{},
        repos:[],
        loading:false
    }

    const [state,dispatch]=useReducer(GithubReducer,initialState)

    const searchUsers=async(text)=>{
        setLoading()
         const request=await axios.get(`https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`)
         dispatch({
             type:SEARCH_USERS,
             payload:request.data.items
         })
    }

    const searchUser=async(username)=>{
        setLoading()
          const request=await axios.get(`https://api.github.com/users/${username}?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`)
          dispatch({
              type:GET_USER,
              payload:request.data
          })
    }

       const getRepos=async(username)=>{
        setLoading()
         const request=await axios.get(`https://api.github.com/users/${username}/repos?per_page=5&sort=created:asc&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`)
         dispatch({
             type:GET_REPOS,
             payload:request.data
         })
    }

        const clearUsers=()=>{
        dispatch({
            type:CLEAR_USERS
        })
    }

    const setLoading=()=>{
        dispatch({
            type:SET_LOADING,
        })
    }



 

    return (
        <GithubContext.Provider value={{
            users:state.users,
            user:state.user,
            repos:state.repos,
            loading:state.loading,
            searchUsers,searchUser,setLoading,getRepos,clearUsers
        }}>
            {props.children}
        </GithubContext.Provider>
    )
}

export default GithubState