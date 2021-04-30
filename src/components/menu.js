import React from 'react';
import './menu.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons'

const Menu=(props)=>{
    return(
             <div className='Menu' onClick={props.clicked}>
                 <FontAwesomeIcon icon={faBars} />
                Menu
             </div>
        
    )
}

export default Menu;