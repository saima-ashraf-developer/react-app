import classes from './listitems.module.css';
import React from 'react';
import {something} from '../container/store/actions'
import {connect} from 'react-redux';




const Listitems=(props)=>{
    

    // useEffect(() => {
    //     console.log("asbajsdbjhasdbasduiog: ", {list}, {reduxData: props.data});
    //     props.reduxData ? setList(props.data) : setList([])
    // }, [])

    // const deleteHandler=(key)=>{
    //     setList(props.data);
    //     setTimeout(() => {
    //         console.log('timeout gone re baba')
    //     }, 3000);
    //     console.log('this is the key: ', key, {list})
    //     const newlist= [...list];

    //     newlist.splice(index,1)
    //     setList(newlist);
       
      
    // }

    const showData = () => {
      console.log('waht thehelmlml;j: ', props.data)
        const s = props.data ? props.data.map((e) => {
            return (
                <div className={classes.Card} key={e.key} onClick={()=>props.click(e.key)}>
                    <div className={classes.Lists}>
                     <img className={classes.Img} src={e.data.url} alt='images' style={{width: '100%'}}/>
                    <p>Product name is <span style={{color: 'orange'}}>{e.data.name}</span></p>
                    <p>Price:$<b>{e.data.size}</b> </p>
                    <p>Company:<b>{e.data.company}</b> </p>
                    <p>Color:<b>{e.data.color}</b> </p> 
                    <br />
                </div>
                </div>
                
                )
        }) : null
        return s
    }




    return(
        <div>
          <h1 style={{color: 'orange'}}>Products</h1>
          { showData()}
        </div>
    )
}
const mapStateToProps = (state) => {
    return {
        forms: state
    }
}

const mapDispatchToProps=(dispatch)=>{
    return{
       
        something: (data) => dispatch(something(data)),
        // onproductadded: ()=>dispatch(productdetail())
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Listitems);