
import React from "react";
import NavigationItem from "./navigationitem";
import  "./navigationitems.css";



const navigationItems = () => (

  <ul className="Navigationitems">
   
   <NavigationItem link='/mainpage'>Mainpage</NavigationItem>
   <NavigationItem link='/homepage'>Homepage</NavigationItem>
  </ul>

  
);

export default navigationItems;
