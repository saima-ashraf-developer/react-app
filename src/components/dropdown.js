import React, { useState } from 'react';

const Dropdown=(props)=>{
    const[inputvalue, setInputvalue] = useState("")

    const filterChangehandler=(e)=>{
        const value= e.target.value
        setInputvalue(value)
    }
    return(
        <div >
            <input type='text' placeholder='Search...' value={inputvalue} onChange={filterChangehandler}/>
        </div>
    )
}

export default Dropdown;