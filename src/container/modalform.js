import React, { Fragment, useState } from 'react';
import {connect} from 'react-redux';
import axios from 'axios';
import classes from './modalform.module.css';
import {useHistory} from 'react-router-dom';

const Modalform=(props)=>{
    const history = useHistory()
    const [inputs, setInputs]= useState({
        url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEpDg7eJ46FQ7ZRmkiPIWufa-ZcBQ3ItdH2Q&usqp=CAU',
        name: '',
        company: '',
        color: '',
        size: '',
    })


 const onChangename=(event)=>{
    setInputs(inputs => ({...inputs, [event.target.name]: event.target.value}))
 };
 
 const submitHandler=(key)=>{

    const result = props.forms.card.data;
    console.log({key})

    axios.put(`https://test-project-81543-default-rtdb.firebaseio.com/inputs/${key}.json`, inputs)
    .then(response=>{
                console.log(response.data)
                return response.data    
            })
            props.clicked();
            history.goBack();
            return true
        }  
    return(
        <Fragment>
      
            
            <form onSubmit={(e) => { e.preventDefault(); return submitHandler(props.forms.card.key)}}  >
                <h3 style={{textAlign:'center'}}>Update Card</h3>
                    <label style={{marginTop: '15px'}}>Product image </label>
                    <input  style={{marginBottom: '15px'}}type='text' value= {inputs.url} name='url' /><br />
                    <label style={{marginTop: '15px'}}>Product Name </label>
                    <input  style={{marginBottom: '15px'}}type='text' value= {inputs.name} name='name' onChange={onChangename}/><br />
                    <label>Product Company</label>
                    <input  style={{marginBottom: '15px'}}type='text' value= {inputs.company} name='company'onChange={onChangename}/><br />
                    <label>Product Color</label>
                    <input style={{marginBottom: '15px'}} type='text' value= {inputs.color} name='color' onChange={onChangename}/> <br />
                    <label>Product Price</label>
                    <input style={{marginBottom: '15px'}} type='text' value= {inputs.size} name='size' onChange={onChangename}/> <br />
                    <button className={classes.Button} type='submit' value='update'>Update</button>
                    <button className={classes.Buttonc} onClick={props.clicked}>Close</button>
             </form>
           
        </Fragment>
        
    )
}
const mapStateToProps = (state) => {
    console.log(state.card.data)
    return {
        forms: state
    }
}
export default connect(mapStateToProps)(Modalform);