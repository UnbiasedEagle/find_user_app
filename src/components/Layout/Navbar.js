import React, { Component } from 'react';
import {Link} from 'react-router-dom'

class Navbar extends Component {
    static defaultProps = {
        title: 'GithubFinder',
        icon: 'fab fa-github'
    }
    state = {  }
    render() { 
        return ( 
            <div className='navbar bg-primary'>
                <h1>
                    <i className={this.props.icon}></i> {this.props.title}</h1>
                    <ul>
                        <li>
                            <Link to='/'>Home</Link>
                        </li>
                        <li>
                            <Link to='/about'>About</Link>
                        </li>
                    </ul>
            </div>
         );
    }
}
 


export default Navbar;