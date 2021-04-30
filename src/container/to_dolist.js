import React, { useState } from 'react';
import classes from './to_dolist.module.css';
import Listitems from './listitems';
import {library} from '@fortawesome/fontawesome-svg-core';
import {faTrash} from '@fortawesome/free-solid-svg-icons';

library.add(faTrash);
const Todolist=()=>{
    const[inputtext, setInputText] = useState({
        text: '',
        key: '',
})
const[items, setItems] =useState([])

const changeHandler=(e)=>{
    setInputText({text: e.target.value, key: new Date()})
}
const addItemHandler=(e)=>{
    e.preventDefault()
    const newtext= [...items, inputtext]
    console.log(newtext)
    setItems(newtext)
    setInputText({
        text: '',
        key: '',
    })
}

    return(
        <div style={{marginTop: '10rem'}} className={classes.Todo} >
            <header>
                <form className={classes.todo_form} onSubmit={addItemHandler}>
                    <input type='text' placeholder= 'Enter Text' value={inputtext.text} onChange={changeHandler}/>
                    <button type='submit'>Add</button>
                </form>
            </header>
            <Listitems items={items}/>
        </div>
    )
}

export default Todolist;