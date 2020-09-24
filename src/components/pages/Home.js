import React,{Fragment} from 'react';
import Search from '../user/Search'
import Users from '../user/Users'

const Home = () => {
    return ( 
        <Fragment>
            <Search></Search>
            <Users></Users>
        </Fragment>   
     );
}
 
export default Home;