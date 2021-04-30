import * as actionsTypes from './actionTypes';
import axios from 'axios';

export const inputValue=(card)=>{
    console.log('in the action: ', card);
    return{
        type: actionsTypes.INPUT_VALUE,
        payload: {card}
    }
}

export const something = (data) => {
    console.log({data});
    return {
        type: actionsTypes.SAVE_DATA,
        payload: data
    }
}

export const productdetail= ()=>{
    return dispatch => {
        axios
        .get("https://test-project-81543-default-rtdb.firebaseio.com/inputs.json")
        .then(({ data }) => {
          const items = [];
          for (let key in data) {
            items.push({ ...data[key], id: key });
          }
        dispatch()
        })
    }
     
  }

   