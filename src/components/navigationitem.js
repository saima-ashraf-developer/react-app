
import React from "react";
import { NavLink } from "react-router-dom";
import classes from  "./navigationitem.module.css";

const navigationItem = (props) => (
  <li className={classes.Navigationitem}>
    
     <NavLink
      className="Navigationitem.active"
      to={props.link}
      exact={props.exact}
    >
      {props.children}
    </NavLink>
      
  </li>
  
);

export default navigationItem;
