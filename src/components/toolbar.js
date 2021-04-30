import React from 'react';
import classes from './toolbar.module.css';
import Navigationitems from './navigationitems'
import Menu from './menu';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import {Route, Switch} from 'react-router-dom';
import Mainpage from './mainpage';
import Homepage from './homepage';
import Profile from './profilepage';
import Form from '../container/store/form';
import Todolist from '../container/to_dolist';
import Detailpage from '../container/detailpage';


const Toolbar=(props)=>{
   

   return(
   <div>
     <header className={classes.Toolbar}>  
        <Menu clicked={props.change}/>
        <nav style={{display: 'flex'}}>
           <FontAwesomeIcon icon={faShoppingCart} style={{fontSize: '28px', marginTop: '10px',}}/>
           <Navigationitems />
        </nav>
    </header>
    <Switch>
            <Route path='/mainpage'  component={Mainpage} />
             <Route path='/homepage' component={Homepage} />
             <Route path='/profile/:name' component={Profile} />
            <Route path='/form' component={Form} />
            <Route path='/todo_list' component={Todolist} />
            <Route path='/detail-page/:id' component={Detailpage} />

            
    </Switch>
  </div>
   )
}

export default Toolbar;