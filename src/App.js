import React  from 'react';
import {BrowserRouter,Route,Switch} from 'react-router-dom'
import Home from './components/pages/Home'
import NotFound from './components/pages/NotFound'
import Navbar from './components/Layout/Navbar'
import Alert from './components/Layout/Alert';
import About from './components/pages/About';
import User from './components/user/User'
import GithubState from './context/github/GithubState';
import AlertState from './context/alert/AlertState';
import './App.css';


const App =()=> {

    return (
      <GithubState>
        <AlertState>
          <BrowserRouter>  
          <div className='App'>
          <Navbar></Navbar>
          <div className="container">
            <Alert></Alert>
            <Switch>
            <Route exact path='/' component={Home}></Route>
            <Route exact path='/about' component={About}></Route>
            <Route exact path='/user/:login' component={User}></Route>
            <Route component={NotFound}></Route>
          </Switch>    
          </div>  
        </div>
        </BrowserRouter>
      </AlertState>   
    </GithubState>
    );
  }

export default App;
