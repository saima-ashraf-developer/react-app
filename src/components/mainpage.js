import React from 'react';
import {Link} from 'react-router-dom';


const Mainpage=()=>{
    return(
        <div style={{marginTop: '100px'}}>
            <p>this is mainpage</p>
            <Link to='/profile/:name'>Check the Profile Page</Link><br />
            <Link to='/form' >open the form</Link><br />
            <Link to='todo_list'>TodoList</Link>
        </div>
    )
}
export default Mainpage;