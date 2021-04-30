import React, { Fragment, useState } from 'react';
import {useHistory} from 'react-router-dom';
import {connect} from 'react-redux';
import axios from 'axios';
import classes from './listitems.module.css';
import Modal from 'react-modal';
import Modalform from './modalform';


Modal.setAppElement('#root')

const Detailpage=(props)=>{
    const history = useHistory();
    const[modal, setModal] = useState(false);

    
    const Handler=()=>{
        history.goBack();
    }

    const deleteHandler = (key) => {
       axios.delete(`https://test-project-81543-default-rtdb.firebaseio.com/inputs/${key}.json`)
       .then(res=>{
          console.log(res.data)
          history.goBack();
       })

    }
    // const editHandler = (key) => {
    //     axios.patch(`https://test-project-81543-default-rtdb.firebaseio.com/inputs/${key}.json`, {   
    //     })
    //     .then(res=>{
    //        console.log(res.data)
    //        history.goBack();
    //     })
    //  }
     const modalisopenHandler=(key)=>{
         console.log(key)
        setModal(true)
     }
     const modalcloseHandler=()=>{
        setModal(false)
     }
    const showData = () => {
        const e = props.forms.card.data
       
              return (
                  <div style={{marginLeft: '40rem'}}>
                      <div className={classes.Lists}>
                       <img 
                       style={{width: '400px', height: '400px'}} src={e.url? e.url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEpDg7eJ46FQ7ZRmkiPIWufa-ZcBQ3ItdH2Q&usqp=CAU'} alt='img' style={{width: '100%'}}/>
                      <p>Product name is <span style={{color: 'orange'}}>{e.name}</span></p>
                      <p>Price:$<b>{e.size}</b> </p>
                      <p>Company:<b>{e.company}</b> </p>
                      <p>Color:<b>{e.color}</b> </p> 
                      <br />
                      <button style={{backgroundColor:'salmon', padding: '0 15px'}} onClick={()=>deleteHandler(props.forms.card.key)}>Delete</button>
                      <button style={{backgroundColor:'salmon' , padding: '0 15px'}} onClick={()=>modalisopenHandler(props.forms.card.key)}>Update</button>
                      <Modal isOpen={modal} onRequestClose={()=>modalcloseHandler()} style={{overlay:{
                          backgroundColor: 'rgba(255,255,255,0.5)'
                      },
                      content:{
                          background:' #000',
                          display:'flex',
                          border: 'none',
                          alignItems: 'center',
                          justifyContent: 'center',
                          color: 'white'

                      }}}>
                        <Modalform clicked={modalcloseHandler} />
                      </Modal>
                  </div>
                  </div>
               )     
      }
    return(
        <Fragment>
        <div style={{marginTop: '10rem'}}>
        {showData()}    
         <button onClick={Handler} style={{backgroundColor:'gray' , padding: '10px 30px', marginLeft: '40%', marginTop: '40px'}}>Go Back</button> 
         </div>
        </Fragment>
        
    )
}
    
const mapStateToProps = (state) => {
    console.log('bjkgjhgjhgjhgi: ', state.card.data)
    return {
        forms: state
    }
}
// const mapDispatchToProps=(dispatch)=>{
//     return{
//         // onChangename: (event)=>dispatch(actions.inputValue(event))
//         some: (data) => dispatch(inputValue(data)),
// }
export default connect(mapStateToProps)(Detailpage);