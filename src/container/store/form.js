import React,{Fragment, useEffect, useState} from 'react';
// import * as actions from './actions';
import {inputValue, something} from './actions'
import {connect} from 'react-redux';
import {useHistory} from 'react-router-dom';
import classes from './form.module.css';
// import Aux from 'axios';
import axios from 'axios';
import Listitems from '../listitems';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import Pagination from './pagination';



const Form=(props)=>{
    const [inputs, setInputs] = useState({
        url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFJR64YXH7wvySs_4oNSA2EFVPeldwiIYY8g&usqp=CAU',
        name: '',
        company: '',
        color: '',
        size: '',
        loading: false,
    });
// const[selectedfile, setSelectedfile] = useState(null);
const history = useHistory();  
const[inputvalue, setInputvalue] = useState([]);

const [posts, setPosts] = useState([]);
const [loading,setLoading] = useState(false);
const [currentpage,setCurrentpage] = useState(1);
const [postsperpage] = useState(10);




    useEffect(()=>{
        axios.get('https://test-project-81543-default-rtdb.firebaseio.com/inputs.json')
        .then(response=>{
            console.log('..............................: ', response.data)
            let so = [];
            for (let key in response.data) {
                so.push({key, data: response.data[key]});
            }
           setInputvalue(so);
        //    setPosts(response.data);
            props.something({data: so});
        })
    }, []);
    
    const onChangename=(event)=>{
       
    setInputs(inputs => ({...inputs, [event.target.name]: event.target.value}))
};
    const submitHandler=(event)=>{
        console.log(props)
        event.preventDefault(); 
        console.log(inputs)
        axios.post('https://test-project-81543-default-rtdb.firebaseio.com/inputs.json', inputs)
        .then(response=>{
            console.log(response.data)
            return response.data
        })
        // props.history.goBack('/');
       
    }  

    const DetailpageHandler=(key)=>{
        axios({
            method: 'get',
            url:`https://test-project-81543-default-rtdb.firebaseio.com/inputs/${key}.json`
        }).then(({data}) => {
            console.log('this is the data: ',data)
            
            console.log(key)
            props.some({card: {data, key}})
          
            history.push(`/detail-page/${key}`)

        }).catch((err) => {
            console.log('this is the error: ', err)
        })
    }
    
    const filterChangehandler=(e)=>{
        const currentvalue= e.target.value;
       setInputs(currentvalue)
     
       const filteredname= props.forms.data.filter(val=>{
           const nam=val.data.name
           return nam.includes(currentvalue)
       })
       console.log(filteredname);
    //    props.something({data: filteredname});
       setInputvalue(filteredname)
    }
    const Clickedhandler=()=>{
        setInputs(inputs=>({...inputs, loading: !inputs.loading}))
        console.log(inputs.loading)
    }

//   const indexOfLastPost = currentpage * postsperpage;
//   const indexOfFirstpage = indexOfLastPost - postsperpage;
//   const currentPosts = inputValue.slice(indexOfFirstpage, indexOfLastPost);
  
  
    return(
        <Fragment>
         <div
            className={classes.Modal}
            style={{
              transform: inputs.loading ? "translateY(0)" : "translateY(-100vh)",
              opacity: inputs.loading ? "1" : "0",
            }}>
                <form onSubmit={(e) => submitHandler(e)}  >
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
                    <button style={{display: 'block'}} type='submit'>Submit</button>
                </form>
         </div> 
        <div className={classes.Filter}>
               <input type='text' placeholder='Search...' value={inputs.name} onChange={filterChangehandler}/>
               <button><FontAwesomeIcon icon={faSearch} style={{fontSize: '14px'}}/></button>
        </div>
            <button className={classes.Formbutton} onClick={Clickedhandler}>Open The Form</button>
        
        <Listitems data={inputvalue}  click={(key)=>DetailpageHandler(key)} />
       
       
      
    </Fragment>
    )
}


const mapStateToProps = (state) => {
   
    return {
        forms: state
    }
}

const mapDispatchToProps=(dispatch)=>{
    return{
        // onChangename: (event)=>dispatch(actions.inputValue(event))
        some: ({card}) => dispatch(inputValue(card)),
        something: (data) => dispatch(something(data))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Form);
