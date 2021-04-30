
import * as actionsType from './actionTypes' ;



const Initialstage= {
    name: '',
    company: '',
    color: '',
    size: '',
    loading: false,
    card: {},
    data: [],
    handlemodalclose: false,
}

const Reducer=(state= Initialstage, action)=>{
    switch (action.type) {
        case (actionsType.INPUT_VALUE):
            console.log({some: action.payload});
            return {
                ...state,
               ...action.payload,
            }
        case (actionsType.SAVE_DATA):
            return {
                ...state,
                ...action.payload,
               
            }
        default:
            return state
    }
}

export default Reducer;